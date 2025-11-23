import OpenAI from "openai";
import type { Core } from "@strapi/strapi";

/**
 * Translation service - supports multiple providers
 */
export default ({ strapi }: { strapi: Core.Strapi }) => {
  // Translation provider: 'openai', 'libretranslate', 'mymemory'
  // Default to 'mymemory' (free) if not set
  const TRANSLATION_PROVIDER = process.env.TRANSLATION_PROVIDER || "mymemory";

  /**
   * Initialize OpenAI client
   */
  const getOpenAIClient = () => {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error("OPENAI_API_KEY environment variable is not set");
    }

    strapi.log.info(`Using OpenAI API key: ${apiKey.substring(0, 10)}...`);
    strapi.log.info(
      `OpenAI Model: ${process.env.OPENAI_MODEL || "gpt-4o-mini"}`
    );

    return new OpenAI({
      apiKey: apiKey,
    });
  };

  /**
   * Translate using LibreTranslate (free, open-source)
   */
  const translateWithLibreTranslate = async (
    text: string,
    sourceLocale: string,
    targetLocale: string
  ): Promise<string> => {
    const apiUrl =
      process.env.LIBRETRANSLATE_API_URL ||
      "https://libretranslate.com/translate";

    // Map locale codes to language codes
    const localeToCode: Record<string, string> = {
      "tr-TR": "tr",
      "en-US": "en",
      "de-DE": "de",
      "fr-FR": "fr",
      "es-ES": "es",
      "it-IT": "it",
      "pt-PT": "pt",
      "ru-RU": "ru",
      "ar-SA": "ar",
      "ja-JP": "ja",
      "ko-KR": "ko",
      "zh-CN": "zh",
    };

    const sourceLang =
      localeToCode[sourceLocale] || sourceLocale.split("-")[0].toLowerCase();
    const targetLang =
      localeToCode[targetLocale] || targetLocale.split("-")[0].toLowerCase();

    try {
      strapi.log.info(
        `LibreTranslate: Translating from ${sourceLang} to ${targetLang}, text length: ${text.length}`
      );

      const requestBody = {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: "text", // Changed from 'html' to 'text' - LibreTranslate public API prefers 'text'
      };

      strapi.log.info(
        `LibreTranslate: Request body:`,
        JSON.stringify(requestBody).substring(0, 200)
      );

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseText = await response.text();
      strapi.log.info(
        `LibreTranslate: Response status: ${response.status}, body: ${responseText.substring(0, 200)}`
      );

      if (!response.ok) {
        let errorMessage = `LibreTranslate API error: ${response.status} ${response.statusText}`;
        try {
          const errorData = JSON.parse(responseText);
          errorMessage += ` - ${JSON.stringify(errorData)}`;
        } catch (e) {
          errorMessage += ` - ${responseText.substring(0, 200)}`;
        }
        throw new Error(errorMessage);
      }

      const data: any = JSON.parse(responseText);
      const translatedText = data.translatedText || text;
      strapi.log.info(
        `LibreTranslate: Translation successful, length: ${translatedText.length}`
      );
      return translatedText;
    } catch (error: any) {
      strapi.log.error("LibreTranslate error:", error);
      throw new Error(`LibreTranslate translation failed: ${error.message}`);
    }
  };

  /**
   * Translate using MyMemory Translation API (free tier)
   */
  const translateWithMyMemory = async (
    text: string,
    sourceLocale: string,
    targetLocale: string
  ): Promise<string> => {
    // Map locale codes to language codes
    const localeToCode: Record<string, string> = {
      "tr-TR": "tr",
      "en-US": "en",
      "de-DE": "de",
      "fr-FR": "fr",
      "es-ES": "es",
      "it-IT": "it",
      "pt-PT": "pt",
      "ru-RU": "ru",
      "ar-SA": "ar",
      "ja-JP": "ja",
      "ko-KR": "ko",
      "zh-CN": "zh",
    };

    const sourceLang =
      localeToCode[sourceLocale] || sourceLocale.split("-")[0].toLowerCase();
    const targetLang =
      localeToCode[targetLocale] || targetLocale.split("-")[0].toLowerCase();

    // MyMemory free tier has limits: max 500 CHARACTERS per request (not words!)
    // Split long text into chunks if needed
    const maxChars = 450; // Use 450 to be safe (leave some buffer)
    
    if (text.length > maxChars) {
      strapi.log.warn(
        `Text too long (${text.length} chars), splitting into chunks of ${maxChars} chars`
      );
      
      // Split by characters, trying to break at word boundaries when possible
      const chunks: string[] = [];
      let currentChunk = "";
      
      const words = text.split(/(\s+)/); // Keep whitespace
      
      for (const word of words) {
        // If adding this word would exceed limit, save current chunk and start new one
        if (currentChunk.length + word.length > maxChars && currentChunk.length > 0) {
          chunks.push(currentChunk.trim());
          currentChunk = word;
        } else {
          currentChunk += word;
        }
      }
      
      // Add remaining chunk
      if (currentChunk.trim().length > 0) {
        chunks.push(currentChunk.trim());
      }
      
      // If any chunk is still too long, split it forcefully
      const finalChunks: string[] = [];
      for (const chunk of chunks) {
        if (chunk.length > maxChars) {
          // Force split by characters
          for (let i = 0; i < chunk.length; i += maxChars) {
            finalChunks.push(chunk.substring(i, i + maxChars));
          }
        } else {
          finalChunks.push(chunk);
        }
      }

      strapi.log.info(`Split text into ${finalChunks.length} chunks`);
      
      // Translate chunks sequentially (to avoid rate limiting)
      const translatedChunks: string[] = [];
      for (let i = 0; i < finalChunks.length; i++) {
        const chunk = finalChunks[i];
        strapi.log.info(`Translating chunk ${i + 1}/${finalChunks.length} (${chunk.length} chars)`);
        const translated = await translateWithMyMemory(chunk, sourceLocale, targetLocale);
        translatedChunks.push(translated);
        
        // Add small delay between chunks to avoid rate limiting (except for last chunk)
        if (i < finalChunks.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 200)); // 200ms delay
        }
      }

      return translatedChunks.join(" ");
    }

    const apiKey = process.env.MYMEMORY_API_KEY || ""; // Optional, free tier works without key
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}${apiKey ? `&key=${apiKey}` : ""}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorText = await response.text().catch(() => "Unknown error");
        throw new Error(
          `MyMemory API error: ${response.status} ${response.statusText} - ${errorText}`
        );
      }

      const data: any = await response.json();

      // MyMemory API response structure
      if (data.responseStatus !== 200) {
        const errorMessage =
          typeof data.responseData === "string"
            ? data.responseData
            : data.responseData?.message ||
              JSON.stringify(data.responseData) ||
              "Unknown error";

        // Handle rate limiting
        if (
          data.responseStatus === 429 ||
          errorMessage.includes("quota") ||
          errorMessage.includes("limit")
        ) {
          strapi.log.warn(
            "MyMemory rate limit reached, waiting 1 second before retry..."
          );
          await new Promise((resolve) => setTimeout(resolve, 1000));
          // Retry once
          return translateWithMyMemory(text, sourceLocale, targetLocale);
        }

        throw new Error(
          `MyMemory translation error (${data.responseStatus}): ${errorMessage}`
        );
      }

      const translatedText = data.responseData?.translatedText || text;

      if (!translatedText || translatedText === text) {
        strapi.log.warn("MyMemory returned empty or same text, using original");
      }

      return translatedText || text;
    } catch (error: any) {
      const errorMessage = error?.message || String(error) || "Unknown error";
      const errorDetails = error?.response?.data
        ? JSON.stringify(error.response.data)
        : "";

      strapi.log.error("MyMemory error:", {
        message: errorMessage,
        details: errorDetails,
        textLength: text.length,
        sourceLocale,
        targetLocale,
      });

      // If it's a rate limit or temporary error, throw a more descriptive error
      if (
        errorMessage.includes("429") ||
        errorMessage.includes("quota") ||
        errorMessage.includes("limit")
      ) {
        throw new Error(
          `MyMemory rate limit exceeded. Please wait a moment and try again, or use a different translation provider.`
        );
      }

      throw new Error(`MyMemory translation failed: ${errorMessage}`);
    }
  };

  return {
    /**
     * Initialize OpenAI client
     */
    getOpenAIClient,

    /**
     * Translate text from source language to target language
     * Supports multiple providers: OpenAI, LibreTranslate, MyMemory
     */
    async translateText(
      text: string,
      sourceLocale: string,
      targetLocale: string
    ): Promise<string> {
      if (!text || text.trim().length === 0) {
        return text;
      }

      strapi.log.info(
        `Translating text from ${sourceLocale} to ${targetLocale} using ${TRANSLATION_PROVIDER}, length: ${text.length}`
      );

      // Use the configured translation provider
      // Skip LibreTranslate if no API key is configured (to avoid errors)
      switch (TRANSLATION_PROVIDER.toLowerCase()) {
        case "libretranslate":
          // Only use LibreTranslate if API URL is configured
          if (process.env.LIBRETRANSLATE_API_URL) {
            try {
              return await translateWithLibreTranslate(
                text,
                sourceLocale,
                targetLocale
              );
            } catch (error: any) {
              strapi.log.warn(
                "LibreTranslate failed, falling back to MyMemory:",
                error.message
              );
              // Fallback to MyMemory if LibreTranslate fails
              return translateWithMyMemory(text, sourceLocale, targetLocale);
            }
          } else {
            strapi.log.warn(
              "LibreTranslate API URL not configured, using MyMemory instead"
            );
            return translateWithMyMemory(text, sourceLocale, targetLocale);
          }

        case "mymemory":
          return translateWithMyMemory(text, sourceLocale, targetLocale);

        case "openai":
        default:
          // Use OpenAI
          const client = getOpenAIClient();

          // Map locale codes to language names for better translation
          const localeToLanguage: Record<string, string> = {
            "tr-TR": "Turkish",
            "en-US": "English",
            "de-DE": "German",
            "fr-FR": "French",
            "es-ES": "Spanish",
            "it-IT": "Italian",
            "pt-PT": "Portuguese",
            "ru-RU": "Russian",
            "ar-SA": "Arabic",
            "ja-JP": "Japanese",
            "ko-KR": "Korean",
            "zh-CN": "Chinese",
          };

          const sourceLanguage =
            localeToLanguage[sourceLocale] || sourceLocale.split("-")[0];
          const targetLanguage =
            localeToLanguage[targetLocale] || targetLocale.split("-")[0];

          try {
            const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
            strapi.log.info(`Calling OpenAI API with model: ${model}`);

            const response = await client.chat.completions.create({
              model: model,
              messages: [
                {
                  role: "system",
                  content: `You are a professional translator. Translate the following text from ${sourceLanguage} to ${targetLanguage}. 
                Preserve the original formatting, HTML tags, and structure. 
                Only return the translated text without any explanations or additional text.`,
                },
                {
                  role: "user",
                  content: text,
                },
              ],
              temperature: 0.3,
              max_tokens: 2000,
            });

            const translatedText =
              response.choices[0]?.message?.content?.trim() || text;
            strapi.log.info(
              `Translation successful, response length: ${translatedText.length}`
            );
            return translatedText;
          } catch (error: any) {
            strapi.log.error("OpenAI API Error:", error);
            if (error.response) {
              strapi.log.error("OpenAI API Error Details:", {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
              });

              // Handle specific error codes
              if (error.response.status === 429) {
                const errorMessage =
                  error.response.data?.error?.message || "Quota exceeded";
                throw new Error(
                  `OpenAI API quota exceeded: ${errorMessage}. Please check your billing at https://platform.openai.com/account/billing`
                );
              }

              throw new Error(
                `OpenAI API Error: ${error.response.status} ${JSON.stringify(error.response.data)}`
              );
            }
            throw error;
          }
      }
    },

    /**
     * Translate rich text (HTML) content
     */
    async translateRichText(
      richText: string,
      sourceLocale: string,
      targetLocale: string
    ): Promise<string> {
      // Rich text is usually stored as HTML/XML
      // We'll translate the text content while preserving HTML structure
      return this.translateText(richText, sourceLocale, targetLocale);
    },

    /**
     * Translate an entire content entry to target locale
     */
    async translateContent(
      contentType: string,
      entryId: number | string,
      sourceLocale: string,
      targetLocale: string
    ): Promise<any> {
      // In Strapi v5, use documents API for document IDs (strings)
      let sourceEntry = null;

      strapi.log.info(
        `Looking for entry: ${contentType} #${entryId} in locale ${sourceLocale}`
      );

      try {
        // If entryId is a string, it's likely a documentId - use documents API
        if (typeof entryId === "string") {
          try {
            strapi.log.info(
              `Trying to find via documents API with documentId: ${entryId}`
            );
            sourceEntry = await strapi.documents(contentType as any).findOne({
              documentId: entryId,
              locale: sourceLocale,
            });

            strapi.log.info(
              `Documents API result:`,
              sourceEntry ? "Found" : "Not found"
            );

            // If found via documents API, get the full entity data
            if (sourceEntry && sourceEntry.id) {
              strapi.log.info(`Getting entity data for id: ${sourceEntry.id}`);
              sourceEntry = await strapi.entityService.findOne(
                contentType as any,
                sourceEntry.id,
                {
                  locale: sourceLocale,
                  populate: "*",
                }
              );
            }
          } catch (docError: any) {
            strapi.log.warn(
              "Error finding entry via documents API:",
              docError.message
            );
            // Try entityService as fallback
            try {
              sourceEntry = await strapi.entityService.findOne(
                contentType as any,
                entryId,
                {
                  locale: sourceLocale,
                  populate: "*",
                }
              );
            } catch (entityError: any) {
              strapi.log.warn(
                "Error finding entry via entityService:",
                entityError.message
              );
            }
          }
        } else {
          // If entryId is a number, use entityService directly
          strapi.log.info(
            `Trying to find via entityService with id: ${entryId}`
          );
          sourceEntry = await strapi.entityService.findOne(
            contentType as any,
            entryId,
            {
              locale: sourceLocale,
              populate: "*",
            }
          );
        }

        if (!sourceEntry) {
          throw new Error(
            `Entry not found: ${contentType} #${entryId} in locale ${sourceLocale}`
          );
        }

        strapi.log.info(
          `Successfully found entry: ${sourceEntry.id || sourceEntry.documentId}`
        );
      } catch (error: any) {
        strapi.log.error("Error finding source entry:", error);
        throw new Error(
          `Entry not found: ${contentType} #${entryId} in locale ${sourceLocale}. Error: ${error.message}`
        );
      }

      if (!sourceEntry) {
        throw new Error(
          `Entry not found: ${contentType} #${entryId} in locale ${sourceLocale}`
        );
      }

      // Get content type schema to know which fields to translate
      const contentTypeSchema = strapi.contentTypes[contentType];
      if (!contentTypeSchema) {
        throw new Error(`Content type not found: ${contentType}`);
      }

      const translatedData: any = {};

      // Translate each field based on schema
      for (const [fieldName, fieldConfig] of Object.entries(
        contentTypeSchema.attributes
      )) {
        const field = fieldConfig as any;

        // Skip system fields and unique fields that shouldn't be copied
        if (
          [
            "id",
            "createdAt",
            "updatedAt",
            "publishedAt",
            "createdBy",
            "updatedBy",
            "locale",
            "localizations",
          ].includes(fieldName)
        ) {
          continue;
        }

        // Skip unique fields like legacyId - they should be unique per entry, not per translation
        if (field.unique === true && fieldName === "legacyId") {
          strapi.log.info(
            `Skipping unique field: ${fieldName} (will be auto-generated or left empty)`
          );
          continue;
        }

        const sourceValue = sourceEntry[fieldName];

        if (sourceValue === null || sourceValue === undefined) {
          continue;
        }

        // Handle different field types
        if (field.type === "text" || field.type === "string") {
          // Simple text fields
          translatedData[fieldName] = await this.translateText(
            String(sourceValue),
            sourceLocale,
            targetLocale
          );
        } else if (field.type === "richtext") {
          // Rich text fields
          translatedData[fieldName] = await this.translateRichText(
            String(sourceValue),
            sourceLocale,
            targetLocale
          );
        } else if (field.type === "relation") {
          // Relations - keep the same relation IDs
          // In Strapi v5, relations are linked by documentId, so we can keep the same ID
          // The relation will be automatically linked to the correct locale version
          if (
            sourceValue &&
            typeof sourceValue === "object" &&
            !Array.isArray(sourceValue)
          ) {
            // Single relation - use ID
            translatedData[fieldName] = sourceValue.id || sourceValue;
          } else if (Array.isArray(sourceValue)) {
            // Multiple relations - extract IDs
            translatedData[fieldName] = sourceValue.map((item: any) =>
              item && typeof item === "object" ? item.id || item : item
            );
          } else {
            // Simple ID value
            translatedData[fieldName] = sourceValue;
          }
        } else if (field.type === "component") {
          // Components - recursively translate
          if (Array.isArray(sourceValue)) {
            translatedData[fieldName] = await Promise.all(
              sourceValue.map((item: any) =>
                this.translateComponent(item, sourceLocale, targetLocale)
              )
            );
          } else if (sourceValue) {
            translatedData[fieldName] = await this.translateComponent(
              sourceValue,
              sourceLocale,
              targetLocale
            );
          }
        } else {
          // Other types - keep as is
          translatedData[fieldName] = sourceValue;
        }
      }

      // Create translated entry using documents API to properly link translations
      let translatedEntry;

      try {
        // Check if translation already exists
        let existingTranslation = null;
        if (sourceEntry.documentId) {
          try {
            existingTranslation = await strapi
              .documents(contentType as any)
              .findOne({
                documentId: sourceEntry.documentId,
                locale: targetLocale,
              });
          } catch (findError: any) {
            strapi.log.info(
              "No existing translation found, will create new one"
            );
          }
        }

        if (existingTranslation && existingTranslation.id) {
          // Update existing translation
          strapi.log.info(
            `Updating existing translation with id: ${existingTranslation.id}, locale: ${targetLocale}`
          );
          translatedEntry = await strapi.entityService.update(
            contentType as any,
            existingTranslation.id,
            {
              data: translatedData,
              locale: targetLocale,
            }
          );
          strapi.log.info(
            `Translation updated successfully. ID: ${translatedEntry.id}, Document ID: ${translatedEntry.documentId || "N/A"}, Locale: ${translatedEntry.locale || targetLocale}`
          );
        } else if (sourceEntry.documentId) {
          // Create new translation using clone to properly link translations
          strapi.log.info(
            `Creating new translation using clone API for locale: ${targetLocale}`
          );

          try {
            // Use clone to create translation linked to source (same documentId)
            const cloneResult: any = await strapi
              .documents(contentType as any)
              .clone({
                documentId: sourceEntry.documentId,
                locale: targetLocale,
              });

            strapi.log.info(
              `Clone API result:`,
              JSON.stringify(cloneResult, null, 2)
            );

            // Clone might return the document directly or in a different format
            // Try to find the cloned entry
            let clonedEntry: any = null;

            if (cloneResult && cloneResult.id) {
              clonedEntry = cloneResult;
            } else if (cloneResult && cloneResult.documentId) {
              // If clone returns documentId, fetch the full entry
              clonedEntry = await strapi.documents(contentType as any).findOne({
                documentId: cloneResult.documentId,
                locale: targetLocale,
              });
            } else {
              // Clone might not return the entry, so find it manually
              strapi.log.info(
                `Clone result doesn't contain ID, finding cloned entry manually`
              );
              try {
                clonedEntry = await strapi
                  .documents(contentType as any)
                  .findOne({
                    documentId: sourceEntry.documentId,
                    locale: targetLocale,
                  });

                if (!clonedEntry || !clonedEntry.id) {
                  // Translation doesn't exist yet, clone might have failed silently
                  strapi.log.warn(
                    `No existing translation found for documentId ${sourceEntry.documentId} in locale ${targetLocale}`
                  );
                  throw new Error(
                    "Clone operation did not create translation entry"
                  );
                }
              } catch (findError: any) {
                strapi.log.warn(
                  `Could not find cloned entry: ${findError.message}`
                );
                throw new Error(`Clone operation failed: ${findError.message}`);
              }
            }

            if (!clonedEntry || !clonedEntry.id) {
              throw new Error(
                "Could not find cloned entry after clone operation"
              );
            }

            strapi.log.info(
              `Found cloned entry. ID: ${clonedEntry.id}, Document ID: ${clonedEntry.documentId}, Locale: ${clonedEntry.locale || targetLocale}`
            );

            // Now update with translated data
            strapi.log.info(`Updating cloned translation with translated data`);
            translatedEntry = await strapi.entityService.update(
              contentType as any,
              clonedEntry.id,
              {
                data: translatedData,
                locale: targetLocale,
              }
            );

            strapi.log.info(
              `Translation updated with translated content. ID: ${translatedEntry.id}, Document ID: ${translatedEntry.documentId || "N/A"}, Locale: ${translatedEntry.locale || targetLocale}`
            );
          } catch (cloneError: any) {
            // Clone API might not be available or might fail - this is OK, we'll use fallback
            const errorMessage = cloneError?.message || "Unknown error";
            const errorStack = cloneError?.stack || "";

            strapi.log.warn(
              `Clone API not available or failed (this is OK): ${errorMessage}`
            );

            // Check if translation already exists
            let existingTranslation = null;
            try {
              existingTranslation = await strapi
                .documents(contentType as any)
                .findOne({
                  documentId: sourceEntry.documentId,
                  locale: targetLocale,
                });
            } catch (findError: any) {
              // Translation doesn't exist, we'll create it
              strapi.log.info(
                "No existing translation found, will create new one"
              );
            }

            if (existingTranslation && existingTranslation.id) {
              // Update existing translation
              strapi.log.info(
                `Updating existing translation with id: ${existingTranslation.id}`
              );
              translatedEntry = await strapi.entityService.update(
                contentType as any,
                existingTranslation.id,
                {
                  data: translatedData,
                  locale: targetLocale,
                }
              );
              strapi.log.info(
                `Translation updated successfully. ID: ${translatedEntry.id}, Locale: ${translatedEntry.locale || targetLocale}`
              );
            } else {
              // Create new translation with entityService
              strapi.log.info(
                "Creating new translation using entityService.create"
              );
              translatedEntry = await strapi.entityService.create(
                contentType as any,
                {
                  data: translatedData,
                  locale: targetLocale,
                }
              );

              strapi.log.info(
                `Translation created successfully. ID: ${translatedEntry.id}, Document ID: ${translatedEntry.documentId || "N/A"}, Locale: ${translatedEntry.locale || targetLocale}`
              );

              // Note: Translation won't be linked to source, but it will be created and can be used
              // User can manually link them in the admin panel if needed
            }
          }
        } else {
          // Fallback: create without documentId (won't be linked)
          strapi.log.info(
            `Creating new translation entry without documentId for locale: ${targetLocale}`
          );
          translatedEntry = await strapi.entityService.create(
            contentType as any,
            {
              data: translatedData,
              locale: targetLocale,
            }
          );
          strapi.log.info(
            `Translation created. ID: ${translatedEntry.id}, Document ID: ${translatedEntry.documentId || "N/A"}, Locale: ${translatedEntry.locale || targetLocale}`
          );
        }

        // Try to publish the translated entry
        if (translatedEntry.documentId) {
          try {
            await strapi.documents(contentType as any).publish({
              documentId: translatedEntry.documentId,
            });
            strapi.log.info(`Translated entry published successfully`);
          } catch (publishError: any) {
            strapi.log.warn(
              "Could not auto-publish translated entry (this is OK, user can publish manually):",
              publishError.message
            );
          }
        } else if (translatedEntry.id) {
          // Fallback: try to publish using entityService
          try {
            const updateData: any = {};
            // Only set publishedAt if the content type supports it
            const contentTypeSchema = strapi.contentTypes[contentType];
            if (
              contentTypeSchema &&
              contentTypeSchema.options?.draftAndPublish
            ) {
              updateData.publishedAt = new Date();
            }

            await strapi.entityService.update(
              contentType as any,
              translatedEntry.id,
              {
                data: updateData,
                locale: targetLocale,
              }
            );
            strapi.log.info(`Translated entry published via entityService`);
          } catch (publishError: any) {
            strapi.log.warn(
              "Could not publish translated entry:",
              publishError.message
            );
          }
        }
      } catch (error: any) {
        strapi.log.error("Error creating translated entry:", error);
        strapi.log.error("Error details:", JSON.stringify(error, null, 2));
        throw error;
      }

      return translatedEntry;
    },

    /**
     * Translate a component
     */
    async translateComponent(
      component: any,
      sourceLocale: string,
      targetLocale: string
    ): Promise<any> {
      const translatedComponent: any = {};

      for (const [key, value] of Object.entries(component)) {
        if (key === "id" || key === "__component") {
          translatedComponent[key] = value;
          continue;
        }

        if (typeof value === "string" && value.trim().length > 0) {
          translatedComponent[key] = await this.translateText(
            value,
            sourceLocale,
            targetLocale
          );
        } else {
          translatedComponent[key] = value;
        }
      }

      return translatedComponent;
    },

    /**
     * Translate FAQ Question answer field (rich text)
     */
    async translateFaqQuestion(
      questionId: number | string,
      sourceLocale: string,
      targetLocale: string
    ): Promise<any> {
      return this.translateContent(
        "api::faq-question.faq-question",
        questionId,
        sourceLocale,
        targetLocale
      );
    },

    /**
     * Translate FAQ Topic
     */
    async translateFaqTopic(
      topicId: number | string,
      sourceLocale: string,
      targetLocale: string
    ): Promise<any> {
      return this.translateContent(
        "api::faq-topic.faq-topic",
        topicId,
        sourceLocale,
        targetLocale
      );
    },

    /**
     * Translate FAQ Section
     */
    async translateFaqSection(
      sectionId: number | string,
      sourceLocale: string,
      targetLocale: string
    ): Promise<any> {
      return this.translateContent(
        "api::faq-section.faq-section",
        sectionId,
        sourceLocale,
        targetLocale
      );
    },
  };
};
