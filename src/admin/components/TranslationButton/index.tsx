import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Typography,
  Loader,
  Dialog,
  Box,
} from "@strapi/design-system";
// @ts-ignore - These are available at runtime from Strapi admin
import { useNotification, useFetchClient } from "@strapi/strapi/admin";

// Try to import useContentManagerContext from Strapi
let useContentManagerContext: any = null;
try {
  // @ts-ignore - Available at runtime
  const helperPlugin = require("@strapi/helper-plugin");
  useContentManagerContext = helperPlugin.useContentManagerContext;
} catch (e) {
  // Hook not available via require, will try window
}

export const TranslationButton: React.FC = () => {
  // Get Content Manager context dynamically at runtime
  // Strapi v5 uses useContentManagerContext instead of useCMEditViewDataManager
  const getCMData = () => {
    // Method 1: Try using imported hook
    if (useContentManagerContext) {
      try {
        // @ts-ignore
        const data = useContentManagerContext();
        console.log(
          "🔍 TranslationButton: useContentManagerContext (imported) data:",
          data
        );
        return data;
      } catch (e) {
        console.warn("Error calling imported useContentManagerContext:", e);
      }
    }

    // Method 2: Try multiple ways to access the context via window
    // @ts-ignore
    if (typeof window !== "undefined") {
      // Try useContentManagerContext (Strapi v5)
      // @ts-ignore
      const hook1 = (window as any).__STRAPI__?.hooks?.useContentManagerContext;
      if (hook1) {
        try {
          // @ts-ignore
          const data = hook1();
          console.log(
            "🔍 TranslationButton: useContentManagerContext (window) data:",
            data
          );
          return data;
        } catch (e) {
          console.warn("Error calling useContentManagerContext:", e);
        }
      }

      // Try window.strapi
      // @ts-ignore
      const hook2 = (window as any).strapi?.admin?.hooks
        ?.useContentManagerContext;
      if (hook2) {
        try {
          // @ts-ignore
          const data = hook2();
          console.log(
            "🔍 TranslationButton: useContentManagerContext (strapi) data:",
            data
          );
          return data;
        } catch (e) {
          console.warn(
            "Error calling useContentManagerContext from strapi:",
            e
          );
        }
      }

      // Fallback to useCMEditViewDataManager (for compatibility)
      // @ts-ignore
      const hook3 =
        (window as any).__STRAPI__?.hooks?.useCMEditViewDataManager ||
        (window as any).strapi?.admin?.hooks?.useCMEditViewDataManager;
      if (hook3) {
        try {
          // @ts-ignore
          const data = hook3();
          console.log(
            "🔍 TranslationButton: useCMEditViewDataManager data:",
            data
          );
          return data;
        } catch (e) {
          console.warn("Error calling useCMEditViewDataManager:", e);
        }
      }
    }

    // Fallback: return empty data
    console.warn("🔍 TranslationButton: No hook found, using fallback");
    return { initialData: {}, slug: undefined };
  };

  const cmData = getCMData();
  const initialData = cmData?.initialData || cmData?.data || {};

  // Try multiple ways to get slug
  let slug =
    cmData?.slug ||
    cmData?.contentType?.uid ||
    cmData?.layout?.contentType?.uid ||
    (cmData?.layout?.contentType?.apiID
      ? `api::${cmData.layout.contentType.apiID}.${cmData.layout.contentType.apiID}`
      : undefined);

  // Fallback: Try to get slug from URL if hook doesn't work
  if (!slug && typeof window !== "undefined") {
    const pathname = window.location.pathname;
    console.log("🔍 TranslationButton: Trying to get slug from URL:", pathname);
    // URL format: /admin/content-manager/collection-types/api::faq-question.faq-question/1
    const match = pathname.match(/collection-types\/api::([^/]+)\.([^/]+)/);
    if (match) {
      slug = `api::${match[1]}.${match[2]}`;
      console.log("🔍 TranslationButton: Got slug from URL:", slug);
    }
  }

  // Strapi v5: useNotification hook usage
  const notificationHook: any = useNotification();
  // Check if it's a function or an object with toggleNotification method
  const toggleNotification =
    typeof notificationHook === "function"
      ? notificationHook
      : (notificationHook as any)?.toggleNotification ||
        ((options: any) => {
          console.warn("Notification not available:", options);
        });
  const { post, get } = useFetchClient();

  const [isOpen, setIsOpen] = useState(false);
  const [targetLocale, setTargetLocale] = useState<string>("");
  const [availableLocales, setAvailableLocales] = useState<
    Array<{ code: string; name: string }>
  >([]);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationStatus, setTranslationStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Only show for FAQ content types
  const isFaqContentType =
    slug?.includes("faq-question") ||
    slug?.includes("faq-topic") ||
    slug?.includes("faq-section");

  console.log("🔍 TranslationButton: isFaqContentType:", isFaqContentType);
  console.log("🔍 TranslationButton: slug check:", {
    "faq-question": slug?.includes("faq-question"),
    "faq-topic": slug?.includes("faq-topic"),
    "faq-section": slug?.includes("faq-section"),
  });

  useEffect(() => {
    if (isFaqContentType && isOpen) {
      fetchAvailableLocales();
    }
  }, [isOpen, isFaqContentType]);

  const fetchAvailableLocales = async () => {
    try {
      const { data: response } = await get("/i18n/locales");

      // Get current locale dynamically (not hardcoded to tr-TR)
      const currentLocale = getSourceLocale();
      console.log(
        "🔍 TranslationButton: Current source locale:",
        currentLocale
      );

      const locales = response
        .filter((locale: any) => locale.code !== currentLocale)
        .map((locale: any) => ({
          code: locale.code,
          name: locale.name || locale.code,
        }));

      console.log("🔍 TranslationButton: Available target locales:", locales);
      setAvailableLocales(locales);
      if (locales.length > 0 && !targetLocale) {
        setTargetLocale(locales[0].code);
      }
    } catch (error) {
      console.error("Error fetching locales:", error);
      toggleNotification({
        type: "warning",
        message: "Could not fetch available locales",
      });
    }
  };

  const getTranslationEndpoint = () => {
    if (slug?.includes("faq-question")) {
      return "/api/v1/cms/translation/faq-question";
    } else if (slug?.includes("faq-topic")) {
      return "/api/v1/cms/translation/faq-topic";
    } else if (slug?.includes("faq-section")) {
      return "/api/v1/cms/translation/faq-section";
    }
    return null;
  };

  const getEntityId = () => {
    // Try multiple ways to get entity ID
    let entityId =
      initialData?.id || initialData?.documentId || initialData?.document?.id;

    // Fallback: Try to get ID from URL if not found in data
    if (!entityId && typeof window !== "undefined") {
      const pathname = window.location.pathname;
      // URL format: /admin/content-manager/collection-types/api::faq-question.faq-question/a1uwxciynapbghcujqsnn5yt
      const urlParts = pathname.split("/");
      const lastPart = urlParts[urlParts.length - 1];
      // Check if last part looks like an ID (not a query param)
      if (lastPart && !lastPart.includes("?")) {
        entityId = lastPart;
        console.log("🔍 TranslationButton: Got entityId from URL:", entityId);
      }
    }

    console.log("🔍 TranslationButton: Final entityId:", entityId);
    return entityId;
  };

  const getSourceLocale = (): string => {
    // Try multiple sources for current locale (in order of reliability)

    // 1. From initialData (most reliable - comes from Strapi's Content Manager)
    if (initialData?.locale) {
      console.log(
        "🔍 TranslationButton: Source locale from initialData:",
        initialData.locale
      );
      return initialData.locale;
    }

    // 2. From URL query parameters (Strapi admin panel uses this format)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      // Strapi uses: ?plugins[i18n][locale]=en-US
      const localeFromUrl =
        urlParams.get("plugins[i18n][locale]") || urlParams.get("locale");
      if (localeFromUrl) {
        console.log(
          "🔍 TranslationButton: Source locale from URL params:",
          localeFromUrl
        );
        return localeFromUrl;
      }
    }

    // 3. Try to get from cmData if available
    const cmData = getCMData();
    if (cmData?.initialData?.locale) {
      console.log(
        "🔍 TranslationButton: Source locale from cmData:",
        cmData.initialData.locale
      );
      return cmData.initialData.locale;
    }

    // 4. Try to get from Strapi's global state if available
    if (typeof window !== "undefined" && (window as any).__STRAPI__) {
      const strapiData = (window as any).__STRAPI__;
      if (strapiData?.locale) {
        console.log(
          "🔍 TranslationButton: Source locale from __STRAPI__:",
          strapiData.locale
        );
        return strapiData.locale;
      }
    }

    // 5. Final fallback (should rarely happen - only if locale cannot be determined)
    console.warn(
      "🔍 TranslationButton: Could not determine source locale, using tr-TR as fallback"
    );
    return "tr-TR";
  };

  const handleTranslate = async () => {
    if (!targetLocale) {
      toggleNotification({
        type: "warning",
        message: "Please select a target language",
      });
      return;
    }

    const endpoint = getTranslationEndpoint();
    const entityId = getEntityId();
    const sourceLocale = getSourceLocale();

    if (!endpoint || !entityId) {
      toggleNotification({
        type: "error",
        message: "Invalid content type or missing ID",
      });
      return;
    }

    setIsTranslating(true);
    setTranslationStatus("idle");

    try {
      // Log the request for debugging
      console.log("🔍 TranslationButton: Sending request:", {
        endpoint,
        entityId,
        sourceLocale,
        targetLocale,
        slug,
      });

      const requestBody: any = {
        sourceLocale,
        targetLocale,
      };

      // Add the appropriate ID field based on content type
      if (slug?.includes("faq-question")) {
        requestBody.questionId = entityId;
      } else if (slug?.includes("faq-topic")) {
        requestBody.topicId = entityId;
      } else if (slug?.includes("faq-section")) {
        requestBody.sectionId = entityId;
      }

      const { data: response } = await post(endpoint, requestBody);

      if (response.success || response.data) {
        setTranslationStatus("success");
        toggleNotification({
          type: "success",
          message: `Content translated to ${targetLocale} successfully! Don't forget to publish it.`,
        });

        // Close modal after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          // Reload page to see the translation
          window.location.reload();
        }, 2000);
      } else {
        throw new Error(response.error || "Translation failed");
      }
    } catch (error: any) {
      console.error("Translation error:", error);
      setTranslationStatus("error");
      toggleNotification({
        type: "error",
        message:
          error.response?.data?.error ||
          error.message ||
          "Translation failed. Please check server logs for details.",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  if (!isFaqContentType) {
    console.log("🔍 TranslationButton: Not FAQ content type, hiding button");
    return null;
  }

  console.log("🔍 TranslationButton: Rendering button");

  return (
    <>
      <Box width="100%">
        <Button
          variant="secondary"
          onClick={() => setIsOpen(true)}
          size="S"
          style={{ width: "100%" }}
        >
          🌐 Translate
        </Button>
      </Box>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Content>
          <Dialog.Header>
            <Typography fontWeight="bold" textColor="neutral800" variant="beta">
              Translate Content
            </Typography>
          </Dialog.Header>
          <Dialog.Body>
            <Flex direction="column" gap={4}>
              <Typography>
                Translate this content from <strong>{getSourceLocale()}</strong>{" "}
                to another language using AI.
              </Typography>

              <label>
                <Typography fontWeight="semiBold" marginBottom={2}>
                  Target Language:
                </Typography>
                <select
                  value={targetLocale}
                  onChange={(e) => setTargetLocale(e.target.value)}
                  disabled={isTranslating || availableLocales.length === 0}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #dcdce4",
                    fontSize: "14px",
                  }}
                >
                  {availableLocales.map((locale) => (
                    <option key={locale.code} value={locale.code}>
                      {locale.name} ({locale.code})
                    </option>
                  ))}
                </select>
              </label>

              {translationStatus === "success" && (
                <Flex
                  gap={2}
                  alignItems="center"
                  padding={3}
                  style={{ background: "#d4edda", borderRadius: "4px" }}
                >
                  <Typography textColor="success700">
                    ✅ Translation completed successfully!
                  </Typography>
                </Flex>
              )}

              {translationStatus === "error" && (
                <Flex
                  gap={2}
                  alignItems="center"
                  padding={3}
                  style={{ background: "#f8d7da", borderRadius: "4px" }}
                >
                  <Typography textColor="danger700">
                    ❌ Translation failed. Please check server logs for details.
                    try again.
                  </Typography>
                </Flex>
              )}

              {availableLocales.length === 0 && !isTranslating && (
                <Typography textColor="neutral600">
                  No other locales available for translation.
                </Typography>
              )}

              <Flex gap={2} justifyContent="flex-end" marginTop={4}>
                <Button variant="tertiary" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleTranslate}
                  disabled={
                    !targetLocale ||
                    isTranslating ||
                    availableLocales.length === 0
                  }
                  startIcon={isTranslating ? <Loader small /> : undefined}
                >
                  {isTranslating ? "Translating..." : "Translate"}
                </Button>
              </Flex>
            </Flex>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
