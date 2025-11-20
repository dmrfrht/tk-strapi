/**
 * Import de-DE content to Strapi
 * Maps to existing tr-TR sections and creates de-DE versions
 * 
 * Usage: node scripts/import-de-de-content.js
 */

const deDeContent = {
  "GEPÄCK": [
    {
      "topicName": "Hand Baggage",
      "topicTranslation": "Handgepäck",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "GEPÄCK",
      "tcmID": "tcm:94-22659-16",
      "linkUri": "/de-de/any-questions/hand-baggage-questions/index.html",
      "uniqueId": "Handgepck",
      "seoUrl": "hand-baggage-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Handgepäck | Turkish Airlines ®",
        "keywords": ["baggage faq information", "baggage allowance faq information", "hand baggage faq information", "cabin baggage faq information", "cabin baggage allowance faq information", "hand baggage allowance faq information", "baggage charges faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Handgepäck auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Free Baggage",
      "topicTranslation": "Aufgabegepäck",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "GEPÄCK",
      "tcmID": "tcm:94-22661-16",
      "linkUri": "/de-de/any-questions/free-baggage-questions/index.html",
      "uniqueId": "Aufgabegepck",
      "seoUrl": "free-baggage-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Freigepäck | Turkish Airlines ®",
        "keywords": ["baggage faq information", "baggage allowance faq information", "luggage entitlement faq information", "free baggage faq information", "turkish airlines baggage allowance faq information", "baggage charges faq information", "baggage rules faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Freigepäck auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Excess Baggage",
      "topicTranslation": "Zusatzgepäck/Übergepäck",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "GEPÄCK",
      "tcmID": "tcm:94-22681-16",
      "linkUri": "/de-de/any-questions/excess-baggage-questions/index.html",
      "uniqueId": "Zusatzgepckbergepck",
      "seoUrl": "excess-baggage-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Übergepäck | Turkish Airlines ®",
        "keywords": ["baggage faq information", "baggage allowance faq information", "excess baggage allowance faq information", "excess baggage charges faq information", "baggage rules faq information", "luggage entitlement faq information", "baggage charges faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Übergepäck auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Lost and Delayed Baggage",
      "topicTranslation": "Verspätetes, beschädigtes oder verspätet geliefertes Gepäck",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "GEPÄCK",
      "tcmID": "tcm:94-22715-16",
      "linkUri": "/de-de/any-questions/lost-and-delayed-baggage-questions/index.html",
      "uniqueId": "VersptetesbeschdigtesoderversptetgeliefertesGepck",
      "seoUrl": "lost-and-delayed-baggage-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu verlorenem und verspätetem Gepäck | Turkish Airlines ®",
        "keywords": ["turkish airlines faq information", "lost baggage faq information", "damaged baggage faq information", "lost baggage faq information", "missing baggage faq information", "delayed baggage faq information", "damage to baggage faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Prozess für verspätete und verlorenes Gepäck in Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Restrictions",
      "topicTranslation": "Einschränkungen",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "GEPÄCK",
      "tcmID": "tcm:94-22704-16",
      "linkUri": "/de-de/any-questions/restrictions-questions/index.html",
      "uniqueId": "Einschrnkungen",
      "seoUrl": "restrictions-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Gepäckeinschränkungen | Turkish Airlines ®",
        "keywords": ["restrictions faq information", "baggage restrictions faq information", "banned articles faq information", "prohibited items faq information", "prohibited liquids faq information", "prohibited foods faq information", "prohibited drinks faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Gepäckeinschränkungen auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "US Baggage Rules",
      "topicTranslation": "Gepäckbestimmungen für die USA",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "GEPÄCK",
      "tcmID": "tcm:94-22707-16",
      "linkUri": "/de-de/any-questions/us-baggage-rules-questions/index.html",
      "uniqueId": "GepckbestimmungenfrdieUSA",
      "seoUrl": "us-baggage-rules-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Regeln für Gepäck auf USA-Reisen | Turkish Airlines ®",
        "keywords": ["baggage regulations faq information", "American baggage regulations faq information", "us baggage regulations faq information", "usa baggage regulations faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Gepäck auf USA-Reisen in Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "ZUSATZLEISTUNGEN": [
    {
      "topicName": "Business upgrade",
      "topicTranslation": "Business upgrade",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-267799-16",
      "linkUri": "/de-de/any-questions/business-upgrade-questions/index.html",
      "uniqueId": "Businessupgrade",
      "seoUrl": "business-upgrade-questions",
      "metadata": {
        "title": "Business Upgrade Questions – Rules and Benefits | Turkish Airlines ®",
        "keywords": ["business upgrade", "turkish airlines", "faq", "thy faq information"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn how to upgrade to Business Class and enjoy extra comfort. Experience Turkish Airlines privileges on board.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Car rental",
      "topicTranslation": "Autovermietung",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-257282-16",
      "linkUri": "/de-de/any-questions/car-rental-questions/index.html",
      "uniqueId": "Autovermietung",
      "seoUrl": "car-rental-questions",
      "metadata": {
        "title": "Car Rental Questions – Booking and Conditions | Turkish Airlines ®",
        "keywords": ["car rental", "turkish airlines", "faq", "thy faq information"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Get information about car rental options and booking. Travel seamlessly with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "E-Visa",
      "topicTranslation": "E-Visa",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-257283-16",
      "linkUri": "/de-de/any-questions/e-visa-questions/index.html",
      "uniqueId": "EVisa",
      "seoUrl": "e-visa-questions",
      "metadata": {
        "title": "E-Visa Questions – Application and Travel Rules | Turkish Airlines ®",
        "keywords": ["e-visa", "turkish airlines", "faq", "thy faq information"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Get details on e-visa application and travel rules. Start your journey smoothly with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Extra legroom seat",
      "topicTranslation": "Sitzplatz mit extra Beinfreiheit",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-257280-16",
      "linkUri": "/de-de/any-questions/extra-legroom-seat-questions/index.html",
      "uniqueId": "SitzplatzmitextraBeinfreiheit",
      "seoUrl": "extra-legroom-seat-questions",
      "metadata": {
        "title": "Extra Legroom Seat Questions – Options and Rules | Turkish Airlines ®",
        "keywords": ["extra legroom seat ", "turkish airlines", "faq", "thy faq information"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Explore extra legroom seat options and benefits for your trip. Travel in comfort with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Hotel",
      "topicTranslation": "Hotel",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-257281-16",
      "linkUri": "/de-de/any-questions/hotel-questions/index.html",
      "uniqueId": "Hotel",
      "seoUrl": "hotel-questions",
      "metadata": {
        "title": "Hotel Questions – Booking and Travel Packages | Turkish Airlines ®",
        "keywords": ["hotel", "turkish airlines", "faq", "thy faq information"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about hotel booking options and travel packages. Combine your stay with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Seat Features",
      "topicTranslation": "Sitzfunktionen",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-23861-16",
      "linkUri": "/de-de/any-questions/seat-features-questions/index.html",
      "uniqueId": "Sitzfunktionen",
      "seoUrl": "seat-features-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Sitzplatz-Eigenschaften | Turkish Airlines ®",
        "keywords": ["premium economy seats", "details", "availibility", "discounts", "dimensions", "Compare Seat Options", "seats for business", "seats for economy", "cabin", "business class", "economy class", "luxurious busines flights feature", "luxurious economy flights feature"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Sitzplatz-Eigenschaften auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Seat selection",
      "topicTranslation": "Sitzplatzauswahl",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-376582-16",
      "linkUri": "/de-de/any-questions/seat-selection-questions/index.html",
      "uniqueId": "Sitzplatzauswahl",
      "seoUrl": "seat-selection-questions",
      "metadata": {
        "title": "Seat Selection Questions – Rules and Guidelines | Turkish Airlines ®",
        "keywords": ["Seat selection faq information", "Seat selection", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to seat selection rules and options. Choose your place with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Travel Insurance",
      "topicTranslation": "Reiseversicherung",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-22658-16",
      "linkUri": "/de-de/any-questions/travel-insurance-questions/index.html",
      "uniqueId": "Reiseversicherung",
      "seoUrl": "travel-insurance-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zur Reiseversicherung | Turkish Airlines ®",
        "keywords": ["insurance faq information", "travel insurance faq information", "low cost travel insurance faq information", "turkish airlines low cost travel insurance faq information", "flexible policy faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Reiseversicherung auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Turkish Airlines Gift Card",
      "topicTranslation": "Turkish Airlines Gift Card",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ZUSATZLEISTUNGEN",
      "tcmID": "tcm:94-360698-16",
      "linkUri": "/de-de/any-questions/turkish-airlines-gift-card-question/index.html",
      "uniqueId": "TurkishAirlinesGiftCard",
      "seoUrl": "turkish-airlines-gift-card-question",
      "metadata": {
        "title": "Turkish Airlines Gift Card – Usage and Conditions | Turkish Airlines ®",
        "keywords": ["Turkish Airlines Gift Card"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Discover Turkish Airlines Gift Card usage and rules. Travel supported with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "TURKISH AIRLINES HOLIDAYS": [
    {
      "topicName": "Turkish Airlines Holidays",
      "topicTranslation": "Turkish Airlines Holidays",
      "sectionName": "TURKISH AIRLINES HOLIDAYS",
      "sectionTranslation": "TURKISH AIRLINES HOLIDAYS",
      "tcmID": "tcm:94-377659-16",
      "linkUri": "/de-de/any-questions/turkish-airlines-holidays-questions/index.html",
      "uniqueId": "TurkishAirlinesHolidays",
      "seoUrl": "turkish-airlines-holidays-questions",
      "metadata": {
        "title": "Turkish Airlines Holidays Questions – Packages & Info | Turkish Airlines ®",
        "keywords": ["Turkish Airlines Holidays", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn FAQs about Turkish Airlines Holidays packages. Enjoy exclusive offers with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "TK WALLET": [
    {
      "topicName": "TK Wallet",
      "topicTranslation": "TK Wallet",
      "sectionName": "TK WALLET",
      "sectionTranslation": "TK WALLET",
      "tcmID": "tcm:94-377660-16",
      "linkUri": "/de-de/any-questions/tk-wallet-questions/index.html",
      "uniqueId": "TKWallet",
      "seoUrl": "tk-wallet-questions",
      "metadata": {
        "title": "TK Wallet Questions – Usage and Benefits | Turkish Airlines ®",
        "keywords": ["traveling during TK Wallet faq information", "TK Wallet", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers about TK Wallet usage and benefits. Travel supported with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "FLUGERLEBNIS": [
    {
      "topicName": "As You Wish",
      "topicTranslation": "Nach Belieben",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-366105-16",
      "linkUri": "/de-de/any-questions/as-you-wish-question/index.html",
      "uniqueId": "NachBelieben",
      "seoUrl": "as-you-wish-question",
      "metadata": {
        "title": "AsYouWish | FAQ | Turkish Airlines ®",
        "keywords": ["asyouwish"],
        "robots": [{"robotsvalue": "noindex", "id": null}, {"robotsvalue": "nofollow", "id": null}],
        "description": "Take a look at frequently asked questions to learn more about AsYouWish app. ",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Boarding pass privileges",
      "topicTranslation": "Bordkartenvorteile",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-376611-16",
      "linkUri": "/de-de/any-questions/boarding-pass-privileges-questions/index.html",
      "uniqueId": "Bordkartenvorteile",
      "seoUrl": "boarding-pass-privileges-questions",
      "metadata": {
        "title": "Boarding Pass Privileges – Travel Benefits | Turkish Airlines ®",
        "keywords": ["Boarding pass privileges faq information", "Boarding pass privileges", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Explore boarding pass privileges and benefits designed for you. Travel better with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Dining Onboard",
      "topicTranslation": "Speisen an Bord",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-359758-16",
      "linkUri": "/de-de/any-questions/dining-onboard-questions/index.html",
      "uniqueId": "SpeisenanBord",
      "seoUrl": "dining-onboard-questions",
      "metadata": {
        "title": "Dining Onboard Questions – Meals and Services | Turkish Airlines ®",
        "keywords": ["dining onboard", "any questions", "turkish airlines", "info", "faq"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Explore dining options on board and meal services for your flight. Savor every journey with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Inflight Entertainment",
      "topicTranslation": "Bordunterhaltung",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-23864-16",
      "linkUri": "/de-de/any-questions/inflight-entertainment-questions/index.html",
      "uniqueId": "Bordunterhaltung",
      "seoUrl": "inflight-entertainment-questions",
      "metadata": {
        "title": "Inflight Entertainment Questions – Movies & More | Turkish Airlines ®",
        "keywords": ["inflight entertainment", "miles&smiles", "turkish airlines", "thy"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Explore inflight entertainment options and FAQs. Enjoy movies, music and more with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "In-flight Wifi",
      "topicTranslation": "WLAN während des Fluges",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-376610-16",
      "linkUri": "/de-de/any-questions/in-flight-wifi-questions/index.html",
      "uniqueId": "WLANwhrenddesFluges",
      "seoUrl": "in-flight-wifi-questions",
      "metadata": {
        "title": "In-Flight Wi-Fi Questions – Connectivity Services | Turkish Airlines ®",
        "keywords": ["In-flight Wifi faq information", "In-flight Wifi", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about inflight Wi-Fi services and rules. Stay connected in the sky with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "PressReader",
      "topicTranslation": "PressReader",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-222560-16",
      "linkUri": "/de-de/any-questions/pressreader/index.html",
      "uniqueId": "PressReader",
      "seoUrl": "pressreader",
      "metadata": {
        "title": "What is PressReader | Any Questions | Turkish Airlines ®",
        "keywords": ["pressreader app", "pressreader mobile", "pressreader app", "news magazine app"],
        "robots": [{"robotsvalue": "noindex", "id": null}, {"robotsvalue": "nofollow", "id": null}],
        "description": "Get detailed information about PressReader which enables unlimited access to newspapers and magazines on smartphones and tablets.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Special Meals",
      "topicTranslation": "Sondermahlzeiten",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-22710-16",
      "linkUri": "/de-de/any-questions/special-meals-questions/index.html",
      "uniqueId": "Sondermahlzeiten",
      "seoUrl": "special-meals-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Sondermahlzeiten | Turkish Airlines ®",
        "keywords": ["meals service faq information", "special meals service faq information", "special inflight meals faq information", "food faq information", "drinks faq information", "meals faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Sondermahlzeiten auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Turkish Airlines Lounges",
      "topicTranslation": "Turkish Airlines Lounges",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLUGERLEBNIS",
      "tcmID": "tcm:94-360697-16",
      "linkUri": "/de-de/any-questions/turkish-airlines-lounges-question/index.html",
      "uniqueId": "TurkishAirlinesLounges",
      "seoUrl": "turkish-airlines-lounges-question",
      "metadata": {
        "title": "Turkish Airlines Lounges – Access and Benefits | Turkish Airlines ®",
        "keywords": ["Turkish Airlines Lounges"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Discover Turkish Airlines Lounges access and benefits. Travel in comfort and privilege with Turkish Airlines services.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "CORPORATE CLUB": [
    {
      "topicName": "TCC Advantages",
      "topicTranslation": "Vorteile",
      "sectionName": "7 CORPORATE CLUB",
      "sectionTranslation": "CORPORATE CLUB",
      "tcmID": "tcm:94-135763-16",
      "linkUri": "/de-de/any-questions/corporate-club-faq-advantages/index.html",
      "uniqueId": "Vorteile",
      "seoUrl": "tcc-advantages-questions",
      "metadata": null
    },
    {
      "topicName": "TCC Application",
      "topicTranslation": "Antrag",
      "sectionName": "7 CORPORATE CLUB",
      "sectionTranslation": "CORPORATE CLUB",
      "tcmID": "tcm:94-178047-16",
      "linkUri": "/de-de/any-questions/corporate-club-faq-application/index.html",
      "uniqueId": "Antrag",
      "seoUrl": "tcc-application-questions",
      "metadata": null
    },
    {
      "topicName": "TCC Membership",
      "topicTranslation": "Mitgliedschaft",
      "sectionName": "7 CORPORATE CLUB",
      "sectionTranslation": "CORPORATE CLUB",
      "tcmID": "tcm:94-135526-16",
      "linkUri": "/de-de/any-questions/corporate-club-faq-membership/index.html",
      "uniqueId": "Mitgliedschaft",
      "seoUrl": "tcc-membership-questions",
      "metadata": null
    }
  ],
  "PASSAGIERTYPEN": [
    {
      "topicName": "Disabled passengers",
      "topicTranslation": "Passagier mit einer Behinderung",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-376579-16",
      "linkUri": "/de-de/any-questions/disabled-passengers-questions/index.html",
      "uniqueId": "PassagiermiteinerBehinderung",
      "seoUrl": "disabled-passengers-questions",
      "metadata": {
        "title": "Disabled Passengers – Assistance and Services | Turkish Airlines ®",
        "keywords": ["traveling during Disabled passengers faq information", "Disabled passengers ", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about assistance and services for disabled passengers. Fly comfortably with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Infants and Children",
      "topicTranslation": "Kleinkinder und Kinder",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-22711-16",
      "linkUri": "/de-de/any-questions/infants-and-children-questions/index.html",
      "uniqueId": "KleinkinderundKinder",
      "seoUrl": "infants-and-children-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Kleinkindern und Kindern | Turkish Airlines ®",
        "keywords": ["children faq information", "babies faq information", "child passengers flying faq information", "infant passengers flying faq information", "childcare faq information", "thy faq information", "turkish airlines faq information", "childcare on flights faq information", "child safety on flights faq information", "carrycot"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Kleinkinder und Kinder auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Martyrs relatives and Veterans",
      "topicTranslation": "Ticketverfahren im Todesfall",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-376578-16",
      "linkUri": "/de-de/any-questions/martyrs-relatives-and-veterans-questions/index.html",
      "uniqueId": "TicketverfahrenimTodesfall",
      "seoUrl": "martyrs-relatives-and-veterans-questions",
      "metadata": {
        "title": "Martyrs' Relatives & Veterans Questions – Benefits | Turkish Airlines ®",
        "keywords": ["traveling during Veterans faq information", "Martyrs relatives and Veterans", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about benefits for martyrs' relatives and veterans. Travel with care and Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Pregnant Passengers",
      "topicTranslation": "Schwangere Passagiere",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-22712-16",
      "linkUri": "/de-de/any-questions/traveling-during-pregnancy-questions/index.html",
      "uniqueId": "SchwangerePassagiere",
      "seoUrl": "traveling-while-pregnant-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zum Reisen während der Schwangerschaft | Turkish Airlines ®",
        "keywords": ["pregnant passengers faq information", "flying during pregnancy faq information", "pregnancy and flying faq information", "pregnant passengers needing assistance faq information", "traveling during pregnancy faq information", "flying when pregnant faq information", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Reise und Schwangerschaft auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Special Assistance",
      "topicTranslation": "Besondere Betreuung",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-376580-16",
      "linkUri": "/de-de/any-questions/special-assistance-questions/index.html",
      "uniqueId": "BesondereBetreuung",
      "seoUrl": "special-assistance-questions",
      "metadata": {
        "title": "Special Assistance Questions – Passenger Services | Turkish Airlines ®",
        "keywords": ["traveling during Special Assistance faq information", "Special Assistance", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "See FAQs on special assistance travel services. Enjoy care and comfort with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Students",
      "topicTranslation": "Schüler/Studenten",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-376581-16",
      "linkUri": "/de-de/any-questions/students-questions/index.html",
      "uniqueId": "SchlerStudenten",
      "seoUrl": "students-questions",
      "metadata": {
        "title": "Students Questions – Discounts and Benefits | Turkish Airlines ®",
        "keywords": ["traveling during Students faq information", "Students ", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Discover student travel discounts and benefits. Fly affordably and securely with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Ticket process in the event of a death",
      "topicTranslation": "Ticketverfahren im Todesfall",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-376576-16",
      "linkUri": "/de-de/any-questions/ticket-process-in-the-event-of-a-death-questions/index.html",
      "uniqueId": "TicketverfahrenimTodesfall",
      "seoUrl": "ticket-process-in-the-event-of-a-death-questions",
      "metadata": {
        "title": "Ticket Process in the Event of a Death – Rules | Turkish Airlines ®",
        "keywords": ["Ticket process in the event of a death faq information", "flying during Ticket process in the event of a death faq information", "Ticket process in the event of a death and flying faq information", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Review rules for ticket processes in the event of death. Travel with clarity using Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Transfer Transit Passengers",
      "topicTranslation": "Transfer- und Transitpassagiere",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSAGIERTYPEN",
      "tcmID": "tcm:94-22708-16",
      "linkUri": "/de-de/any-questions/transfer-transit-passengers-questions/index.html",
      "uniqueId": "TransferundTransitpassagiere",
      "seoUrl": "transfer-transit-passengers-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Transit-Passagieren | Turkish Airlines ®",
        "keywords": ["air ticket faq information", "flight tickets faq information", "connecting flights faq information", "transit flights faq information", "connecting passengers faq information", "transit passengers faq information", "transfer passengers faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Transit-Passagiere auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "MILES & SMILES": [
    {
      "topicName": "Award Ticket",
      "topicTranslation": "Prämienticket",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-375901-16",
      "linkUri": "/de-de/any-questions/award-ticket-questions/index.html",
      "uniqueId": "Prmienticket",
      "seoUrl": "award-ticket-questions",
      "metadata": {
        "title": "Award Ticket Questions – Rules and Benefits | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Award Ticket"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn the rules and benefits of award tickets with Miles&Smiles. Enjoy your trip with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Codeshare (Partner) Airlines",
      "topicTranslation": "Codeshare (Partner) Airlines",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-375630-16",
      "linkUri": "/de-de/any-questions/codeshare-partner-airlines-questions/index.html",
      "uniqueId": "CodesharePartnerAirlines",
      "seoUrl": "codeshare-partner-airlines-questions",
      "metadata": {
        "title": "Codeshare Partner Airlines – Travel Questions | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Membership procedures"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Explore travel rules and benefits of codeshare partner airlines. Enjoy smooth connections with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Earning Miles",
      "topicTranslation": "Meilen sammeln",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-376085-16",
      "linkUri": "/de-de/any-questions/earning-miles-questions/index.html",
      "uniqueId": "Meilensammeln",
      "seoUrl": "earning-miles-questions",
      "metadata": {
        "title": "Earning Miles Questions – Miles&Smiles Program | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Earning Miles"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Discover how to earn Miles&Smiles miles and enjoy rewards. Travel with extra benefits through Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Membership procedures",
      "topicTranslation": "Miles&Smiles-Mitgliedschaft",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-376106-16",
      "linkUri": "/de-de/any-questions/membership-procedures-questions/index.html",
      "uniqueId": "MilesSmilesMitgliedschaft",
      "seoUrl": "membership-procedures-questions",
      "metadata": {
        "title": "Membership Procedures Questions – Application Rules | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Membership procedures"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Review membership procedures and application steps. Enjoy Miles&Smiles with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Membership Statuses and Privileges",
      "topicTranslation": "Statuslevel",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-375885-16",
      "linkUri": "/de-de/any-questions/membership-statuses-and-privileges-questions/index.html",
      "uniqueId": "Statuslevel",
      "seoUrl": "membership-statuses-and-privileges-questions",
      "metadata": {
        "title": "Membership Statuses & Privileges Questions | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Membership Statuses and Privileges"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about membership statuses and exclusive privileges. Enhance your journey with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Miles&Smiles Credit Card",
      "topicTranslation": "Miles&Smiles-Kreditkarte",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-375806-16",
      "linkUri": "/de-de/any-questions/miles-and-smiles-credit-card-questions/index.html",
      "uniqueId": "MilesSmilesKreditkarte",
      "seoUrl": "miles-and-smiles-credit-card-questions",
      "metadata": {
        "title": "Miles&Smiles Credit Card Questions – Benefits | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Miles&Smiles Credit Card"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Discover Miles&Smiles credit card benefits and rules. Earn more with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Non-Air Partners",
      "topicTranslation": "Non-Airline-Partner",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-375667-16",
      "linkUri": "/de-de/any-questions/non-air-partners-questions/index.html",
      "uniqueId": "NonAirlinePartner",
      "seoUrl": "non-air-partners-questions",
      "metadata": {
        "title": "Non-Air Partners Questions – Benefits & Services | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Non-Air Partners"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Review benefits of non-air partners with Miles&Smiles. Travel beyond flights with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Program Applications",
      "topicTranslation": "Meilen kaufen, übertragen und umwandeln",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-375854-16",
      "linkUri": "/de-de/any-questions/program-applications-questions/index.html",
      "uniqueId": "Meilenkaufenbertragenundumwandeln",
      "seoUrl": "program-applications-questions",
      "metadata": {
        "title": "Program Applications Questions – Membership Info | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Program Applications"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Discover program application rules and steps. Unlock rewards with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Spending Miles",
      "topicTranslation": "Meilen einlösen",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:94-376027-16",
      "linkUri": "/de-de/any-questions/spending-miles-questions/index.html",
      "uniqueId": "Meileneinlsen",
      "seoUrl": "spending-miles-questions",
      "metadata": {
        "title": "Spending Miles | Turkish Airlines ®",
        "keywords": ["miles and smiles", "thy", "turkish airlines", "Spending Miles"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Spending Miles | Any Questions for Miles&Smiles",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "RESERVIERUNGEN und BUCHUNGEN": [
    {
      "topicName": "Reservations and Bookings",
      "topicTranslation": "Buchungen",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-22656-16",
      "linkUri": "/de-de/any-questions/reservations-and-booking-questions/index.html",
      "uniqueId": "Buchungen",
      "seoUrl": "reservations-and-booking-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Reservierungen und Buchungen | Turkish Airlines ®",
        "keywords": ["flight tickets faq information", "search flight tickets faq information", "better flight tickets faq information", "best flight tickets faq information", "best airlines faq information", "thy faq information", "turkish airlines faq information", "bookings and tickets faq information", "bookings faq information", "tickets"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Reservierungen und Buchungen von Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Check-in",
      "topicTranslation": "Einchecken",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-22660-16",
      "linkUri": "/de-de/any-questions/check-in-questions/index.html",
      "uniqueId": "Einchecken",
      "seoUrl": "check-in-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zum Check-in | Turkish Airlines ®",
        "keywords": ["online check in faq information", "check in online faq information", "check-in faq information", "web check-in faq information", "mobile check-in faq information", "airport check-in faq information", "kiosk faq information", "turk hava yollari faq information", "turkish airlines", "thy faq information"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Check-in-Prozess auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Flight Cancelations and Change",
      "topicTranslation": "Flugstornierungen und -änderungen",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-284203-16",
      "linkUri": "/de-de/any-questions/flight-cancelations-and-change-questions/index.html",
      "uniqueId": "Flugstornierungenundnderungen",
      "seoUrl": "flight-cancelations-and-change-questions",
      "metadata": {
        "title": "Flight Cancellations and Changes – Key Questions | Turkish Airlines ®",
        "keywords": ["Flight Cancelations and Change"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about flight cancellations and change rules. Manage your trip easily with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Flight packages for domestic flights",
      "topicTranslation": "Flugpakete für Inlandsflüge",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-267143-16",
      "linkUri": "/de-de/any-questions/flight-packages-for-domestic-flights-questions/index.html",
      "uniqueId": "FlugpaketefrInlandsflge",
      "seoUrl": "flight-packages-for-domestic-flights-questions",
      "metadata": {
        "title": "Domestic Flight Packages – Questions and Rules | Turkish Airlines ®",
        "keywords": ["turkishairlines.com faq information", "economy class faq information", "extrafly faq information", "primefly faq information", "bonus miles faq information", "discount flight tickets faq information", "ecofly faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Discover domestic flight package options and rules. Travel with more flexibility through Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Flight packages for International flights",
      "topicTranslation": "Flugpakete für internationale Flüge",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-376573-16",
      "linkUri": "/de-de/any-questions/flight-packages-for-international-flights-questions/index.html",
      "uniqueId": "FlugpaketefrinternationaleFlge",
      "seoUrl": "flight-packages-for-international-flights-questions",
      "metadata": {
        "title": "International Flight Packages – Questions and Rules | Turkish Airlines ®",
        "keywords": ["turkishairlines.com faq information", "economy class faq information", "extrafly faq information", "primefly faq information", "bonus miles faq information", "discount flight tickets faq information", "ecofly faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Explore international flight packages and benefits. Plan global trips with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Hold the price",
      "topicTranslation": "Preisgarantie",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-376574-16",
      "linkUri": "/de-de/any-questions/hold-the-price-questions/index.html",
      "uniqueId": "Preisgarantie",
      "seoUrl": "hold-the-price-questions",
      "metadata": {
        "title": "Hold the Price Questions – Secure Your Fare | Turkish Airlines ®",
        "keywords": ["turkish airlines", "Hold the price", "any questions", "info", "faq"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Secure your fare with Hold the Price and plan flexibly. Fly with confidence and Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Mobile",
      "topicTranslation": "Mobile",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-257936-16",
      "linkUri": "/de-de/any-questions/mobile-questions/index.html",
      "uniqueId": "Mobile",
      "seoUrl": "mobile-questions",
      "metadata": {
        "title": "Mobile Questions – App Features and Services | Turkish Airlines ®",
        "keywords": ["mobile", "any questions", "mobile questions", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to mobile app features and services. Manage your travel easily with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Taking Photos and Videos",
      "topicTranslation": "Aufnahmen von Fotos und Videos",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-376575-16",
      "linkUri": "/de-de/any-questions/taking-photos-and-videos-questions/index.html",
      "uniqueId": "AufnahmenvonFotosundVideos",
      "seoUrl": "taking-photos-and-videos-questions",
      "metadata": {
        "title": "Taking Photos and Videos Questions – Travel Rules | Turkish Airlines ®",
        "keywords": ["turkish airlines", "Taking Photos and Videos", "any questions", "info", "faq"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn guidelines for photos and videos on board. Travel comfortably with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Visa and Travel Requirements",
      "topicTranslation": "Visa- und Reisebestimmungen",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVIERUNGEN und BUCHUNGEN",
      "tcmID": "tcm:94-22706-16",
      "linkUri": "/de-de/any-questions/visa-and-travel-requirements-questions/index.html",
      "uniqueId": "VisaundReisebestimmungen",
      "seoUrl": "visa-and-travel-requirements-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Visa und Reiseanforderungen | Turkish Airlines ®",
        "keywords": ["visas faq information", "travel visa faq information", "visa documents faq information", "travel documents faq information", "passport faq information", "passport documents faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Visa und Reiseanforderungen in Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "HAUSTIERE, MUSIKINSTRUMENTE UND SPORTAUSRÜSTUNG": [
    {
      "topicName": "Musical Instruments",
      "topicTranslation": "Musikinstrumente",
      "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
      "sectionTranslation": "HAUSTIERE, MUSIKINSTRUMENTE UND SPORTAUSRÜSTUNG",
      "tcmID": "tcm:94-22703-16",
      "linkUri": "/de-de/any-questions/musical-instruments-questions/index.html",
      "uniqueId": "Musikinstrumente",
      "seoUrl": "musical-instruments-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Musikinstrumenten | Turkish Airlines ®",
        "keywords": ["musical instruments faq information", "music gear faq information", "musical equipment faq information", "musical items faq information", "carrying large baggage faq information", "baggage charges faq information", "thy faq information", "turk hava yollari faq information", "turkishairlines.com faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Musikinstrumente bei Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Sports Equipment",
      "topicTranslation": "Sportausrüstung",
      "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
      "sectionTranslation": "HAUSTIERE, MUSIKINSTRUMENTE UND SPORTAUSRÜSTUNG",
      "tcmID": "tcm:94-22682-16",
      "linkUri": "/de-de/any-questions/sports-equipment-questions/index.html",
      "uniqueId": "Sportausrstung",
      "seoUrl": "sports-equipment-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Sportausrüstung | Turkish Airlines ®",
        "keywords": ["sports equipment faq information", "sports gear faq information", "sporting equipment faq information", "sports items faq information", "carrying large baggage faq information", "baggage charges faq information", "thy faq information", "turk hava yollari faq information", "turkishairlines.com faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Sportausrüstung in Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Traveling With Pets",
      "topicTranslation": "Reisen mit Haustieren",
      "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
      "sectionTranslation": "HAUSTIERE, MUSIKINSTRUMENTE UND SPORTAUSRÜSTUNG",
      "tcmID": "tcm:94-22714-16",
      "linkUri": "/de-de/any-questions/travelling-with-pets-questions/index.html",
      "uniqueId": "ReisenmitHaustieren",
      "seoUrl": "traveling-with-pets-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zum Reisen mit Haustieren | Turkish Airlines ®",
        "keywords": ["pets faq information", "carriage of pets faq information", "flying with pets faq information", "traveling with pets faq information", "taking pets on flights faq information", "thy faq information", "turkish airlines faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Reisen mit Haustieren auf Flügen von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "TARIFBESTIMMUNGEN und ZAHLUNG": [
    {
      "topicName": "Fare Rules",
      "topicTranslation": "Tarifbestimmungen",
      "sectionName": "FARE RULES and PAYMENT",
      "sectionTranslation": "TARIFBESTIMMUNGEN und ZAHLUNG",
      "tcmID": "tcm:94-22705-16",
      "linkUri": "/de-de/any-questions/fare-rules-questions/index.html",
      "uniqueId": "Tarifbestimmungen",
      "seoUrl": "fare-rules-questions",
      "metadata": {
        "title": "Häufig gestellte Fragen zu Tarifbestimmungen | Turkish Airlines ®",
        "keywords": ["turkishairlines.com faq information", "fares faq information", "fare rules faq information", "air ticket prices faq information", "airfares faq information", "discount flight tickets faq information", "discount fares faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "In den häufig gestellten Fragen finden Sie alle Antworten zum Thema Tarifbestimmungen für Flüge von Turkish Airlines.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Payment",
      "topicTranslation": "Zahlung",
      "sectionName": "FARE RULES and PAYMENT",
      "sectionTranslation": "TARIFBESTIMMUNGEN und ZAHLUNG",
      "tcmID": "tcm:94-244144-16",
      "linkUri": "/de-de/any-questions/payment-questions/index.html",
      "uniqueId": "Zahlung",
      "seoUrl": "payment-questions",
      "metadata": {
        "title": "Payment Questions – Booking and Ticketing Rules | Turkish Airlines ®",
        "keywords": ["payment", "any questions", "turkish airlines", "info", "faq"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about payment processes for bookings and tickets. Travel securely with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ]
};

// Section name mapping: de-DE section name -> tr-TR section name
const sectionMapping = {
  "GEPÄCK": "BAGGAGE",
  "ZUSATZLEISTUNGEN": "9 ADDITIONAL SERVICES",
  "TURKISH AIRLINES HOLIDAYS": "TURKISH AIRLINES HOLIDAYS",
  "TK WALLET": "TK WALLET",
  "FLUGERLEBNIS": "FLIGHT EXPERIENCE",
  "CORPORATE CLUB": "7 CORPORATE CLUB",
  "PASSAGIERTYPEN": "PASSENGER TYPES",
  "MILES & SMILES": "5 MILES&SMILES",
  "5 MILES SMILES": "5 MILES&SMILES",
  "RESERVIERUNGEN und BUCHUNGEN": "RESERVATION and BOOKINGS",
  "HAUSTIERE, MUSIKINSTRUMENTE UND SPORTAUSRÜSTUNG": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
  "TARIFBESTIMMUNGEN und ZAHLUNG": "FARE RULES and PAYMENT"
};

async function importDeDeContent(app) {
  const trLocale = 'tr-TR';
  const deLocale = 'de-DE';

  try {
    let totalSuccess = 0;
    let totalSkip = 0;
    let totalError = 0;

    // Process each section
    for (const [deSectionKey, topics] of Object.entries(deDeContent)) {
      console.log(`\n📦 Processing section: ${deSectionKey}`);
      
      // Find the corresponding tr-TR section
      const trSectionName = sectionMapping[deSectionKey] || deSectionKey;
      
      // Find tr-TR section
      const trSections = await app.entityService.findMany('api::faq-section.faq-section', {
        locale: trLocale,
        filters: {
          sectionName: trSectionName,
        },
        limit: 1,
      });

      if (!trSections || trSections.length === 0) {
        console.log(`⚠️  Warning: tr-TR section "${trSectionName}" not found. Skipping...`);
        continue;
      }

      const trSection = trSections[0];
      console.log(`✅ Found tr-TR section: ${trSection.sectionName} (ID: ${trSection.id})`);

      // Find or create de-DE section
      let deSection = await app.entityService.findMany('api::faq-section.faq-section', {
        locale: deLocale,
        filters: {
          sectionName: trSectionName, // Use same sectionName as tr-TR
        },
        limit: 1,
      });

      if (!deSection || deSection.length === 0) {
        console.log(`📝 Creating de-DE section: ${trSectionName}...`);
        deSection = await app.entityService.create('api::faq-section.faq-section', {
          data: {
            sectionName: trSectionName,
            sectionTranslation: topics[0]?.sectionTranslation || deSectionKey,
            order: trSection.order || 0,
          },
          locale: deLocale,
        });
        
        // Re-fetch section to get documentId
        deSection = await app.entityService.findOne('api::faq-section.faq-section', deSection.id, {
          locale: deLocale,
        });
        
        // Publish the section using documentService
        if (deSection && deSection.documentId) {
          await app.documents('api::faq-section.faq-section').publish({
            documentId: deSection.documentId,
            locale: deLocale,
          });
        }
        
        console.log(`✅ Created and published de-DE section with ID: ${deSection.id}`);
      } else {
        deSection = deSection[0];
        console.log(`✅ Found existing de-DE section with ID: ${deSection.id}`);
        
        // Re-fetch section to get documentId
        deSection = await app.entityService.findOne('api::faq-section.faq-section', deSection.id, {
          locale: deLocale,
        });
        
        // Publish section if not published
        if (deSection && !deSection.publishedAt && deSection.documentId) {
          await app.documents('api::faq-section.faq-section').publish({
            documentId: deSection.documentId,
            locale: deLocale,
          });
          console.log(`✅ Published de-DE section: ${deSection.id}`);
        }
      }

      // Import topics
      let sectionSuccess = 0;
      let sectionSkip = 0;
      let sectionError = 0;

      for (const topicData of topics) {
        try {
          // Check if topic already exists by uniqueId in de-DE
          const existingTopic = await app.entityService.findMany('api::faq-topic.faq-topic', {
            locale: deLocale,
            filters: {
              uniqueId: topicData.uniqueId,
            },
            limit: 1,
          });

          if (existingTopic && existingTopic.length > 0) {
            const existing = existingTopic[0];
            // Publish if not published
            if (!existing.publishedAt && existing.documentId) {
              await app.documents('api::faq-topic.faq-topic').publish({
                documentId: existing.documentId,
                locale: deLocale,
              });
              console.log(`✅ Published existing topic: "${topicData.topicTranslation}" (ID: ${existing.id})`);
              sectionSuccess++;
              totalSuccess++;
            } else {
              console.log(`⏭️  Skipping "${topicData.topicTranslation}" - already exists and published`);
              sectionSkip++;
              totalSkip++;
            }
            continue;
          }

          // Create topic in de-DE
          const topic = await app.entityService.create('api::faq-topic.faq-topic', {
            data: {
              topicName: topicData.topicName,
              topicTranslation: topicData.topicTranslation,
              section: deSection.id,
              tcmID: topicData.tcmID,
              linkUri: topicData.linkUri,
              uniqueId: topicData.uniqueId,
              seoUrl: topicData.seoUrl,
              metadata: topicData.metadata,
              order: 0,
            },
            locale: deLocale,
          });

          // Publish the topic using documentService
          if (topic.documentId) {
            await app.documents('api::faq-topic.faq-topic').publish({
              documentId: topic.documentId,
              locale: deLocale,
            });
          }

          console.log(`✅ Created and published: "${topicData.topicTranslation}" (ID: ${topic.id})`);
          sectionSuccess++;
          totalSuccess++;
        } catch (error) {
          console.error(`❌ Error creating "${topicData.topicTranslation}":`, error.message);
          sectionError++;
          totalError++;
        }
      }

      console.log(`📊 Section Summary: ✅ ${sectionSuccess} | ⏭️  ${sectionSkip} | ❌ ${sectionError}`);
    }

    // Final summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL IMPORT SUMMARY:');
    console.log(`   ✅ Success: ${totalSuccess}`);
    console.log(`   ⏭️  Skipped: ${totalSkip}`);
    console.log(`   ❌ Errors: ${totalError}`);
    console.log('='.repeat(50));
  } catch (error) {
    console.error('❌ Fatal error:', error);
    throw error;
  }
}

// Run the import
async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';
    global.strapi = app;

    await importDeDeContent(app);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  } finally {
    if (app) {
      await app.destroy();
    }
    process.exit(0);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

