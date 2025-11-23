/**
 * Master script to import all FAQ data
 * 
 * This script imports:
 * 1. en-US sections and topics
 * 2. de-DE sections and topics
 * 3. All FAQ questions for tr-TR (all topics)
 * 
 * Usage: node scripts/import-all-faq-data.js
 */

const { createStrapi, compileStrapi } = require('@strapi/strapi');

// ============================================================================
// EN-US CONTENT DATA
// ============================================================================

const enUsContent = {
  "BAGGAGE": [
    {
      "topicName": "Cabin baggage",
      "topicTranslation": "Cabin baggage",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "BAGGAGE",
      "tcmID": "tcm:40-22659-16",
      "linkUri": "/en-us/any-questions/cabin-baggage-questions/index.html",
      "uniqueId": "Cabinbaggage",
      "seoUrl": "hand-baggage-questions",
      "metadata": {
        "title": "Cabin Baggage Questions – Rules and Allowances | Turkish Airlines ®",
        "keywords": ["baggage faq information", "baggage allowance faq information", "hand baggage faq information", "cabin baggage faq information", "cabin baggage allowance faq information", "hand baggage allowance faq information", "baggage charges faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to cabin baggage rules and allowances. Fly prepared with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Free baggage",
      "topicTranslation": "Checked baggage",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "BAGGAGE",
      "tcmID": "tcm:40-22661-16",
      "linkUri": "/en-us/any-questions/checked-baggage-questions/index.html",
      "uniqueId": "Checkedbaggage",
      "seoUrl": "free-baggage-questions",
      "metadata": {
        "title": "FAQs for Checked Baggage | Turkish Airlines ®",
        "keywords": ["baggage faq information", "baggage allowance faq information", "luggage entitlement faq information", "free baggage faq information", "turkish airlines baggage allowance faq information", "baggage charges faq information", "baggage rules faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Get all answers from our FAQ's section that you'd like to learn about free baggage process via Turkish Airlines flights.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Excess baggage",
      "topicTranslation": "Extra baggage/Overweight baggage",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "BAGGAGE",
      "tcmID": "tcm:40-22681-16",
      "linkUri": "/en-us/any-questions/excess-baggage-questions/index.html",
      "uniqueId": "ExtrabaggageOverweightbaggage",
      "seoUrl": "excess-baggage-questions",
      "metadata": {
        "title": "Excess Baggage Questions – Fees and Rules | Turkish Airlines ®",
        "keywords": ["baggage faq information", "baggage allowance faq information", "extra baggage allowance faq information", "extra baggage charges faq information", "baggage rules faq information", "luggage entitlement faq information", "baggage charges faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to excess and overweight baggage questions. Fly prepared with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Lost and delayed baggage",
      "topicTranslation": "Delayed, damaged, or late baggage",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "BAGGAGE",
      "tcmID": "tcm:40-22715-16",
      "linkUri": "/en-us/any-questions/lost-and-delayed-baggage-questions/index.html",
      "uniqueId": "Delayeddamagedorlatebaggage",
      "seoUrl": "lost-and-delayed-baggage-questions",
      "metadata": {
        "title": "Lost and Delayed Baggage Questions – Support | Turkish Airlines ®",
        "keywords": ["turkish airlines faq information", "lost baggage faq information", "damaged baggage faq information", "lost baggage faq information", "missing baggage faq information", "delayed baggage faq information", "damage to baggage faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers on lost and delayed baggage services. Travel confidently with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Restrictions",
      "topicTranslation": "Restrictions",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "BAGGAGE",
      "tcmID": "tcm:40-22704-16",
      "linkUri": "/en-us/any-questions/restrictions-questions/index.html",
      "uniqueId": "Restrictions",
      "seoUrl": "restrictions-questions",
      "metadata": {
        "title": "Restrictions Questions – Travel and Safety Rules | Turkish Airlines ®",
        "keywords": ["restrictions faq information", "baggage restrictions faq information", "banned articles faq information", "prohibited items faq information", "prohibited liquids faq information", "prohibited foods faq information", "prohibited drinks faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Get answers to questions about baggage restrictions. Travel prepared with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "US baggage rules",
      "topicTranslation": "US baggage rules",
      "sectionName": "BAGGAGE",
      "sectionTranslation": "BAGGAGE",
      "tcmID": "tcm:40-22707-16",
      "linkUri": "/en-us/any-questions/us-baggage-rules-questions/index.html",
      "uniqueId": "USbaggagerules",
      "seoUrl": "us-baggage-rules-questions",
      "metadata": {
        "title": "FAQs for US Baggage Rules | Turkish Airlines ®",
        "keywords": ["baggage regulations faq information", "American baggage regulations faq information", "us baggage regulations faq information", "usa baggage regulations faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn FAQs on US baggage rules, policies and limits. Travel with clarity using Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "MILES & SMILES": [
    {
      "topicName": "Award Ticket",
      "topicTranslation": "Award Ticket",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-375901-16",
      "linkUri": "/en-us/any-questions/award-ticket-questions/index.html",
      "uniqueId": "AwardTicket",
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
      "tcmID": "tcm:40-375630-16",
      "linkUri": "/en-us/any-questions/codeshare-partner-airlines-questions/index.html",
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
      "topicTranslation": "Earning Miles",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-376085-16",
      "linkUri": "/en-us/any-questions/earning-miles-questions/index.html",
      "uniqueId": "EarningMiles",
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
      "topicTranslation": "Membership actions",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-376106-16",
      "linkUri": "/en-us/any-questions/membership-procedures-questions/index.html",
      "uniqueId": "Membershipactions",
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
      "topicTranslation": "Membership statuses and privileges",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-375885-16",
      "linkUri": "/en-us/any-questions/membership-statuses-and-privileges-questions/index.html",
      "uniqueId": "Membershipstatusesandprivileges",
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
      "topicTranslation": "Miles&Smiles Credit Card",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-375806-16",
      "linkUri": "/en-us/any-questions/miles-and-smiles-credit-card-questions/index.html",
      "uniqueId": "MilesSmilesCreditCard",
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
      "topicTranslation": "Non-Air Partners",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-375667-16",
      "linkUri": "/en-us/any-questions/non-air-partners-questions/index.html",
      "uniqueId": "NonAirPartners",
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
      "topicTranslation": "Program features",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-375854-16",
      "linkUri": "/en-us/any-questions/program-applications-questions/index.html",
      "uniqueId": "Programfeatures",
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
      "topicTranslation": "Spending Miles",
      "sectionName": "5 MILES SMILES",
      "sectionTranslation": "MILES & SMILES",
      "tcmID": "tcm:40-376027-16",
      "linkUri": "/en-us/any-questions/spending-miles-questions/index.html",
      "uniqueId": "SpendingMiles",
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
  "RESERVATION AND BOOKINGS": [
    {
      "topicName": "Reservations and bookings",
      "topicTranslation": "Bookings",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-22656-16",
      "linkUri": "/en-us/any-questions/reservations-and-booking-questions/index.html",
      "uniqueId": "Bookings",
      "seoUrl": "reservations-and-booking-questions",
      "metadata": {
        "title": "Reservations and Booking Questions – Rules & Support | Turkish Airlines ®",
        "keywords": ["flight tickets faq information", "search flight tickets faq information", "better flight tickets faq information", "best flight tickets faq information", "best airlines faq information", "thy faq information", "turkish airlines faq information", "bookings and tickets faq information", "bookings faq information", "tickets"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to reservations and booking questions. Plan smoothly with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Check-in",
      "topicTranslation": "Check-in",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-22660-16",
      "linkUri": "/en-us/any-questions/check-in-questions/index.html",
      "uniqueId": "Checkin",
      "seoUrl": "check-in-questions",
      "metadata": {
        "title": "Check-in Questions – Procedures and Options | Turkish Airlines ®",
        "keywords": ["online check in faq information", "check in online faq information", "check-in faq information", "web check-in faq information", "mobile check-in faq information", "airport check-in faq information", "kiosk faq information", "turk hava yollari faq information", "turkish airlines", "thy faq information"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to common check-in questions and procedures. Travel easier with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Flight Cancelations and Change",
      "topicTranslation": "Flight Cancelations and Change",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-284203-16",
      "linkUri": "/en-us/any-questions/flight-cancelations-and-change-questions/index.html",
      "uniqueId": "FlightCancelationsandChange",
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
      "topicTranslation": "Flight packages for domestic flights",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-267143-16",
      "linkUri": "/en-us/any-questions/flight-packages-for-domestic-flights-questions/index.html",
      "uniqueId": "Flightpackagesfordomesticflights",
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
      "topicTranslation": "Flight packages for International flights",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-376573-16",
      "linkUri": "/en-us/any-questions/flight-packages-for-international-flights-questions/index.html",
      "uniqueId": "FlightpackagesforInternationalflights",
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
      "topicTranslation": "Hold the price",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-376574-16",
      "linkUri": "/en-us/any-questions/hold-the-price-questions/index.html",
      "uniqueId": "Holdtheprice",
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
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-257936-16",
      "linkUri": "/en-us/any-questions/mobile-questions/index.html",
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
      "topicTranslation": "Taking Photos and Videos",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-376575-16",
      "linkUri": "/en-us/any-questions/taking-photos-and-videos-questions/index.html",
      "uniqueId": "TakingPhotosandVideos",
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
      "topicName": "Visa and travel requirements",
      "topicTranslation": "Visa and travel requirements",
      "sectionName": "RESERVATION and BOOKINGS",
      "sectionTranslation": "RESERVATION AND BOOKINGS",
      "tcmID": "tcm:40-22706-16",
      "linkUri": "/en-us/any-questions/visa-and-travel-requirements-questions/index.html",
      "uniqueId": "Visaandtravelrequirements",
      "seoUrl": "visa-and-travel-requirements-questions",
      "metadata": {
        "title": "Visa and Travel Requirements Questions – Guidelines | Turkish Airlines ®",
        "keywords": ["visas faq information", "travel visa faq information", "visa documents faq information", "travel documents faq information", "passport faq information", "passport documents faq information", "turkish airlines", "visa and travel requirement", "any questions", "info", "faq"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Review FAQs on visa and travel requirements. Travel smoothly and confidently with Turkish Airlines privileges.",
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
      "tcmID": "tcm:40-377659-16",
      "linkUri": "/en-us/any-questions/turkish-airlines-holidays-questions/index.html",
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
      "tcmID": "tcm:40-377660-16",
      "linkUri": "/en-us/any-questions/tk-wallet-questions/index.html",
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
  "FLIGHT EXPERIENCE": [
    {
      "topicName": "As You Wish",
      "topicTranslation": "As You Wish",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-366105-16",
      "linkUri": "/en-us/any-questions/as-you-wish-question/index.html",
      "uniqueId": "AsYouWish",
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
      "topicTranslation": "Boarding pass privileges",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-376611-16",
      "linkUri": "/en-us/any-questions/boarding-pass-privileges-questions/index.html",
      "uniqueId": "Boardingpassprivileges",
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
      "topicTranslation": "Dining Onboard",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-359758-16",
      "linkUri": "/en-us/any-questions/dining-onboard-questions/index.html",
      "uniqueId": "DiningOnboard",
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
      "topicName": "Inflight entertainment",
      "topicTranslation": "Inflight entertainment",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-23864-16",
      "linkUri": "/en-us/any-questions/inflight-entertainment-questions/index.html",
      "uniqueId": "Inflightentertainment",
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
      "topicTranslation": "In-flight Wifi",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-376610-16",
      "linkUri": "/en-us/any-questions/in-flight-wifi-questions/index.html",
      "uniqueId": "InflightWifi",
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
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-222560-16",
      "linkUri": "/en-us/any-questions/pressreader/index.html",
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
      "topicName": "Special meals",
      "topicTranslation": "Special meals",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-22710-16",
      "linkUri": "/en-us/any-questions/special-meals-questions/index.html",
      "uniqueId": "Specialmeals",
      "seoUrl": "special-meals-questions",
      "metadata": {
        "title": "Special Meals Questions – Options and Requests | Turkish Airlines ®",
        "keywords": ["meals service faq information", "special meals service faq information", "special inflight meals faq information", "food faq information", "drinks faq information", "meals faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Get answers to special meal service questions. Travel with care through Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Turkish Airlines Lounges",
      "topicTranslation": "Turkish Airlines Lounges",
      "sectionName": "FLIGHT EXPERIENCE",
      "sectionTranslation": "FLIGHT EXPERIENCE",
      "tcmID": "tcm:40-360697-16",
      "linkUri": "/en-us/any-questions/turkish-airlines-lounges-question/index.html",
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
      "topicTranslation": "Advantages",
      "sectionName": "7 CORPORATE CLUB",
      "sectionTranslation": "CORPORATE CLUB",
      "tcmID": "tcm:40-135763-16",
      "linkUri": "/en-us/any-questions/corporate-club-faq-advantages/index.html",
      "uniqueId": "Advantages",
      "seoUrl": "tcc-advantages-questions",
      "metadata": null
    },
    {
      "topicName": "TCC Application",
      "topicTranslation": "Application",
      "sectionName": "7 CORPORATE CLUB",
      "sectionTranslation": "CORPORATE CLUB",
      "tcmID": "tcm:40-178047-16",
      "linkUri": "/en-us/any-questions/corporate-club-faq-application/index.html",
      "uniqueId": "Application",
      "seoUrl": "tcc-application-questions",
      "metadata": null
    },
    {
      "topicName": "TCC Membership",
      "topicTranslation": "Membership",
      "sectionName": "7 CORPORATE CLUB",
      "sectionTranslation": "CORPORATE CLUB",
      "tcmID": "tcm:40-135526-16",
      "linkUri": "/en-us/any-questions/corporate-club-faq-membership/index.html",
      "uniqueId": "Membership",
      "seoUrl": "tcc-membership-questions",
      "metadata": null
    }
  ],
  "FARE RULES AND PAYMENT": [
    {
      "topicName": "Fare rules",
      "topicTranslation": "Fare rules",
      "sectionName": "FARE RULES and PAYMENT",
      "sectionTranslation": "FARE RULES AND PAYMENT",
      "tcmID": "tcm:40-22705-16",
      "linkUri": "/en-us/any-questions/fare-rules-questions/index.html",
      "uniqueId": "Farerules",
      "seoUrl": "fare-rules-questions",
      "metadata": {
        "title": "Fare Rules Questions – Ticket Terms Explained | Turkish Airlines ®",
        "keywords": ["turkishairlines.com faq information", "fares faq information", "fare rules faq information", "air ticket prices faq information", "airfares faq information", "discount flight tickets faq information", "discount fares faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Review frequently asked questions about fare rules and refunds. Enjoy clarity with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Payment",
      "topicTranslation": "Payment",
      "sectionName": "FARE RULES and PAYMENT",
      "sectionTranslation": "FARE RULES AND PAYMENT",
      "tcmID": "tcm:40-244144-16",
      "linkUri": "/en-us/any-questions/payment-questions/index.html",
      "uniqueId": "Payment",
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
  ],
  "ADDITIONAL SERVICES": [
    {
      "topicName": "Business upgrade",
      "topicTranslation": "Business upgrade",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-267799-16",
      "linkUri": "/en-us/any-questions/business-upgrade-questions/index.html",
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
      "topicTranslation": "Car rental",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-257282-16",
      "linkUri": "/en-us/any-questions/car-rental-questions/index.html",
      "uniqueId": "Carrental",
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
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-257283-16",
      "linkUri": "/en-us/any-questions/e-visa-questions/index.html",
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
      "topicTranslation": "Extra legroom seat",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-257280-16",
      "linkUri": "/en-us/any-questions/extra-legroom-seat-questions/index.html",
      "uniqueId": "Extralegroomseat",
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
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-257281-16",
      "linkUri": "/en-us/any-questions/hotel-questions/index.html",
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
      "topicName": "Seat features",
      "topicTranslation": "Seat features",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-23861-16",
      "linkUri": "/en-us/any-questions/seat-features-questions/index.html",
      "uniqueId": "Seatfeatures",
      "seoUrl": "seat-features-questions",
      "metadata": {
        "title": "Seat Features Questions – Comfort and Options | Turkish Airlines ®",
        "keywords": ["premium economy seats", "details", "availibility", "discounts", "dimensions", "Compare Seat Options", "seats for business", "seats for economy", "cabin", "business class", "economy class", "luxurious busines flights feature", "luxurious economy flights feature"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn about seat features for your comfort. Choose smart with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Seat selection",
      "topicTranslation": "Seat selection",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-376582-16",
      "linkUri": "/en-us/any-questions/seat-selection-questions/index.html",
      "uniqueId": "Seatselection",
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
      "topicName": "Travel insurance",
      "topicTranslation": "Travel insurance",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-22658-16",
      "linkUri": "/en-us/any-questions/travel-insurance-questions/index.html",
      "uniqueId": "Travelinsurance",
      "seoUrl": "travel-insurance-questions",
      "metadata": {
        "title": "Travel Insurance Questions – Coverage and Benefits | Turkish Airlines ®",
        "keywords": ["insurance faq information", "travel insurance faq information", "low cost travel insurance faq information", "turkish airlines low cost travel insurance faq information", "flexible policy faq information", "turkish airlines faq information", "thy faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Learn FAQs about travel insurance coverage and benefits. Fly confidently with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Turkish Airlines Gift Card",
      "topicTranslation": "Turkish Airlines Gift Card",
      "sectionName": "9 ADDITIONAL SERVICES",
      "sectionTranslation": "ADDITIONAL SERVICES",
      "tcmID": "tcm:40-360698-16",
      "linkUri": "/en-us/any-questions/turkish-airlines-gift-card-question/index.html",
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
  "PASSENGER TYPES": [
    {
      "topicName": "Disabled passengers",
      "topicTranslation": "Disabled passengers",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-376579-16",
      "linkUri": "/en-us/any-questions/disabled-passengers-questions/index.html",
      "uniqueId": "Disabledpassengers",
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
      "topicName": "Infants and children",
      "topicTranslation": "Infants and children",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-22711-16",
      "linkUri": "/en-us/any-questions/infants-and-children-questions/index.html",
      "uniqueId": "Infantsandchildren",
      "seoUrl": "infants-and-children-questions",
      "metadata": {
        "title": "Infants and Children Questions – Travel Guidelines | Turkish Airlines ®",
        "keywords": ["children faq information", "babies faq information", "child passengers flying faq information", "infant passengers flying faq information", "childcare faq information", "thy faq information", "turkish airlines faq information", "childcare on flights faq information", "child safety on flights faq information", "carrycot"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "See FAQs for infant and child passengers. Travel prepared with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Martyrs relatives and Veterans",
      "topicTranslation": "Martyrs relatives and Veterans",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-376578-16",
      "linkUri": "/en-us/any-questions/martyrs-relatives-and-veterans-questions/index.html",
      "uniqueId": "MartyrsrelativesandVeterans",
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
      "topicTranslation": "Pregnant Passengers",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-22712-16",
      "linkUri": "/en-us/any-questions/traveling-while-pregnant-questions/index.html",
      "uniqueId": "PregnantPassengers",
      "seoUrl": "traveling-while-pregnant-questions",
      "metadata": {
        "title": "Traveling While Pregnant Questions – Rules | Turkish Airlines ®",
        "keywords": ["pregnant passengers faq information", "flying during pregnancy faq information", "pregnancy and flying faq information", "pregnant passengers needing assistance faq information", "traveling during pregnancy faq information", "flying when pregnant faq information", "thy faq information", "turkish airlines faq information", "turkishairlines.com"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Review rules and FAQs for traveling while pregnant. Fly safely and comfortably with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Special Assistance",
      "topicTranslation": "Special Assistance",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-376580-16",
      "linkUri": "/en-us/any-questions/special-assistance-questions/index.html",
      "uniqueId": "SpecialAssistance",
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
      "topicTranslation": "Students",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-376581-16",
      "linkUri": "/en-us/any-questions/students-questions/index.html",
      "uniqueId": "Students",
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
      "topicTranslation": "Ticket process in the event of a death",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-376576-16",
      "linkUri": "/en-us/any-questions/ticket-process-in-the-event-of-a-death-questions/index.html",
      "uniqueId": "Ticketprocessintheeventofadeath",
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
      "topicName": "Transfer transit passengers",
      "topicTranslation": "Transfer transit passengers",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "PASSENGER TYPES",
      "tcmID": "tcm:40-22708-16",
      "linkUri": "/en-us/any-questions/transfer-transit-passengers-questions/index.html",
      "uniqueId": "Transfertransitpassengers",
      "seoUrl": "transfer-transit-passengers-questions",
      "metadata": {
        "title": "Transfer & Transit Passenger Questions – Guidelines | Turkish Airlines ®",
        "keywords": ["air ticket faq information", "flight tickets faq information", "connecting flights faq information", "transit flights faq information", "connecting passengers faq information", "transit passengers faq information", "transfer passengers faq information", "thy faq information", "turk hava yollari faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to FAQs on transfer and transit travel. Enjoy smooth connections with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ],
  "PETS, MUSIC INSTRUMENTS AND SPORTS EQUIPMENTS": [
    {
      "topicName": "Musical instruments",
      "topicTranslation": "Musical instruments",
      "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
      "sectionTranslation": "PETS, MUSIC INSTRUMENTS AND SPORTS EQUIPMENTS",
      "tcmID": "tcm:40-22703-16",
      "linkUri": "/en-us/any-questions/musical-instruments-questions/index.html",
      "uniqueId": "Musicalinstruments",
      "seoUrl": "musical-instruments-questions",
      "metadata": {
        "title": "Musical Instruments Questions – Travel Rules | Turkish Airlines ®",
        "keywords": ["musical instruments faq information", "music gear faq information", "musical equipment faq information", "musical items faq information", "carrying large baggage faq information", "baggage charges faq information", "thy faq information", "turk hava yollari faq information", "turkishairlines.com faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Explore FAQs about transporting musical instruments. Fly prepared with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Sports equipment",
      "topicTranslation": "Sports equipment",
      "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
      "sectionTranslation": "PETS, MUSIC INSTRUMENTS AND SPORTS EQUIPMENTS",
      "tcmID": "tcm:40-22682-16",
      "linkUri": "/en-us/any-questions/sports-equipment-questions/index.html",
      "uniqueId": "Sportsequipment",
      "seoUrl": "sports-equipment-questions",
      "metadata": {
        "title": "Sports Equipment Questions – Rules and Fees | Turkish Airlines ®",
        "keywords": ["sports equipment faq information", "sports gear faq information", "sporting equipment faq information", "sports items faq information", "carrying large baggage faq information", "baggage charges faq information", "thy faq information", "turk hava yollari faq information", "turkishairlines.com faq information", "turkish airlines"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to FAQs on sports equipment rules and fees. Travel with ease through Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    },
    {
      "topicName": "Traveling with pets",
      "topicTranslation": "Traveling with pets",
      "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
      "sectionTranslation": "PETS, MUSIC INSTRUMENTS AND SPORTS EQUIPMENTS",
      "tcmID": "tcm:40-22714-16",
      "linkUri": "/en-us/any-questions/traveling-with-pets-questions/index.html",
      "uniqueId": "Travelingwithpets",
      "seoUrl": "traveling-with-pets-questions",
      "metadata": {
        "title": "Traveling with Pets Questions – Guidelines | Turkish Airlines ®",
        "keywords": ["pets faq information", "carriage of pets faq information", "flying with pets faq information", "traveling with pets faq information", "taking pets on flights faq information", "thy faq information", "turkish airlines faq information", "turk hava yollari"],
        "robots": [{"robotsvalue": "index", "id": null}, {"robotsvalue": "follow", "id": null}],
        "description": "Find answers to FAQs about traveling with pets. Travel worry-free with Turkish Airlines privileges.",
        "parameters": [{"key": "p:domain_verify", "value": "0521feda9bcfa9c254762a3ddd69e41f", "id": null}],
        "pubId": null
      }
    }
  ]
};

const enUsSectionMapping = {
  "BAGGAGE": "BAGGAGE",
  "MILES & SMILES": "5 MILES&SMILES",
  "5 MILES SMILES": "5 MILES&SMILES",
  "RESERVATION AND BOOKINGS": "RESERVATION and BOOKINGS",
  "TURKISH AIRLINES HOLIDAYS": "TURKISH AIRLINES HOLIDAYS",
  "TK WALLET": "TK WALLET",
  "FLIGHT EXPERIENCE": "FLIGHT EXPERIENCE",
  "CORPORATE CLUB": "7 CORPORATE CLUB",
  "7 CORPORATE CLUB": "7 CORPORATE CLUB",
  "FARE RULES AND PAYMENT": "FARE RULES and PAYMENT",
  "ADDITIONAL SERVICES": "9 ADDITIONAL SERVICES",
  "9 ADDITIONAL SERVICES": "9 ADDITIONAL SERVICES",
  "PASSENGER TYPES": "PASSENGER TYPES",
  "PETS, MUSIC INSTRUMENTS AND SPORTS EQUIPMENTS": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS"
};

// ============================================================================
// DE-DE CONTENT DATA
// ============================================================================

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

const deDeSectionMapping = {
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

// ============================================================================
// QUESTIONS DATA
// ============================================================================

const disabledPassengersQuestions = [
  {
    "question": "Uçuşlarınızda görevli bir doktor bulunuyor mu?",
    "answer": "Ne yazık ki u&#231;uşlarımızda g&#246;revli doktor bulunmuyor. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23911"
  },
  {
    "question": "Otizm tanısı olan yolcular nasıl seyahat edebilir?",
    "answer": "\\\"Refakat&#231;ileri ile seyahat etmeleri durumunda doktor raporuna gerek yoktur. Refakat&#231;i olmadan tek başlarına seyahatlerinde ise \\\"<span style=\\\"text-decoration: underline;\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Refakat&#231;i olmadan u&#231;ak ile seyahat edebilir.</span>\\\" ibaresinin yer aldığı doktor raporu ile u&#231;uşa kabul edileceklerdir.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "366883"
  },
  {
    "question": "Duyma engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "Duyma engelli yolcularımız tek başlarına seyahat edebilirler. Detaylı bilgi i&#231;in&#160;<a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23884"
  },
  {
    "question": "Uçuş sırasında ilkyardım hizmeti alabilir miyim?",
    "answer": "Kabin ekibimiz ilkyardım konusunda bilgi sahibidir. Bu sebeple u&#231;uş sırasında sadece ilkyardım kapsamına giren m&#252;dahalelere ihtiya&#231; duyulduğu durumlarda kabin ekibimiz medikal hizmet sunabiliyor. Ancak ilkyardımın yeterli olmadığı durumlarda havada m&#252;dahale ger&#231;ekleştirilemeyeceğini vurgulamak isteriz. Detaylı bilgi i&#231;in <a xlink:href=\"tcm:92-17648\" title=\"Special Assistance for Passengers - Article1 - TR\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23909"
  },
  {
    "question": "Uçuş sırasında kendi solunum cihazımı kullanabilir miyim?",
    "answer": "Solunum zorluğu &#231;ekiyorsanız u&#231;uş sırasında u&#231;ağın kalkış ve iniş aşamaları haricinde kendi respirat&#246;r, vantilat&#246;r, uyku apnesi gibi solunum cihazlarınızı kullanabilirsiniz. Bu cihazların u&#231;uş &#246;ncesinde yetkili personel tarafından onaylanması gerektiğini hatırlatalım. T&#252;rk Hava Yolları olarak u&#231;uşlarımızda şu marka solunum cihazlarına izin veriyoruz: LifeStyle, AirSep Focus, AirSep FreeStyle 5, Delphi RS-00400, DeVilbiss Healthcare iGo, Inogen One, Inogen One G2, Inogen One G3, Inova LabsLifeChoice, Inova Labs LifeChoice Activox, International BiophysicsLifeChoice, Invacare XPO2, InvacareSolo2, Oxlife Independence Oxygen Concentrator, Oxus RS-00400, Precision Medical EasyPulse, Respironics EverGo, Respironics SimplyGo, SeQual Eclipse and SeQual SAROS Portable Oxygen Concentrator. Detaylı bilgi i&#231;in&#160;<a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23895"
  },
  {
    "question": "Uçuş sırasında kendi oksijen tüpümü kullanabilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">U&#231;akta medikal sertifikalı oksijen t&#252;pleri mevcut olduğundan, talep etmeniz durumunda oksijen t&#252;p&#252; hizmeti verilmektedir. Bu talebinizi u&#231;uşunuzdan en az 48 saat &#246;nce bildirmeniz gerekmektedir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">G&#252;venlik nedeniyle u&#231;uş sırasında kendi oksijen t&#252;p&#252;n&#252;z&#252; kullanmanız m&#252;mk&#252;n olmamaktadır. Ancak kendinize boş t&#252;p, gerekli kontroller sağlandıktan sonra kayıtlı bagaj olarak u&#231;ak altı bagaj kompartımanında taşınabilir. Oksijen t&#252;plerinin maksimum ağırlığı beş (5) kg olmalıdır.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23894"
  },
  {
    "question": "Uçağa giderken kendi tekerlekli sandalyemi kullanabilir miyim?",
    "answer": "Y&#252;r&#252;me engelli yolcularımız i&#231;in u&#231;ağa giderken, u&#231;uş sırasında ve u&#231;aktan d&#246;nerken kullanabilecekleri tekerlekli sandalyelerimiz mevcut. Bu y&#252;zden kendi tekerlekli sandalyenize gerek kalmaz ve sandalyeniz &#252;cretsiz olarak u&#231;ak altı bagaj b&#246;l&#252;m&#252;nde taşınır. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" href=\"/tr-tr/bilgi-edin/hasta-ve-engelli-yolcular/index3.html\"   >hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23890"
  },
  {
    "question": "Yürüme engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "T&#252;m &#246;zel ihtiya&#231;ları i&#231;in yardıma gereksinimi olan y&#252;r&#252;me engelli yolcularımız ancak bir refakat&#231;i eşliğinde seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23889"
  },
  {
    "question": "Uçuş sırasında bebeğim kuvözüyle seyahat edebilir mi? ",
    "answer": "Ne yazık ki u&#231;uşlarımızda bebeğinizi kuv&#246;zde taşıyamıyoruz. Detaylı bilgi i&#231;in&#160;<a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23897"
  },
  {
    "question": "Hasta yolcu sedyede yolculuk yapabilir mi?",
    "answer": "U&#231;uş sırasında sedyeyle yolculuk yapabilirsiniz. B&#246;yle durumlarda yolcularımızdan en y&#252;ksek Economy Class tek y&#246;n vergiler hari&#231; &#252;cretinin 7 katı ve tek bir biletin vergileri talep edilir. Ayrıca sedyeyle seyahat edecek hastalarımız ancak refakat&#231;iyle yolculuk yapabilirler ve refakat&#231;i bileti ayrı olarak kesilir. Sedyeyle seyahat edebilmek i&#231;in sizin ve refakat&#231;inizin 10 g&#252;n &#246;nceden hazırlanmanız ve durumunuzun u&#231;uşa uygun olduğunun belirtildiği T&#252;rk&#231;e ya da İngilizce doktor raporunu sunmanız beklenir. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23893"
  },
  {
    "question": "Hem görme hem de duyma engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "Ne yazık ki hayır. Hem g&#246;rme hem de duyma engelli yolcularımız ancak bir refakat&#231;i eşliğinde seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23885"
  },
  {
    "question": "Talep edildiği takdirde ihtiyacı olan yolculara herhangi özel bir hizmet veriliyor mu?",
    "answer": "Yaşlı, &#231;ok gen&#231;, dil problemi ya da fobisi olan, g&#246;rme ve işitme engelli gibi &#246;zel ihtiya&#231;ları olan yolcularımız, check-in işlemlerinin ardından u&#231;ağa alınma ve u&#231;aktan havalimanına varış s&#252;resi i&#231;inde &#246;zel refakat hizmeti alabilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23886"
  },
  {
    "question": "MS hastaları uçakla seyahat edebilir mi?",
    "answer": "Atakların ani gelişebilme ihtimali ve u&#231;uşun başlı başına bir stres kaynağı olması sebebiyle MS hastaları sadece u&#231;uşa uygun olduğu durumunun belirtildiği doktor raporuyla seyahat edebilir. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23892"
  },
  {
    "question": "Görme engelli yolcular rehber köpeklerini kabin içine alabilirler mi?",
    "answer": "G&#246;rme engelli yolcularımız aşıları tamamlanmış, sağlık belgesi ve kimliği bulunan rehber k&#246;peklerini kabine &#252;cretsiz olarak alabilirler. Rehber k&#246;pekler i&#231;in rezervasyonun u&#231;uş saatinden 48 saat &#246;ncesine kadar yapılması ve kafessiz olarak kabinde bulunacak k&#246;peklerin temiz, &#246;zel tasması takılı ve ağızlıkla seyahat etmesi gerektiğini belirtelim. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23882"
  },
  {
    "question": "Görme engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "G&#246;rme engelli yolcularımız tek başlarına ya da rehber k&#246;pekleriyle birlikte seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23883"
  },
  {
    "question": "Zihinsel engelli yolcular için sağlık raporu gerekli mi ve bu yolcular bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "Zihinsel engelli yolcularımız i&#231;in sağlık raporuna gerek duyulmuyor. Ancak, bu yolcularımızın refakat&#231;ileriyle birlikte seyahat etmeleri gerekir. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23887"
  },
  {
    "question": "Engelli, yaşlı ya da hasta yolcular için kabin içinde özel bir refakat hizmeti veriyor musunuz?",
    "answer": "Kabin i&#231;inde &#246;zel ihtiya&#231;ları olan yolcularımıza ne yazık ki refakat hizmeti veremiyoruz. Ancak kabin ekibimiz, engelli, yaşlı ve hasta yolcularımız i&#231;in m&#252;mk&#252;n olan en iyi hizmeti sunmaya &#231;alışır. Kişisel ihtiya&#231;larını tek başına gideremeyen yaşlı, hasta ve engelli yolcularımız ancak bir refakat&#231;i eşliğinde seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23888"
  },
  {
    "question": "Uçuşlarınızda engelliler için herhangi bir indirim var mı? Varsa şartlarını öğrenebilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">%40 ve &#252;zeri oranda engelli olan yolcularımıza, promosyon biletler hari&#231; t&#252;m i&#231; hat biletlerde %20 indirim ve t&#252;m dış hat biletlerde %25 indirim sağlıyoruz. İndirimler ekonomi kabinde sağlanacaktır. Yolcularımızın bu indirimden faydalanmaları i&#231;in %40 ve &#252;zeri oranda engelli olduğunu g&#246;steren bir belgeyi (TC Aile ve Sosyal Hizmetler Bakanlığı&#39;ndan alınmış engelli kimlik kartı, tam teşekk&#252;ll&#252; devlet hastanelerinden alınan %40 ve &#252;zeri engelli sağlık kurulu raporu veya \\\"Engelli\\\" ibaresi bulunan n&#252;fus c&#252;zdanı) Miles&Smiles hesabına eklemesi gerekmektedir.</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Almanya'da engelli indirimi, engelli kimliğinde G, AG, H, BL harflerinden birisi varsa uygulanabilir. Engelli yolcunun yanında refakat&#231;i g&#246;t&#252;rebileceğine dair kimliğinde bilgi (B harfi) olması durumunda beraber u&#231;tuğu bir kişi i&#231;in aynı oranda refakat&#231;i indirimi uygulanabilir.&#160;</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Ayrıca \\\"Refakat&#231;i ile seyahat etmelidir\\\" ibaresi bulunan doktor raporunun ibraz edilmesi halinde, engelli yolcu ile aynı seferde seyahat edecek bir refakat&#231;iye de promosyon biletler hari&#231; t&#252;m i&#231; hat biletlerde %20 indirim sağlanır.&#160;</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">&#214;zel hizmete (tekerlekli sandalye, sedye vb.) ihtiya&#231; duyan hareket kabiliyeti kısıtlı yolcularımıza, u&#231;uş saatinden en az 48 saat &#246;nce rezervasyon yapmaları şartıyla, T&#252;rk Hava Yolları'nın g&#246;revlendirdiği sağlık veya yer hizmetleri kuruluşlarının uzman personeli tarafından terminalden u&#231;ağa, u&#231;aktan terminale transfer hizmeti &#252;cretsiz olarak sunulur. En az 48 saat &#246;nce iletilmeyen talepler, u&#231;uş saatinde yaşanabilecek yoğun talep sebebiyle imkanlar dahilinde değerlendirilecek olup, bu talepler i&#231;in hizmetin sağlanması garanti edilemez. Detaylı bilgi i&#231;in &#231;ağrı merkezimizi arayabilir ve 7/24 destek alabilirsiniz.&#160;</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Engelli indirimi, T&#252;rkiye &#231;ıkış ve varışta uygulanmaktadır. T&#252;rk Hava Yolları'nın taşıyıcı havayolu olmadığı codeshare (ortak) u&#231;uşlarda uygulanmaz.</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Mobil uygulamamızın g&#252;ncel versiyonunu kullanarak i&#231; hat seferlerimizde engelli yolcu indiriminden yararlanabilirsiniz. Bu indirimden yararlanmak i&#231;in Miles&Smiles &#252;yesi olmanız ve engel bilgilerinizi &#252;ye hesabınıza eksiksiz olarak girmiş olmanız gerekir. Engelli yolcu indirimine ilişkin detaylı bilgileri <a href=\\\"https://www.turkishairlines.com/tr-tr/kampanyalar/ogrenci-ve-engelli-yolcularimiz-indirimli-ucuyor/index.html\\\" target=\\\"_blank\\\">burada</a> bulabilirsiniz.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "144983"
  },
  {
    "question": "Ateşimin yüksek olması seyahat etmeme engel olur mu?",
    "answer": "Seyahat etmenize engel olabilecek bir hastalığınız olduğundan ş&#252;pheleniyorsanız, u&#231;uş &#246;ncesinde bir doktora danışmanızı tavsiye ediyoruz. Hastalığınız nedeniyle u&#231;uş sırasında &#246;zel talepleriniz olacaksa, bu talepleri u&#231;uşa en ge&#231; 24 saat kala T&#252;rk&#231;e ya da İngilizce olarak hazırlanmış bir doktor raporuyla iletmeniz yeterlidir. Doktor raporunuzda hastalığınızın u&#231;uş yapmanıza engel olmayacağı bilgisinin yer alması gerektiğini hatırlatalım. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23906"
  },
  {
    "question": "Astım hastalığım uçak seyahati yapmama engel olur mu?",
    "answer": "Astım hastasıysanız \\\"u&#231;akla seyahatinde sakınca yoktur\\\" a&#231;ıklamasının yer aldığı T&#252;rk&#231;e ya da İngilizce doktor raporu ile seyahat edebilirsiniz. U&#231;ak kapısı kapanmadan &#246;nce astım krizi ge&#231;irmeniz durumunda u&#231;aktan indirileceğinizi hatırlatalım. Detaylı bilgi i&#231;in <a title=\\\"Special Assistance for Passengers - Article1 - TR\\\" xlink:href=\\\"tcm:92-17648\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:title=\\\"Special Assistance for Passengers - Article1 - TR\\\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23900"
  },
  {
    "question": "Kalp hastalığım yolculuk yapmama engel olur mu?",
    "answer": "<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\"><u>Son &#252;&#231; (3) ay i&#231;erisinde ge&#231;irmiş oldukları</u> her t&#252;rl&#252; kalp, damar, g&#246;ğ&#252;s ve beyin hastalıkları veya bununla ilgili yapılan operasyonlar (by-pass, anjiyo, kalp ameliyatı, beyin ameliyatı vb.) sonucunda durumları hakkında beyanda veya &#246;zel bir istekte bulunan yolcular \\\"U&#231;ak ile seyahatinde sakınca yoktur.\\\" ibaresinin yer aldığı doktor raporu ile u&#231;uşa kabul edilir.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23902"
  },
  {
    "question": "Hastalığım yolculuk yapmama engel olur mu?",
    "answer": "Yolculuk yapmanıza engel olabilecek bir hastalığınız olduğundan ş&#252;pheleniyorsanız, u&#231;uş &#246;ncesinde bir doktora danışmanızı tavsiye ederiz. Hastalığınız nedeniyle u&#231;uş sırasında &#246;zel talepleriniz olacaksa, taleplerinizi u&#231;uş &#246;ncesinde beraberinizde getirdiğiniz T&#252;rk&#231;e ya da İngilizce olarak hazırlanmış bir doktor raporuyla bize iletebilirsiniz. İlettiğiniz doktor raporunda hastalığınızın u&#231;uş yapmanıza engel olmayacağı bilgisinin yer aldığına dikkat edin. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23881"
  },
  {
    "question": "Astım hastasıyım, uçuşta spreyimi yanımda taşıyabilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">U&#231;uş s&#252;resince kullanmanız gereken astım spreyi gibi ila&#231; ve tıbbi malzemeleri yanınızda taşıyabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Hasta ve Engelli Yolcular\" xlink:href=\"tcm:92-17648\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">Hasta ve Engelli Yolcular</a> sayfamızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23901"
  },
  {
    "question": "Diyabet hastasıyım, kabin içinde hangi araçları kullanabilirim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">&#214;ncelikle u&#231;uş sırasında kullanmanız gereken ila&#231; veya tıbbi malzemelerinizi rezervasyon sırasında belirterek, bunu onaylayan doktor raporuyla seyahat etmeniz gerektiğini belirtelim. Diyabet hastasıysanız aşağıdaki ekipmanları kabin i&#231;inde taşıyabilirsiniz:</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Flakon veya flakon bulunan kutular</li>\n<li>Jet enjekt&#246;rler</li>\n<li>Kalemler</li>\n<li>Tek kullanımlık şırıngalar</li>\n<li>Paketi bozulmamış ins&#252;lin i&#231;in gerekli şırıngalar, lanset, kan &#246;l&#231;&#252;m stripleri, kan &#246;l&#231;&#252;m test stripleri, ins&#252;lin pompası, ins&#252;lin pompası &#252;r&#252;nleri</li>\n<li>Her &#231;eşit ins&#252;lin</li>\n</ul>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23898"
  },
  {
    "question": "Gerekli durumlarda havalimanında sağlık yardımı alabilmem mümkün mü?",
    "answer": "İhtiya&#231; halinde havalimanlarında acil durumlar i&#231;in destek veren sağlık personellerinden yardım alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23903"
  },
  {
    "question": "İhtiyacım olduğunda uçak içinde sağlık yardımı alabilir miyim?",
    "answer": "İlkyardım m&#252;dahalesi gerektiren durumlarda bu konuda eğitimli kabin memurları ve ilkyardım ekipmanları ile sağlık yardımı alabilirsiniz. Ancak rahatsızlığınız ilkyardım eğitimiyle giderilemeyecek durumdaysa u&#231;ak i&#231;inde m&#252;dahale edilemez ve en yakın uygun olan havalimanına acil iniş yapılır. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hopic:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23905"
  },
  {
    "question": "Duyma engelli yolcular kabin içinde eğlence olanaklarından yararlanabilir mi?",
    "answer": "Duyma engelli yolcularımız u&#231;ak i&#231;i eğlence sistemimizde yer alan altyazılı filmler eşliğinde keyifli bir seyahat ger&#231;ekleştirebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23914"
  },
  {
    "question": "Havalimanında medikal yardım hizmeti alabilir miyim?",
    "answer": "T&#252;rk Hava Yolları olarak b&#246;yle bir hizmetimiz bulunmuyor. Ancak havalimanının verdiği medikal hizmetlerden yararlanabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23908"
  },
  {
    "question": "Uzun süreli uçuşlarda jet lag etkilerini ortadan kaldırabilmek için ne yapmalıyım?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">&#214;zellikle okyanusaşırı u&#231;uşlar sonrasında v&#252;cudunuzun zaman dilimi farkına alışmasının birka&#231; g&#252;n alabileceğini hatırlatalım. Bu alışma d&#246;neminindeki sorunları azaltmak i&#231;in;&#160;</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Zinde olun: Sık sık zaman farkı olan uzun s&#252;reli u&#231;uşlar ger&#231;ekleştiriyorsanız zinde olmanızda fayda var. D&#252;zenli egzersizlerle v&#252;cut enerjinizi y&#252;ksek tutarak jet lag etkilerini azaltabilirsiniz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Alkol ve kahve kullanmayın: Alkol ve kafein v&#252;cutta su eksilmesine ve uyku problemlerine neden olur. Jet lag etkilerini azaltmak i&#231;in u&#231;uşunuzdan bir g&#252;n &#246;nce alkol ve kahve kullanmayın.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Su i&#231;in: Sıvı kaybını &#246;nlemek adına m&#252;mk&#252;n olduğu kadar fazla su i&#231;meye &#231;alışın.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">G&#252;nl&#252;k rutininizi yavaş bir şekilde değiştirin: Yemek ve uyku saatlerinizi gittiğiniz yerin zamanına g&#246;re yavaş bir şekilde değiştirin. Yemek ve uyku saatlerinizi her g&#252;n 2 saat değiştirerek yeni zamana daha kolay uyum sağlayabilirsiniz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Uyku haplarını dikkatli kullanın: Hangi uyku haplarını kullanabileceğiniz konusunda doktorunuza danışmanızı tavsiye ediyoruz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Uyku haplarını &#231;ok zor durumda kalmadık&#231;a kullanmamaya dikkat edin.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23907"
  },
  {
    "question": "Yolculuk sırasında ilaç kullanmam gerektiğinde ne yapmalıyım?",
    "answer": "Kabin i&#231;inde ila&#231; kullanmak i&#231;in u&#231;uş sırasında ila&#231; kullanmanızın gerektiğini belirten T&#252;rk&#231;e ya da İngilizce doktor raporunu ilgili personele ibraz etmeniz yeterlidir. Daha sonra u&#231;uş sırasında kendi paketinde taşıdığınız ilacı kullanabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23899"
  }
];

const infantsChildrenQuestions = [
  {
    "question": "Bebekler için özel koltuğunuz (puset) var mı?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebek yolcularımızın g&#252;venli bir şekilde seyahat etmesi i&#231;in kabin ekibi tarafından verilen &#246;zel bebek kemeriyle refakat&#231;ilerinin kucağında seyahat etmesi gerekiyor. Dolayısıyla bebekler i&#231;in &#246;zel koltuk uygulamamız bulunmuyor.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebekli yolcularımız &#231;anta tipi pusetle (portbebe) yolculuk yapmayı tercih ederlerse, 70x30 cm boyutlarında puseti, check-in işlemi sırasında kabin bagajı olarak kabul edilir. Emniyet kemerinin takılı olması gerektiğini g&#246;steren ışıkların s&#246;nd&#252;ğ&#252; durumlarda, &#231;anta tipi bebek puseti kullanılabilir. Maksimum boyutları ge&#231;en &#231;anta tipi bebek pusetleri kabin i&#231;inde taşınmaz. Bebekli yolcularımızın acil &#231;ıkış kapılarının bulunduğu koltuklarda oturması m&#252;mk&#252;n değildir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">2 yaşını ge&#231;memiş bebekler i&#231;in araba tipi bebek puseti kullanılabilir. Bebekli yolcularımız araba tipi pusetle yolculuk yapmayı tercih ederlerse, 40x40 cm boyutlarında puseti ilave koltuk satın alarak kullanabilirler. Pusetin kendine ait bağlama kemeri olması, koltuğa g&#252;venli bir şekilde emniyet kemeriyle bağlanması ve &#246;ne doğru eğilmesinin engellenmesi gerekir. Kalkıştan &#246;nce sıkıca bağlanan puset varış noktasına kadar bu şekilde kalmalıdır. Bebek yolcular i&#231;in satın alınacak ilave koltuk, indirimli &#231;ocuk bileti olarak d&#252;zenlenir ve puset i&#231;in ek &#252;cret alınmaz. Bebeğinizin koltukta emniyet kemeriyle bağlanabilmesi i&#231;in puset/&#231;ocuk koltuğu sizin tarafınızdan temin edilmelidir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1\"  >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "183584"
  },
  {
    "question": "Çocuğum kaç yaşına geldiğinde yanında refakatçi olmadan seyahat edebilir?",
    "answer": "Seyahatin başladığı g&#252;n 7. yaş g&#252;n&#252;n&#252; kutlamış, ancak 12. yaş g&#252;n&#252;n&#252; kutlamamış 7-11 yaş arası yolcularımız ebeveynlerinin ya da kanuni temsilcilerinin izniyle, Refakatsiz &#199;ocuk Taşıma Yetki Belgesi imzalandıktan sonra tek başlarına seyahat edebilirler. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25297"
  },
  {
    "question": "Bebeğim kucağımda seyahat edebilir mi?",
    "answer": "Bebeğiniz 2 yaşını doldurana kadar ilave kemerlerle korunarak kucağınızda seyahat edebilir. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23843"
  },
  {
    "question": "Bebek arabasını kabin içinde taşıyabilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebek arabanızı sadece kayıtlı bagaj olarak kargo b&#246;l&#252;m&#252;nde taşıyabilirsiniz. Bu y&#252;zden bebek arabanızı u&#231;ağın kapısına kadar getirebilir ve u&#231;ağa ge&#231;iş sırasında g&#246;revlilere teslim edebilirsiniz. Bebek arabasından ayrılmış puseti kabin i&#231;erisine alabilirsiniz. 0-7 yaş (8. yaş g&#252;n&#252;n&#252; kutlamamış) arası yolcularımız i&#231;in serbest bagaj hakkına ek olarak, bir (1) adet katlanabilir bebek arabası/pusetini &#252;cretsiz taşıdığımızı belirtmek isteriz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebek arabaları aşağıdaki koşulların sağlanması durumunda kabin bagajı olarak da kabul edilebilir ve kabin bagajı olarak kabul edilen bebek arabalarına kabin bagajı etiketi takılır:</p>\n<ul class=\"RichTextList-bulleted\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>\n<div class=\"TypographyPresentation TypographyPresentation--medium RichText3-paragraph--withVSpacingNormal RichText3-paragraph\">Maksimum 23x40x55 cm ebatlarında ve 8 kg ağırlığını aşmamak,</div>\n</li>\n<li>\n<div class=\"TypographyPresentation TypographyPresentation--medium RichText3-paragraph--withVSpacingNormal RichText3-paragraph\">Muhafaza &#231;antası/poşetinde olmak</div>\n</li>\n<li>\n<div class=\"TypographyPresentation TypographyPresentation--medium RichText3-paragraph--withVSpacingNormal RichText3-paragraph\">Yolcunun kabin bagajı hakkına dahil olmak.</div>\n</li>\n</ul>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"  >bebek ve &#231;ocuk yolcular sayfamızı</a> ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25298"
  },
  {
    "question": "Bebeğim için yemek seçimi yapabilir miyim?",
    "answer": "T&#252;m i&#231; hat ve dış hat seferlerimizde bebek maması uygulamamızdan yararlanabilirsiniz. Aynı zamanda dış hat seferlerimizde u&#231;uştan 24 saat &#246;ncesine kadar bebeğiniz i&#231;in &#246;zel olarak bebek yemeği se&#231;iminde bulunabilirsiniz. Detaylı bilgi i&#231;in bebek ve &#231;ocuk yolcular sayfamızı ve &#246;zel yemek servisi sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23837"
  },
  {
    "question": "Yolculuk sırasında bebeğim için yemek alabilir miyim?",
    "answer": "Rezervasyon sırasında bebek yemeği talebinizi ilettiğiniz s&#252;rece, yolculuk sırasında bebek yemeği hizmetimizden yararlanabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23847"
  },
  {
    "question": "Çocuğum için refakatçi talebinde bulunabilir miyim?",
    "answer": "U&#231;ağın kalkış saatinden 48 saat &#246;ncesine kadar &#231;ocuğunuz i&#231;in refakat hostesi talebinde bulunabilirsiniz. Detaylı bilgi i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25299"
  },
  {
    "question": "Kabin içine sıvı bebek maması alabilir miyim?",
    "answer": "U&#231;uş sırasında \"bebeğinizin ihtiyacını karşılayacak kadar\" sıvı mamayı kabin i&#231;inde taşımak &#252;zere yanınıza alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23841"
  },
  {
    "question": "Birden fazla bebekle tek refakatçi olarak seyahat edebilir miyim?",
    "answer": "2 yaşını doldurmamış bebeğiniz ancak bir refakat&#231;i eşliğinde yolculuk yapabilir ve bir yetişkin en fazla bir bebeğe refakat edebilir. Bu sebeple refakat&#231;i sayısının bebek sayısıyla eşit olması gerekir. Eğer sizden başka refakat&#231;i yoksa, diğer bebekler i&#231;in &#231;ocuk bileti satın alabilir ve belli bir &#252;cret karşılığı refakat i&#231;in kabin memuru talep edebilirsiniz. &#199;ocuk yolcu bileti satın almanız durumunda bebeğinizin koltukta pusetiyle birlikte oturması gerektiğinin altını &#231;izelim. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23846"
  },
  {
    "question": "Yeni doğan bebeğimle yolculuk yapabilir miyim?",
    "answer": "Bebekleri, doğumlarından sonraki ilk 48 saat i&#231;inde u&#231;uşlara kabul edemiyoruz. 2-8 g&#252;n aralığındaki bebeğiniz ise sadece \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" a&#231;ıklamasının yer aldığı ge&#231;erli bir doktor raporu sunmanız durumunda seyahat edebilir. Bebeğiniz, doğumundan sonraki 8 g&#252;n&#252;n ardından kucağınızda seyahat edebilir. Detaylı bilgi i&#231;in l&#252;tfen <a href=\\\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\\\" title=\\\"Infants and Children - Article1 - TR\\\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25300"
  },
  {
    "question": "Çocuğum kucağımda seyahat edebilir mi?",
    "answer": "2 yaşını doldurmuş t&#252;m yolcularımız sadece kendi koltuklarında seyahat edebilirler. 2-12 yaş arası &#231;ocuğunuzun bileti i&#231;in &#246;zel indirimden faydalanabilirsiniz. Detaylı bilgi i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25301"
  },
  {
    "question": "Çocuğum tek başına yolculuk yapabilir mi?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Seyahatin başladığı g&#252;n 7. yaş g&#252;n&#252;n&#252; kutlamış ancak 12. yaş g&#252;n&#252;n&#252; kutlamamış 7-11 yaş arası yolcularımız, ebeveynlerinin ya da kanuni temsilcilerinin izniyle, Refakatsiz &#199;ocuk Taşıma Yetki Belgesi imzalandıktan sonra tek başlarına seyahat edebilirler<span style=\"color: rgb(255, 0, 0);\">*</span>. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"  >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.&#160;</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\"><span style=\"color: rgb(255, 0, 0);\">*</span>Kısıtlamaları g&#246;rmek i&#231;in l&#252;tfen <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"  >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23839"
  },
  {
    "question": "Çocuğum benden başka biriyle yolculuk yapabilir mi?",
    "answer": "Bebek ve &#231;ocuk yolcularla ilgili u&#231;uş kurallarımız i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >ilgili sayfamızı</a> ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25302"
  },
  {
    "question": "Bebeğim tek başına seyahat edebilir mi?",
    "answer": "Bebeğiniz 2 yaşını doldurmadıysa yalnızca ebeveynleriyle ya da kanuni temsilcileriyle birlikte seyahat edebilir. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23845"
  },
  {
    "question": "3 yaşındaki çocuğum için farklı bir koltuk almam gerekir mi?",
    "answer": "2. yaş g&#252;n&#252;n&#252; kutlamış, ancak 12. yaş g&#252;n&#252;n&#252; kutlamamış olan 2-11 yaş arası yolcularımız i&#231;in &#231;ocuk bileti d&#252;zenliyoruz. Bu yaş aralığındaki &#231;ocuklarınız sadece kendi koltuklarında seyahat edebileceğinden onlar i&#231;in farklı bir koltuk almanız gerekir. Detaylı bilgi i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25303"
  },
  {
    "question": "Çocuklar için indirimli biletleriniz var mı?",
    "answer": "<div class=\"RichText3-paragraph--withVSpacingNormal RichText3-paragraph Typography Typography--m\" xmlns=\"http://www.w3.org/1999/xhtml\">İ&#231; hat seferlerimizde 2. yaşını kutlamış fakat hen&#252;z 12. yaşını kutlamamış t&#252;m &#231;ocuk yolcularımıza L-T-Q-E-O-S-H-A-M-B &#252;cret sınıflarında %10 indirim, <strong>Business kabin</strong>de ise %15 indirim uyguluyoruz. Promosyon biletlerde &#231;ocuk yolcu indirimi ge&#231;erli değildir. Dış hat seferlerimizde ise &#252;cret kuralları izin verdiği takdirde &#231;ocuk yolcu indiriminden faydalanılabilir. Detaylı bilgi i&#231;in <a class=\"PrimaryLink BaseLink\" href=\"https://www.turkishairlines.com/tr-int/bilgi-edin/bebek-ve-cocuk-yolcular/\" target=\"_blank\" rel=\"noreferrer noopener\">bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.</div>\n<div class=\"RichText3-paragraph--withVSpacingNormal RichText3-paragraph Typography Typography--m\" xmlns=\"http://www.w3.org/1999/xhtml\">&#160;</div>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25304"
  },
  {
    "question": "Bebekler için indirimli biletleriniz var mı?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Seyahatin başladığı g&#252;n 2. yaş g&#252;n&#252;n&#252; kutlamamış t&#252;m bebek yolcularımız, Economy Class ve Business Class kabinlerinde seyahat ederken direkt ya da aktarmalı i&#231; hat seferlerinde belirlenen indirimli &#252;cretle yolculuk yapabilir. 2. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış t&#252;m bebek yolcularımızın refakat&#231;ilerinin kucağında seyahat etmesi gerektiğini de hatırlatalım.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"  >bebek ve &#231;ocuk yolcular</a> ve <a href=\"/tr-tr/bilgi-edin/ucret-kosullari/\" title=\"Fare Rules - Article - TR\"  >&#252;cret koşulları</a> sayfalarımızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25305"
  },
  {
    "question": "Hangi yolcular çocuk yolcu olarak kabul ediliyor?",
    "answer": "2 yaşını doldurmuş, ancak 12. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış 2-11 yaş aralığındaki t&#252;m yolcularımızı &#231;ocuk yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23835"
  },
  {
    "question": "Hangi yolcular bebek yolcu olarak kabul ediliyor?",
    "answer": "7 g&#252;n&#252;n&#252; doldurmuş ve 2. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış, 0-2 yaş aralığındaki t&#252;m yolcularımızı bebek yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23834"
  },
  {
    "question": "Bebeğim ilk seyahatini ne zaman yapabilir?",
    "answer": "Doğumundan sonraki ilk 48 saat i&#231;inde bebeğinizi ne yazık ki u&#231;uşlara kabul edemiyoruz. 2-7 g&#252;n aralığındaki bebeğiniz ise sadece \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" a&#231;ıklamasının yer aldığı ge&#231;erli bir doktor raporu ile seyahat edebilir. Detaylı bilgi i&#231;in <a title=\\\"Infants and Children - Article1 - TR\\\" href=\\\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\\\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23844"
  },
  {
    "question": "Tek başına yolculuk yapan çocuğum, varış noktasına ulaştığında bagaj ve gümrük işlemlerini nasıl tamamlayacak?",
    "answer": "&#199;ocuğunuz varış noktasına ulaştığında bir g&#246;revli personel tarafından karşılanır. Pasaport, g&#252;mr&#252;k, bagaj gibi işlemleri bu g&#246;revli personel yardımıyla tamamlanır. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23840"
  },
  {
    "question": "Çocuk yolcular için yaş sınırı nedir?",
    "answer": "2 yaşını doldurmuş, ancak 12. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış, 2-11 yaş aralığındaki t&#252;m yolcularımızı &#231;ocuk yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25306"
  },
  {
    "question": "Bebek yolcuların yaş sınırı nedir?",
    "answer": "7 g&#252;n&#252;n&#252; doldurmuş ve 2. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış olan t&#252;m yolcularımızı bebek yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23842"
  }
];

const questionsByTopic = {
  "Infants and children": [
  {
    "question": "Bebekler için özel koltuğunuz (puset) var mı?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebek yolcularımızın g&#252;venli bir şekilde seyahat etmesi i&#231;in kabin ekibi tarafından verilen &#246;zel bebek kemeriyle refakat&#231;ilerinin kucağında seyahat etmesi gerekiyor. Dolayısıyla bebekler i&#231;in &#246;zel koltuk uygulamamız bulunmuyor.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebekli yolcularımız &#231;anta tipi pusetle (portbebe) yolculuk yapmayı tercih ederlerse, 70x30 cm boyutlarında puseti, check-in işlemi sırasında kabin bagajı olarak kabul edilir. Emniyet kemerinin takılı olması gerektiğini g&#246;steren ışıkların s&#246;nd&#252;ğ&#252; durumlarda, &#231;anta tipi bebek puseti kullanılabilir. Maksimum boyutları ge&#231;en &#231;anta tipi bebek pusetleri kabin i&#231;inde taşınmaz. Bebekli yolcularımızın acil &#231;ıkış kapılarının bulunduğu koltuklarda oturması m&#252;mk&#252;n değildir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">2 yaşını ge&#231;memiş bebekler i&#231;in araba tipi bebek puseti kullanılabilir. Bebekli yolcularımız araba tipi pusetle yolculuk yapmayı tercih ederlerse, 40x40 cm boyutlarında puseti ilave koltuk satın alarak kullanabilirler. Pusetin kendine ait bağlama kemeri olması, koltuğa g&#252;venli bir şekilde emniyet kemeriyle bağlanması ve &#246;ne doğru eğilmesinin engellenmesi gerekir. Kalkıştan &#246;nce sıkıca bağlanan puset varış noktasına kadar bu şekilde kalmalıdır. Bebek yolcular i&#231;in satın alınacak ilave koltuk, indirimli &#231;ocuk bileti olarak d&#252;zenlenir ve puset i&#231;in ek &#252;cret alınmaz. Bebeğinizin koltukta emniyet kemeriyle bağlanabilmesi i&#231;in puset/&#231;ocuk koltuğu sizin tarafınızdan temin edilmelidir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1\"  >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "183584"
  },
  {
    "question": "Çocuğum kaç yaşına geldiğinde yanında refakatçi olmadan seyahat edebilir?",
    "answer": "Seyahatin başladığı g&#252;n 7. yaş g&#252;n&#252;n&#252; kutlamış, ancak 12. yaş g&#252;n&#252;n&#252; kutlamamış 7-11 yaş arası yolcularımız ebeveynlerinin ya da kanuni temsilcilerinin izniyle, Refakatsiz &#199;ocuk Taşıma Yetki Belgesi imzalandıktan sonra tek başlarına seyahat edebilirler. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25297"
  },
  {
    "question": "Bebeğim kucağımda seyahat edebilir mi?",
    "answer": "Bebeğiniz 2 yaşını doldurana kadar ilave kemerlerle korunarak kucağınızda seyahat edebilir. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23843"
  },
  {
    "question": "Bebek arabasını kabin içinde taşıyabilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebek arabanızı sadece kayıtlı bagaj olarak kargo b&#246;l&#252;m&#252;nde taşıyabilirsiniz. Bu y&#252;zden bebek arabanızı u&#231;ağın kapısına kadar getirebilir ve u&#231;ağa ge&#231;iş sırasında g&#246;revlilere teslim edebilirsiniz. Bebek arabasından ayrılmış puseti kabin i&#231;erisine alabilirsiniz. 0-7 yaş (8. yaş g&#252;n&#252;n&#252; kutlamamış) arası yolcularımız i&#231;in serbest bagaj hakkına ek olarak, bir (1) adet katlanabilir bebek arabası/pusetini &#252;cretsiz taşıdığımızı belirtmek isteriz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Bebek arabaları aşağıdaki koşulların sağlanması durumunda kabin bagajı olarak da kabul edilebilir ve kabin bagajı olarak kabul edilen bebek arabalarına kabin bagajı etiketi takılır:</p>\n<ul class=\"RichTextList-bulleted\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>\n<div class=\"TypographyPresentation TypographyPresentation--medium RichText3-paragraph--withVSpacingNormal RichText3-paragraph\">Maksimum 23x40x55 cm ebatlarında ve 8 kg ağırlığını aşmamak,</div>\n</li>\n<li>\n<div class=\"TypographyPresentation TypographyPresentation--medium RichText3-paragraph--withVSpacingNormal RichText3-paragraph\">Muhafaza &#231;antası/poşetinde olmak</div>\n</li>\n<li>\n<div class=\"TypographyPresentation TypographyPresentation--medium RichText3-paragraph--withVSpacingNormal RichText3-paragraph\">Yolcunun kabin bagajı hakkına dahil olmak.</div>\n</li>\n</ul>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"  >bebek ve &#231;ocuk yolcular sayfamızı</a> ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25298"
  },
  {
    "question": "Bebeğim için yemek seçimi yapabilir miyim?",
    "answer": "T&#252;m i&#231; hat ve dış hat seferlerimizde bebek maması uygulamamızdan yararlanabilirsiniz. Aynı zamanda dış hat seferlerimizde u&#231;uştan 24 saat &#246;ncesine kadar bebeğiniz i&#231;in &#246;zel olarak bebek yemeği se&#231;iminde bulunabilirsiniz. Detaylı bilgi i&#231;in bebek ve &#231;ocuk yolcular sayfamızı ve &#246;zel yemek servisi sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23837"
  },
  {
    "question": "Yolculuk sırasında bebeğim için yemek alabilir miyim?",
    "answer": "Rezervasyon sırasında bebek yemeği talebinizi ilettiğiniz s&#252;rece, yolculuk sırasında bebek yemeği hizmetimizden yararlanabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23847"
  },
  {
    "question": "Çocuğum için refakatçi talebinde bulunabilir miyim?",
    "answer": "U&#231;ağın kalkış saatinden 48 saat &#246;ncesine kadar &#231;ocuğunuz i&#231;in refakat hostesi talebinde bulunabilirsiniz. Detaylı bilgi i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25299"
  },
  {
    "question": "Kabin içine sıvı bebek maması alabilir miyim?",
    "answer": "U&#231;uş sırasında \"bebeğinizin ihtiyacını karşılayacak kadar\" sıvı mamayı kabin i&#231;inde taşımak &#252;zere yanınıza alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23841"
  },
  {
    "question": "Birden fazla bebekle tek refakatçi olarak seyahat edebilir miyim?",
    "answer": "2 yaşını doldurmamış bebeğiniz ancak bir refakat&#231;i eşliğinde yolculuk yapabilir ve bir yetişkin en fazla bir bebeğe refakat edebilir. Bu sebeple refakat&#231;i sayısının bebek sayısıyla eşit olması gerekir. Eğer sizden başka refakat&#231;i yoksa, diğer bebekler i&#231;in &#231;ocuk bileti satın alabilir ve belli bir &#252;cret karşılığı refakat i&#231;in kabin memuru talep edebilirsiniz. &#199;ocuk yolcu bileti satın almanız durumunda bebeğinizin koltukta pusetiyle birlikte oturması gerektiğinin altını &#231;izelim. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23846"
  },
  {
    "question": "Yeni doğan bebeğimle yolculuk yapabilir miyim?",
    "answer": "Bebekleri, doğumlarından sonraki ilk 48 saat i&#231;inde u&#231;uşlara kabul edemiyoruz. 2-8 g&#252;n aralığındaki bebeğiniz ise sadece \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" a&#231;ıklamasının yer aldığı ge&#231;erli bir doktor raporu sunmanız durumunda seyahat edebilir. Bebeğiniz, doğumundan sonraki 8 g&#252;n&#252;n ardından kucağınızda seyahat edebilir. Detaylı bilgi i&#231;in l&#252;tfen <a href=\\\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\\\" title=\\\"Infants and Children - Article1 - TR\\\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25300"
  },
  {
    "question": "Çocuğum kucağımda seyahat edebilir mi?",
    "answer": "2 yaşını doldurmuş t&#252;m yolcularımız sadece kendi koltuklarında seyahat edebilirler. 2-12 yaş arası &#231;ocuğunuzun bileti i&#231;in &#246;zel indirimden faydalanabilirsiniz. Detaylı bilgi i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25301"
  },
  {
    "question": "Çocuğum tek başına yolculuk yapabilir mi?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Seyahatin başladığı g&#252;n 7. yaş g&#252;n&#252;n&#252; kutlamış ancak 12. yaş g&#252;n&#252;n&#252; kutlamamış 7-11 yaş arası yolcularımız, ebeveynlerinin ya da kanuni temsilcilerinin izniyle, Refakatsiz &#199;ocuk Taşıma Yetki Belgesi imzalandıktan sonra tek başlarına seyahat edebilirler<span style=\"color: rgb(255, 0, 0);\">*</span>. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"  >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.&#160;</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\"><span style=\"color: rgb(255, 0, 0);\">*</span>Kısıtlamaları g&#246;rmek i&#231;in l&#252;tfen <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"  >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23839"
  },
  {
    "question": "Çocuğum benden başka biriyle yolculuk yapabilir mi?",
    "answer": "Bebek ve &#231;ocuk yolcularla ilgili u&#231;uş kurallarımız i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >ilgili sayfamızı</a> ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25302"
  },
  {
    "question": "Bebeğim tek başına seyahat edebilir mi?",
    "answer": "Bebeğiniz 2 yaşını doldurmadıysa yalnızca ebeveynleriyle ya da kanuni temsilcileriyle birlikte seyahat edebilir. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23845"
  },
  {
    "question": "3 yaşındaki çocuğum için farklı bir koltuk almam gerekir mi?",
    "answer": "2. yaş g&#252;n&#252;n&#252; kutlamış, ancak 12. yaş g&#252;n&#252;n&#252; kutlamamış olan 2-11 yaş arası yolcularımız i&#231;in &#231;ocuk bileti d&#252;zenliyoruz. Bu yaş aralığındaki &#231;ocuklarınız sadece kendi koltuklarında seyahat edebileceğinden onlar i&#231;in farklı bir koltuk almanız gerekir. Detaylı bilgi i&#231;in l&#252;tfen <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25303"
  },
  {
    "question": "Çocuklar için indirimli biletleriniz var mı?",
    "answer": "<div class=\"RichText3-paragraph--withVSpacingNormal RichText3-paragraph Typography Typography--m\" xmlns=\"http://www.w3.org/1999/xhtml\">İ&#231; hat seferlerimizde 2. yaşını kutlamış fakat hen&#252;z 12. yaşını kutlamamış t&#252;m &#231;ocuk yolcularımıza L-T-Q-E-O-S-H-A-M-B &#252;cret sınıflarında %10 indirim, <strong>Business kabin</strong>de ise %15 indirim uyguluyoruz. Promosyon biletlerde &#231;ocuk yolcu indirimi ge&#231;erli değildir. Dış hat seferlerimizde ise &#252;cret kuralları izin verdiği takdirde &#231;ocuk yolcu indiriminden faydalanılabilir. Detaylı bilgi i&#231;in <a class=\"PrimaryLink BaseLink\" href=\"https://www.turkishairlines.com/tr-int/bilgi-edin/bebek-ve-cocuk-yolcular/\" target=\"_blank\" rel=\"noreferrer noopener\">bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.</div>\n<div class=\"RichText3-paragraph--withVSpacingNormal RichText3-paragraph Typography Typography--m\" xmlns=\"http://www.w3.org/1999/xhtml\">&#160;</div>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25304"
  },
  {
    "question": "Bebekler için indirimli biletleriniz var mı?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Seyahatin başladığı g&#252;n 2. yaş g&#252;n&#252;n&#252; kutlamamış t&#252;m bebek yolcularımız, Economy Class ve Business Class kabinlerinde seyahat ederken direkt ya da aktarmalı i&#231; hat seferlerinde belirlenen indirimli &#252;cretle yolculuk yapabilir. 2. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış t&#252;m bebek yolcularımızın refakat&#231;ilerinin kucağında seyahat etmesi gerektiğini de hatırlatalım.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"  >bebek ve &#231;ocuk yolcular</a> ve <a href=\"/tr-tr/bilgi-edin/ucret-kosullari/\" title=\"Fare Rules - Article - TR\"  >&#252;cret koşulları</a> sayfalarımızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25305"
  },
  {
    "question": "Hangi yolcular çocuk yolcu olarak kabul ediliyor?",
    "answer": "2 yaşını doldurmuş, ancak 12. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış 2-11 yaş aralığındaki t&#252;m yolcularımızı &#231;ocuk yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23835"
  },
  {
    "question": "Hangi yolcular bebek yolcu olarak kabul ediliyor?",
    "answer": "7 g&#252;n&#252;n&#252; doldurmuş ve 2. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış, 0-2 yaş aralığındaki t&#252;m yolcularımızı bebek yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23834"
  },
  {
    "question": "Bebeğim ilk seyahatini ne zaman yapabilir?",
    "answer": "Doğumundan sonraki ilk 48 saat i&#231;inde bebeğinizi ne yazık ki u&#231;uşlara kabul edemiyoruz. 2-7 g&#252;n aralığındaki bebeğiniz ise sadece \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" a&#231;ıklamasının yer aldığı ge&#231;erli bir doktor raporu ile seyahat edebilir. Detaylı bilgi i&#231;in <a title=\\\"Infants and Children - Article1 - TR\\\" href=\\\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\\\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23844"
  },
  {
    "question": "Tek başına yolculuk yapan çocuğum, varış noktasına ulaştığında bagaj ve gümrük işlemlerini nasıl tamamlayacak?",
    "answer": "&#199;ocuğunuz varış noktasına ulaştığında bir g&#246;revli personel tarafından karşılanır. Pasaport, g&#252;mr&#252;k, bagaj gibi işlemleri bu g&#246;revli personel yardımıyla tamamlanır. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23840"
  },
  {
    "question": "Çocuk yolcular için yaş sınırı nedir?",
    "answer": "2 yaşını doldurmuş, ancak 12. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış, 2-11 yaş aralığındaki t&#252;m yolcularımızı &#231;ocuk yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\" title=\"Infants and Children - Article1 - TR\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edin.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "25306"
  },
  {
    "question": "Bebek yolcuların yaş sınırı nedir?",
    "answer": "7 g&#252;n&#252;n&#252; doldurmuş ve 2. yaş g&#252;n&#252;n&#252; hen&#252;z kutlamamış olan t&#252;m yolcularımızı bebek yolcu olarak kabul ediyoruz. Detaylı bilgi i&#231;in <a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "16-04-2025",
    "id": "23842"
  }
],
  "Disabled passengers": [
  {
    "question": "Uçuşlarınızda görevli bir doktor bulunuyor mu?",
    "answer": "Ne yazık ki u&#231;uşlarımızda g&#246;revli doktor bulunmuyor. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23911"
  },
  {
    "question": "Otizm tanısı olan yolcular nasıl seyahat edebilir?",
    "answer": "\\\"Refakat&#231;ileri ile seyahat etmeleri durumunda doktor raporuna gerek yoktur. Refakat&#231;i olmadan tek başlarına seyahatlerinde ise \\\"<span style=\\\"text-decoration: underline;\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Refakat&#231;i olmadan u&#231;ak ile seyahat edebilir.</span>\\\" ibaresinin yer aldığı doktor raporu ile u&#231;uşa kabul edileceklerdir.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "366883"
  },
  {
    "question": "Duyma engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "Duyma engelli yolcularımız tek başlarına seyahat edebilirler. Detaylı bilgi i&#231;in&#160;<a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23884"
  },
  {
    "question": "Uçuş sırasında ilkyardım hizmeti alabilir miyim?",
    "answer": "Kabin ekibimiz ilkyardım konusunda bilgi sahibidir. Bu sebeple u&#231;uş sırasında sadece ilkyardım kapsamına giren m&#252;dahalelere ihtiya&#231; duyulduğu durumlarda kabin ekibimiz medikal hizmet sunabiliyor. Ancak ilkyardımın yeterli olmadığı durumlarda havada m&#252;dahale ger&#231;ekleştirilemeyeceğini vurgulamak isteriz. Detaylı bilgi i&#231;in <a xlink:href=\"tcm:92-17648\" title=\"Special Assistance for Passengers - Article1 - TR\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23909"
  },
  {
    "question": "Uçuş sırasında kendi solunum cihazımı kullanabilir miyim?",
    "answer": "Solunum zorluğu &#231;ekiyorsanız u&#231;uş sırasında u&#231;ağın kalkış ve iniş aşamaları haricinde kendi respirat&#246;r, vantilat&#246;r, uyku apnesi gibi solunum cihazlarınızı kullanabilirsiniz. Bu cihazların u&#231;uş &#246;ncesinde yetkili personel tarafından onaylanması gerektiğini hatırlatalım. T&#252;rk Hava Yolları olarak u&#231;uşlarımızda şu marka solunum cihazlarına izin veriyoruz: LifeStyle, AirSep Focus, AirSep FreeStyle 5, Delphi RS-00400, DeVilbiss Healthcare iGo, Inogen One, Inogen One G2, Inogen One G3, Inova LabsLifeChoice, Inova Labs LifeChoice Activox, International BiophysicsLifeChoice, Invacare XPO2, InvacareSolo2, Oxlife Independence Oxygen Concentrator, Oxus RS-00400, Precision Medical EasyPulse, Respironics EverGo, Respironics SimplyGo, SeQual Eclipse and SeQual SAROS Portable Oxygen Concentrator. Detaylı bilgi i&#231;in&#160;<a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23895"
  },
  {
    "question": "Uçuş sırasında kendi oksijen tüpümü kullanabilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">U&#231;akta medikal sertifikalı oksijen t&#252;pleri mevcut olduğundan, talep etmeniz durumunda oksijen t&#252;p&#252; hizmeti verilmektedir. Bu talebinizi u&#231;uşunuzdan en az 48 saat &#246;nce bildirmeniz gerekmektedir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">G&#252;venlik nedeniyle u&#231;uş sırasında kendi oksijen t&#252;p&#252;n&#252;z&#252; kullanmanız m&#252;mk&#252;n olmamaktadır. Ancak kendinize boş t&#252;p, gerekli kontroller sağlandıktan sonra kayıtlı bagaj olarak u&#231;ak altı bagaj kompartımanında taşınabilir. Oksijen t&#252;plerinin maksimum ağırlığı beş (5) kg olmalıdır.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23894"
  },
  {
    "question": "Uçağa giderken kendi tekerlekli sandalyemi kullanabilir miyim?",
    "answer": "Y&#252;r&#252;me engelli yolcularımız i&#231;in u&#231;ağa giderken, u&#231;uş sırasında ve u&#231;aktan d&#246;nerken kullanabilecekleri tekerlekli sandalyelerimiz mevcut. Bu y&#252;zden kendi tekerlekli sandalyenize gerek kalmaz ve sandalyeniz &#252;cretsiz olarak u&#231;ak altı bagaj b&#246;l&#252;m&#252;nde taşınır. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" href=\"/tr-tr/bilgi-edin/hasta-ve-engelli-yolcular/index3.html\"   >hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23890"
  },
  {
    "question": "Yürüme engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "T&#252;m &#246;zel ihtiya&#231;ları i&#231;in yardıma gereksinimi olan y&#252;r&#252;me engelli yolcularımız ancak bir refakat&#231;i eşliğinde seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23889"
  },
  {
    "question": "Uçuş sırasında bebeğim kuvözüyle seyahat edebilir mi? ",
    "answer": "Ne yazık ki u&#231;uşlarımızda bebeğinizi kuv&#246;zde taşıyamıyoruz. Detaylı bilgi i&#231;in&#160;<a title=\"Infants and Children - Article1 - TR\" href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/\"   >bebek ve &#231;ocuk yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23897"
  },
  {
    "question": "Hasta yolcu sedyede yolculuk yapabilir mi?",
    "answer": "U&#231;uş sırasında sedyeyle yolculuk yapabilirsiniz. B&#246;yle durumlarda yolcularımızdan en y&#252;ksek Economy Class tek y&#246;n vergiler hari&#231; &#252;cretinin 7 katı ve tek bir biletin vergileri talep edilir. Ayrıca sedyeyle seyahat edecek hastalarımız ancak refakat&#231;iyle yolculuk yapabilirler ve refakat&#231;i bileti ayrı olarak kesilir. Sedyeyle seyahat edebilmek i&#231;in sizin ve refakat&#231;inizin 10 g&#252;n &#246;nceden hazırlanmanız ve durumunuzun u&#231;uşa uygun olduğunun belirtildiği T&#252;rk&#231;e ya da İngilizce doktor raporunu sunmanız beklenir. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23893"
  },
  {
    "question": "Hem görme hem de duyma engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "Ne yazık ki hayır. Hem g&#246;rme hem de duyma engelli yolcularımız ancak bir refakat&#231;i eşliğinde seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23885"
  },
  {
    "question": "Talep edildiği takdirde ihtiyacı olan yolculara herhangi özel bir hizmet veriliyor mu?",
    "answer": "Yaşlı, &#231;ok gen&#231;, dil problemi ya da fobisi olan, g&#246;rme ve işitme engelli gibi &#246;zel ihtiya&#231;ları olan yolcularımız, check-in işlemlerinin ardından u&#231;ağa alınma ve u&#231;aktan havalimanına varış s&#252;resi i&#231;inde &#246;zel refakat hizmeti alabilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23886"
  },
  {
    "question": "MS hastaları uçakla seyahat edebilir mi?",
    "answer": "Atakların ani gelişebilme ihtimali ve u&#231;uşun başlı başına bir stres kaynağı olması sebebiyle MS hastaları sadece u&#231;uşa uygun olduğu durumunun belirtildiği doktor raporuyla seyahat edebilir. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23892"
  },
  {
    "question": "Görme engelli yolcular rehber köpeklerini kabin içine alabilirler mi?",
    "answer": "G&#246;rme engelli yolcularımız aşıları tamamlanmış, sağlık belgesi ve kimliği bulunan rehber k&#246;peklerini kabine &#252;cretsiz olarak alabilirler. Rehber k&#246;pekler i&#231;in rezervasyonun u&#231;uş saatinden 48 saat &#246;ncesine kadar yapılması ve kafessiz olarak kabinde bulunacak k&#246;peklerin temiz, &#246;zel tasması takılı ve ağızlıkla seyahat etmesi gerektiğini belirtelim. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23882"
  },
  {
    "question": "Görme engelli yolcular yanlarında bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "G&#246;rme engelli yolcularımız tek başlarına ya da rehber k&#246;pekleriyle birlikte seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23883"
  },
  {
    "question": "Zihinsel engelli yolcular için sağlık raporu gerekli mi ve bu yolcular bir refakatçi olmadan seyahat edebilirler mi?",
    "answer": "Zihinsel engelli yolcularımız i&#231;in sağlık raporuna gerek duyulmuyor. Ancak, bu yolcularımızın refakat&#231;ileriyle birlikte seyahat etmeleri gerekir. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23887"
  },
  {
    "question": "Engelli, yaşlı ya da hasta yolcular için kabin içinde özel bir refakat hizmeti veriyor musunuz?",
    "answer": "Kabin i&#231;inde &#246;zel ihtiya&#231;ları olan yolcularımıza ne yazık ki refakat hizmeti veremiyoruz. Ancak kabin ekibimiz, engelli, yaşlı ve hasta yolcularımız i&#231;in m&#252;mk&#252;n olan en iyi hizmeti sunmaya &#231;alışır. Kişisel ihtiya&#231;larını tek başına gideremeyen yaşlı, hasta ve engelli yolcularımız ancak bir refakat&#231;i eşliğinde seyahat edebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23888"
  },
  {
    "question": "Uçuşlarınızda engelliler için herhangi bir indirim var mı? Varsa şartlarını öğrenebilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">%40 ve &#252;zeri oranda engelli olan yolcularımıza, promosyon biletler hari&#231; t&#252;m i&#231; hat biletlerde %20 indirim ve t&#252;m dış hat biletlerde %25 indirim sağlıyoruz. İndirimler ekonomi kabinde sağlanacaktır. Yolcularımızın bu indirimden faydalanmaları i&#231;in %40 ve &#252;zeri oranda engelli olduğunu g&#246;steren bir belgeyi (TC Aile ve Sosyal Hizmetler Bakanlığı&#39;ndan alınmış engelli kimlik kartı, tam teşekk&#252;ll&#252; devlet hastanelerinden alınan %40 ve &#252;zeri engelli sağlık kurulu raporu veya \\\"Engelli\\\" ibaresi bulunan n&#252;fus c&#252;zdanı) Miles&Smiles hesabına eklemesi gerekmektedir.</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Almanya'da engelli indirimi, engelli kimliğinde G, AG, H, BL harflerinden birisi varsa uygulanabilir. Engelli yolcunun yanında refakat&#231;i g&#246;t&#252;rebileceğine dair kimliğinde bilgi (B harfi) olması durumunda beraber u&#231;tuğu bir kişi i&#231;in aynı oranda refakat&#231;i indirimi uygulanabilir.&#160;</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Ayrıca \\\"Refakat&#231;i ile seyahat etmelidir\\\" ibaresi bulunan doktor raporunun ibraz edilmesi halinde, engelli yolcu ile aynı seferde seyahat edecek bir refakat&#231;iye de promosyon biletler hari&#231; t&#252;m i&#231; hat biletlerde %20 indirim sağlanır.&#160;</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">&#214;zel hizmete (tekerlekli sandalye, sedye vb.) ihtiya&#231; duyan hareket kabiliyeti kısıtlı yolcularımıza, u&#231;uş saatinden en az 48 saat &#246;nce rezervasyon yapmaları şartıyla, T&#252;rk Hava Yolları'nın g&#246;revlendirdiği sağlık veya yer hizmetleri kuruluşlarının uzman personeli tarafından terminalden u&#231;ağa, u&#231;aktan terminale transfer hizmeti &#252;cretsiz olarak sunulur. En az 48 saat &#246;nce iletilmeyen talepler, u&#231;uş saatinde yaşanabilecek yoğun talep sebebiyle imkanlar dahilinde değerlendirilecek olup, bu talepler i&#231;in hizmetin sağlanması garanti edilemez. Detaylı bilgi i&#231;in &#231;ağrı merkezimizi arayabilir ve 7/24 destek alabilirsiniz.&#160;</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Engelli indirimi, T&#252;rkiye &#231;ıkış ve varışta uygulanmaktadır. T&#252;rk Hava Yolları'nın taşıyıcı havayolu olmadığı codeshare (ortak) u&#231;uşlarda uygulanmaz.</p>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Mobil uygulamamızın g&#252;ncel versiyonunu kullanarak i&#231; hat seferlerimizde engelli yolcu indiriminden yararlanabilirsiniz. Bu indirimden yararlanmak i&#231;in Miles&Smiles &#252;yesi olmanız ve engel bilgilerinizi &#252;ye hesabınıza eksiksiz olarak girmiş olmanız gerekir. Engelli yolcu indirimine ilişkin detaylı bilgileri <a href=\\\"https://www.turkishairlines.com/tr-tr/kampanyalar/ogrenci-ve-engelli-yolcularimiz-indirimli-ucuyor/index.html\\\" target=\\\"_blank\\\">burada</a> bulabilirsiniz.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "144983"
  },
  {
    "question": "Ateşimin yüksek olması seyahat etmeme engel olur mu?",
    "answer": "Seyahat etmenize engel olabilecek bir hastalığınız olduğundan ş&#252;pheleniyorsanız, u&#231;uş &#246;ncesinde bir doktora danışmanızı tavsiye ediyoruz. Hastalığınız nedeniyle u&#231;uş sırasında &#246;zel talepleriniz olacaksa, bu talepleri u&#231;uşa en ge&#231; 24 saat kala T&#252;rk&#231;e ya da İngilizce olarak hazırlanmış bir doktor raporuyla iletmeniz yeterlidir. Doktor raporunuzda hastalığınızın u&#231;uş yapmanıza engel olmayacağı bilgisinin yer alması gerektiğini hatırlatalım. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23906"
  },
  {
    "question": "Astım hastalığım uçak seyahati yapmama engel olur mu?",
    "answer": "Astım hastasıysanız \\\"u&#231;akla seyahatinde sakınca yoktur\\\" a&#231;ıklamasının yer aldığı T&#252;rk&#231;e ya da İngilizce doktor raporu ile seyahat edebilirsiniz. U&#231;ak kapısı kapanmadan &#246;nce astım krizi ge&#231;irmeniz durumunda u&#231;aktan indirileceğinizi hatırlatalım. Detaylı bilgi i&#231;in <a title=\\\"Special Assistance for Passengers - Article1 - TR\\\" xlink:href=\\\"tcm:92-17648\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:title=\\\"Special Assistance for Passengers - Article1 - TR\\\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23900"
  },
  {
    "question": "Kalp hastalığım yolculuk yapmama engel olur mu?",
    "answer": "<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\"><u>Son &#252;&#231; (3) ay i&#231;erisinde ge&#231;irmiş oldukları</u> her t&#252;rl&#252; kalp, damar, g&#246;ğ&#252;s ve beyin hastalıkları veya bununla ilgili yapılan operasyonlar (by-pass, anjiyo, kalp ameliyatı, beyin ameliyatı vb.) sonucunda durumları hakkında beyanda veya &#246;zel bir istekte bulunan yolcular \\\"U&#231;ak ile seyahatinde sakınca yoktur.\\\" ibaresinin yer aldığı doktor raporu ile u&#231;uşa kabul edilir.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23902"
  },
  {
    "question": "Hastalığım yolculuk yapmama engel olur mu?",
    "answer": "Yolculuk yapmanıza engel olabilecek bir hastalığınız olduğundan ş&#252;pheleniyorsanız, u&#231;uş &#246;ncesinde bir doktora danışmanızı tavsiye ederiz. Hastalığınız nedeniyle u&#231;uş sırasında &#246;zel talepleriniz olacaksa, taleplerinizi u&#231;uş &#246;ncesinde beraberinizde getirdiğiniz T&#252;rk&#231;e ya da İngilizce olarak hazırlanmış bir doktor raporuyla bize iletebilirsiniz. İlettiğiniz doktor raporunda hastalığınızın u&#231;uş yapmanıza engel olmayacağı bilgisinin yer aldığına dikkat edin. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23881"
  },
  {
    "question": "Astım hastasıyım, uçuşta spreyimi yanımda taşıyabilir miyim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">U&#231;uş s&#252;resince kullanmanız gereken astım spreyi gibi ila&#231; ve tıbbi malzemeleri yanınızda taşıyabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Hasta ve Engelli Yolcular\" xlink:href=\"tcm:92-17648\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">Hasta ve Engelli Yolcular</a> sayfamızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23901"
  },
  {
    "question": "Diyabet hastasıyım, kabin içinde hangi araçları kullanabilirim?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">&#214;ncelikle u&#231;uş sırasında kullanmanız gereken ila&#231; veya tıbbi malzemelerinizi rezervasyon sırasında belirterek, bunu onaylayan doktor raporuyla seyahat etmeniz gerektiğini belirtelim. Diyabet hastasıysanız aşağıdaki ekipmanları kabin i&#231;inde taşıyabilirsiniz:</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Flakon veya flakon bulunan kutular</li>\n<li>Jet enjekt&#246;rler</li>\n<li>Kalemler</li>\n<li>Tek kullanımlık şırıngalar</li>\n<li>Paketi bozulmamış ins&#252;lin i&#231;in gerekli şırıngalar, lanset, kan &#246;l&#231;&#252;m stripleri, kan &#246;l&#231;&#252;m test stripleri, ins&#252;lin pompası, ins&#252;lin pompası &#252;r&#252;nleri</li>\n<li>Her &#231;eşit ins&#252;lin</li>\n</ul>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23898"
  },
  {
    "question": "Gerekli durumlarda havalimanında sağlık yardımı alabilmem mümkün mü?",
    "answer": "İhtiya&#231; halinde havalimanlarında acil durumlar i&#231;in destek veren sağlık personellerinden yardım alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23903"
  },
  {
    "question": "İhtiyacım olduğunda uçak içinde sağlık yardımı alabilir miyim?",
    "answer": "İlkyardım m&#252;dahalesi gerektiren durumlarda bu konuda eğitimli kabin memurları ve ilkyardım ekipmanları ile sağlık yardımı alabilirsiniz. Ancak rahatsızlığınız ilkyardım eğitimiyle giderilemeyecek durumdaysa u&#231;ak i&#231;inde m&#252;dahale edilemez ve en yakın uygun olan havalimanına acil iniş yapılır. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hopic:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23905"
  },
  {
    "question": "Duyma engelli yolcular kabin içinde eğlence olanaklarından yararlanabilir mi?",
    "answer": "Duyma engelli yolcularımız u&#231;ak i&#231;i eğlence sistemimizde yer alan altyazılı filmler eşliğinde keyifli bir seyahat ger&#231;ekleştirebilirler. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23914"
  },
  {
    "question": "Havalimanında medikal yardım hizmeti alabilir miyim?",
    "answer": "T&#252;rk Hava Yolları olarak b&#246;yle bir hizmetimiz bulunmuyor. Ancak havalimanının verdiği medikal hizmetlerden yararlanabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23908"
  },
  {
    "question": "Uzun süreli uçuşlarda jet lag etkilerini ortadan kaldırabilmek için ne yapmalıyım?",
    "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">&#214;zellikle okyanusaşırı u&#231;uşlar sonrasında v&#252;cudunuzun zaman dilimi farkına alışmasının birka&#231; g&#252;n alabileceğini hatırlatalım. Bu alışma d&#246;neminindeki sorunları azaltmak i&#231;in;&#160;</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Zinde olun: Sık sık zaman farkı olan uzun s&#252;reli u&#231;uşlar ger&#231;ekleştiriyorsanız zinde olmanızda fayda var. D&#252;zenli egzersizlerle v&#252;cut enerjinizi y&#252;ksek tutarak jet lag etkilerini azaltabilirsiniz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Alkol ve kahve kullanmayın: Alkol ve kafein v&#252;cutta su eksilmesine ve uyku problemlerine neden olur. Jet lag etkilerini azaltmak i&#231;in u&#231;uşunuzdan bir g&#252;n &#246;nce alkol ve kahve kullanmayın.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Su i&#231;in: Sıvı kaybını &#246;nlemek adına m&#252;mk&#252;n olduğu kadar fazla su i&#231;meye &#231;alışın.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">G&#252;nl&#252;k rutininizi yavaş bir şekilde değiştirin: Yemek ve uyku saatlerinizi gittiğiniz yerin zamanına g&#246;re yavaş bir şekilde değiştirin. Yemek ve uyku saatlerinizi her g&#252;n 2 saat değiştirerek yeni zamana daha kolay uyum sağlayabilirsiniz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Uyku haplarını dikkatli kullanın: Hangi uyku haplarını kullanabileceğiniz konusunda doktorunuza danışmanızı tavsiye ediyoruz.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Uyku haplarını &#231;ok zor durumda kalmadık&#231;a kullanmamaya dikkat edin.</p>",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23907"
  },
  {
    "question": "Yolculuk sırasında ilaç kullanmam gerektiğinde ne yapmalıyım?",
    "answer": "Kabin i&#231;inde ila&#231; kullanmak i&#231;in u&#231;uş sırasında ila&#231; kullanmanızın gerektiğini belirten T&#252;rk&#231;e ya da İngilizce doktor raporunu ilgili personele ibraz etmeniz yeterlidir. Daha sonra u&#231;uş sırasında kendi paketinde taşıdığınız ilacı kullanabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Special Assistance for Passengers - Article1 - TR\" xlink:href=\"tcm:92-17648\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Special Assistance for Passengers - Article1 - TR\">hasta ve engelli yolcular</a> sayfamızı ziyaret edebilirsiniz.",
    "lastModifiedDateTime": "11-05-2025",
    "id": "23899"
  }
],
  "Martyrs relatives and Veterans": [
    {
      "question": "Gazi, şehit ve gazi yakınlarına özel indirimden nasıl yararlanabilirsiniz?",
      "answer": "<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">T&#252;rkiye Cumhuriyeti vatandaşı gaziler ile şehit ve gazi yakınlarının;</p>\\n<ul xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\n<li>TC kimlik numaraları ile Miles&Smiles &#252;yesi olmaları,</li>\\n<li>\\\"Kişisel Bilgilerim\\\" sayfasındaki indirim tipleri alanından yolcu tipini bir kereliğine doğrulamaları gerekmektedir.</li>\\n</ul>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Bilet alırken yolcu tipi \\\"Gazi/Gazi veya Şehit Yakını\\\" olarak se&#231;ilmelidir.</p>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377313"
    },
    {
      "question": "Şehit ve gazi yakınları kapsamına kimler giriyor?",
      "answer": "Anne, baba, eş ve 25 yaş altı bekar &#231;ocuk olmak &#252;zere birinci derece yakınlar bu indirimden yararlanabilir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377314"
    },
    {
      "question": "Miles&Smiles üyesi olmadan indirimden yararlanabilir misiniz?",
      "answer": "İndirimden yararlanabilmeniz i&#231;in Miles&Smiles &#252;yesi olmanız gerekmektedir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377315"
    },
    {
      "question": "Gazi, şehit ve gazi yakınlarına özel indirim hangi uçuşlarda geçerlidir?",
      "answer": "T&#252;rkiye Cumhuriyeti vatandaşı gaziler ile şehit ve gazi yakınlarına, yurt i&#231;i u&#231;uşlar ve T&#252;rkiye &#231;ıkışlı ve/veya varışlı yurt dışı u&#231;uşlarda %50 indirim uygulanır. İndirim; yurt dışında yapılan transit u&#231;uşlar (dıştan dışa transit u&#231;uşlar) hari&#231;, i&#231; hat aktarmalı u&#231;uşlarda da ge&#231;erlidir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377316"
    },
    {
      "question": "Kuzey Kıbrıs Türk Cumhuriyeti vatandaşları için gazi, şehit ve gazi yakınlarına özel indirim geçerli mi?",
      "answer": "20 Temmuz 2024 tarihinden itibaren, Kuzey Kıbrıs T&#252;rk Cumhuriyeti vatandaşı olan gazi, şehit ve gazi yakınları i&#231;in Economy Class (F/U/W/P/V &#252;cret sınıfları hari&#231;) net &#252;cretleri &#252;zerinden indirim uyguluyoruz. İndirim, Kuzey Kıbrıs T&#252;rk Cumhuriyeti varış ve &#231;ıkışlı T&#252;rkiye u&#231;uşlarında ge&#231;erlidir. Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/ucret-kosullari/\" target=\"_blank\"   >&#252;cret koşulları</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377317"
    },
    {
      "question": "İndirim, nereden alınan biletlerde geçerlidir?",
      "answer": "İndirim yalnızca online kanallarda; internet sitesi ve mobil uygulama &#252;zerinden alınan biletlerde ge&#231;erlidir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377318"
    },
    {
      "question": "Hangi bilet kabinlerinde indirim geçerlidir?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">İndirim yalnızca Economy Class kabininde ge&#231;erlidir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">*Detaylı bilgilere <a href=\"/tr-tr/gazilere-sehit-ve-gazi-yakinlarina-buyuk-kolaylik/\" target=\"_blank\"  >gazilere, şehit ve gazi yakınlarına b&#252;y&#252;k kolaylık</a> sayfamızdan ulaşabilirsiniz.</p>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377320"
    }
  ],
  "Pregnant Passengers": [
    {
      "question": "Hamileliğimde 28 haftayı geçtim, yolculuk yapabilir miyim?",
      "answer": "Tek bebeğe hamileyseniz 28. haftanın başından 35. haftanın sonuna kadar doktorunuzdan aldığınız \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" ibaresinin bulunduğu bir raporla seyahat edebilirsiniz. 36. hafta ve sonrasında ise doktor raporu olsa bile hamile yolcularımız u&#231;akla seyahat edemiyor. Hamileliğinizde birden fazla bebek taşıyorsanız 28. haftanın başından 31. haftanın sonuna kadar doktorunuzdan aldığınız \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" ibaresi bulunan bir raporla seyahat edebilirsiniz. 32. hafta ve sonrasında ise doktor raporu olsa bile hamile yolcularımız u&#231;akla seyahat edemiyor. Doktor raporunuzun tarihinin 7 g&#252;n&#252; ge&#231;memesi gerektiğini hatırlatırız. Rapor, doktora veya sağlık kuruluşuna ait antetli k&#226;ğıt &#252;zerine yazılmış olmalıdır. İngilizce ya da T&#252;rk&#231;e d&#252;zenlenen raporunuzda, raporu d&#252;zenleyen doktorun adı soyadı, diploma numarası ve imzasının mutlaka bulunması gerekiyor. Detaylı bilgi i&#231;in <a title=\\\"Traveling During Pregnancy - Article1 - TR\\\" href=\\\"/tr-tr/bilgi-edin/hamile-yolcular/\\\"   >hamile yolcular</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "23833"
    },
    {
      "question": "Hamileyim, sağlık raporu olmadan uçabilir miyim?",
      "answer": "Hamilelik s&#252;reniz hen&#252;z 28 haftayı (7 ay) ge&#231;mediyse seyahat i&#231;in herhangi bir rapora ihtiyacınız yok. Ancak hamileliğinizin 28. haftanın başından 35. haftanın sonuna kadar olduğu d&#246;nemdeyseniz ancak doktorunuzdan aldığınız \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" ibaresinin bulunduğu bir raporla seyahat edebileceğinizi belirtelim. Detaylı bilgi i&#231;in <a title=\\\"Traveling During Pregnancy - Article1 - TR\\\" href=\\\"/tr-tr/bilgi-edin/hamile-yolcular/\\\"   >hamile yolcular</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "23832"
    }
  ],
  "Special Assistance": [
    // Note: These are the same as "Disabled passengers" - we'll skip duplicates
  ],
  "Students": [
    {
      "question": "Türkiye'de öğrenim gören ve TC vatandaşı olan bir öğrenci, indirimden nasıl yararlanabilir?",
      "answer": "&#214;ğrenci indiriminden yararlanabilmeniz i&#231;in &#246;ncelikle Miles&Smiles &#252;yesi olmanız gerekir. &#220;yelik hesabınızda \\\"Kişisel Bilgilerim\\\" alanına girerek \\\"İndirim &#199;eşitleri\\\" alanını \\\"&#214;ğrenci\\\" olarak işaretledikten sonra \\\"Kaydet\\\" butonuna tıklayarak bildiriminizi yapabilirsiniz. Hesabınıza giriş yapıp bilet alırken \\\"&#214;ğrenci\\\" yolcu tipini se&#231;meniz gerektiğini unutmayın.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377333"
    },
    {
      "question": "Öğrenci bildirimi işlemini satış ofislerinden yapabilir misiniz?",
      "answer": "Evet, &#246;ğrenci bildirimini online kanallarımızdan yapabildiğiniz gibi dilerseniz, satış ofislerimizden de yapabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377334"
    },
    {
      "question": "Türkiye Cumhuriyeti vatandaşı olmayan (yabancı uyruklu) bir öğrenci, öğrenci bildirimini nasıl yapabilir?",
      "answer": "Miles&Smiles &#252;yelik hesabınıza girerek \\\"Kişisel Bilgilerim\\\" sayfasından \\\"İndirimli Yolcu Tipi Ekle\\\" kısmındaki \\\"&#214;ğrenci (Uluslararası)\\\" alanında yer alan \\\"Formu doldur\\\" butonuna tıklayıp işlemleri ger&#231;ekleştirebilirsiniz. Detay bilgilere <a href=\\\"/tr-tr/ogrenci/\\\" target=\\\"_blank\\\"   >&#214;ğrenci indirimi</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377335"
    },
    {
      "question": "Öğrenci bildiriminiz onaylandıktan sonra indirimli biletinizi nereden alabilirsiniz?",
      "answer": "İnternet sitesi ve mobil uygulaması &#252;zerinden Miles&Smiles &#252;yelik girişinizi yaptıktan sonra, bilet alım sırasında yolcu tipinizi \\\"&#246;ğrenci\\\" olarak se&#231;erek biletinizi indirimli alabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377336"
    },
    {
      "question": "Öğrenci indiriminin avantajları neler?",
      "answer": "<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Yurt i&#231;i u&#231;uşlarda %20, yurt dışı transit u&#231;uşlarda %15,</li>\n<li>T&#252;rkiye veya Kuzey Kıbrıs T&#252;rk Cumhuriyeti &#231;ıkışlı yurt dışı varışlı ya da yurt dışı &#231;ıkışlı T&#252;rkiye veya Kuzey Kıbrıs T&#252;rk Cumhuriyeti varışlı u&#231;uşlarda %10,</li>\n<li>T&#252;rkiye ile Ercan Uluslararası Havalimanı arasındaki u&#231;uşlarda ise %20 indirimli fiyatlardan yararlanabilirsiniz.</li>\n</ul>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377337"
    },
    {
      "question": "Onaylanan öğrenci bildirimi ne kadar süre geçerli?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Onaylanan &#246;ğrencilik tanımı, 1 yıl boyunca ge&#231;erliliğini s&#252;rd&#252;rmektedir. &#214;ğrencilik tanımının 1 yılın sonunda tekrar talep edilmesi halinde yeniden başvuru yapmanız gerektiğini unutmayın.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">*Detaylı bilgilere <a href=\"/tr-tr/ogrenci/\" target=\"_blank\"  >&#214;ğrenci indirimi</a> sayfamızdan ulaşabilirsiniz.</p>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377338"
    }
  ],
  "Cabin baggage": [
    {
      "question": "Kabin bagajımın en yüksek boyut ve ağırlığı ne kadar olmalı?",
      "answer": "Bagaj boyutları ve ağırlığı hakkında <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >kabin bagajı</a> sayfamızdan bilgi alabilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22609"
    },
    {
      "question": "Kabin bagajı taşıma hakkım ne kadardır?",
      "answer": "Kabin bagajı, yolcunun kendi denetim ve sorumluluğu altında, yolcu kabininde &#252;cretsiz olarak taşınan bagajdır. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/kabin-bagaji/\" title=\"Help hand baggage article - TR\" target=\"_blank\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "107645"
    },
    {
      "question": "Kabindeki bagajlar da sorumluluğunuz altında mı?",
      "answer": "Kabine alınan bagajların sorumluluğu seyahat eden kişiye aittir. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22617"
    },
    {
      "question": "Katlanabilir tekerlekli sandalyemi kabin bagajı olarak alabilir miyim?",
      "answer": "Tekerlekli sandalyenizi seferinizi ger&#231;ekleştirdiğiniz u&#231;ak modeline bağlı olmak &#252;zere kabin bagajı olarak alabileceğiniz gibi kabin i&#231;i tekerlekli sandalyeleri de kullanabilirsiniz. Bu uygulamaların bulunmadığı u&#231;aklarımızda tekerlekli sandalyeler u&#231;ak altı bagaj b&#246;l&#252;m&#252;nde u&#231;ağın taşınmaktadır. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22616"
    },
    {
      "question": "Kabinde ruhsatlı silahımı taşıyabilir miyim?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Yurt i&#231;i u&#231;uşlarımızda silah taşımak &#252;cretlidir. Silah taşıma &#252;cretinden muaf olan yolcular ise; Rical listesinde yer alan VIP yolcular, bu yolcularla seyahat eden kadrolu korumalar, kamuya ait kimlik kartına tanımlı silah bilgisi olanlar, Kamu G&#246;revlisi Taşıma Ruhsatı veya Emekli Kamu Görevlisi Taşıma Ruhsatı'na sahip olanlar, kimlik ibraz eden çalışan ya da emekli Emniyet ve TSK mensupları ile k&#246;y g&#252;venlik korucularıdır.</p>",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22620"
    },
    {
      "question": "Kabin bagajımda ikinci bir laptop taşıyabilir miyim?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Aynı &#231;anta i&#231;inde olmak koşuluyla ikinci bir laptop ya da tablet bilgisayarı kabin bagajınızda taşıyabilirsiniz. Koltuğun altına sığabilmesi i&#231;in &#231;antanızı aşırı doldurmamaya dikkat etmenizi &#246;neririz. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"  >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.&#160;</p>",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22615"
    },
    {
      "question": "Bagajımda kırılabilir eşyalar taşıyabilir miyim?",
      "answer": "U&#231;ağın bagaj altı kompartımanına vereceğiniz bagajınızın i&#231;eriğini hazırlarken i&#231;erisinde kırılabilir ve bozulabilir maddeler, elektronik cihazlar, para, m&#252;cevher, değerli maden, g&#252;m&#252;ş eşya, senet ve diğer ticari değerli kağıtlar, pasaport ve diğer kimlik belgelerinin veya &#246;rneklerinin bulunmamasına &#246;zen g&#246;stermelisiniz. Bu tarz eşyaları &#252;zerinizde veya kabin bagajınızda paketlenmiş olarak taşıyabilirsiniz. U&#231;ağın yolcu kapasitesi dolmuşsa kabin bagajında yer olmayabilir. B&#246;yle durumlarda el bagajınız u&#231;ağın bagaj altı kompartımanına alınabilir. Bu ihtimale karşı, yukarıda tarif edilen eşyalarınızı &#231;antanızdan hızlıca alabileceğiniz şekilde muhafaza etmenizi tavsiye ederiz. Detaylı bilgi i&#231;in <a href=\"https://www.turkishairlines.com/tr-int/yasal-uyari/yolcu-ve-bagaj-tasima-genel-sartlari/\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">Yolcu ve Bagaj Taşıma Genel Şartları</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "173022"
    },
    {
      "question": "Kabin içine birden fazla çanta alabilir miyim?",
      "answer": "Economy Class u&#231;uşlarınızda kabin i&#231;ine boyutu en fazla 23x40x55 cm, ağırlığı en fazla 8 kg olan tek par&#231;a bagaj alabilirsiniz. Business Class'ta yolculuk yapıyorsanız her biri en fazla 23x40x55 cm boyutlarında ve 8 kg ağırlığında iki par&#231;a bagajı, kabin bagajı olarak taşıyabilirsiniz. Kabin bagajı taşıma hakkınızı aştığınız durumlarda ekstra&#160;bagaj &#252;creti talep edileceğini belirtelim. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22619"
    },
    {
      "question": "Kabin bagajımda gelinliğimi taşıyabilir miyim?",
      "answer": "Gelinliğinizi Economy Class ve Business Class u&#231;uşlarınızda kabin bagajı olarak yanınıza alabilirsiniz. Bagajınızın en, boy ve y&#252;ksekliğinin 118 cm'yi, toplam ağırlığının 8 kg'ı ge&#231;memesi gerekiyor. Gelinliğinizi kabin bagajı olarak aldığınızda Economy Class u&#231;uşlarınızda başka bir kabin bagajı alamayacağınızı hatırlatmak isteriz. Business Class u&#231;uşlarınızda ise standartlara uygun gelinlik bagajınızla birlikte ikinci bir kabin bagajı daha alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22613"
    },
    {
      "question": "Kabine alabileceğim bagajın en yüksek boyut ve ağırlığı nedir? ",
      "answer": "Economy Class u&#231;uşlarınızda kabine alabileceğiniz tek par&#231;a bagajın maksimum boyutu 23x40x55 cm, maksimum ağırlığı 8 kg'dır. Business Class u&#231;uşlarınızda her biri maksimum 23x40x55 cm boyutlarında ve 8 kg ağırlığında iki par&#231;a bagajı, kabin bagajı olarak alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22614"
    },
    {
      "question": "Kabin bagajımın boyutları ve ağırlığının beklenen standartlara uygun olmadığı durumlarda nasıl bir işlem yapılır?",
      "answer": "Kabin bagajınızın boyut ve ağırlık olarak uygun olmadığı durumlarda bagajınız, taşıma hakkınız dahilinde kargo kompartımanında taşınır. Bagaj hakkınızı kullandıysanız \\\"fazla bagaj\\\" tarifesine uygun olarak ekstra &#252;cret &#246;demeniz gerekebilir. Bagajınızın kargo kompartımanına alınma ihtimaline karşı, i&#231;erisinde bulunan kırılabilir ve bozulabilir maddeleri, elektronik cihazları, para, m&#252;cevher, değerli madenleri, g&#252;m&#252;ş eşya, senet ve diğer ticari değerli kağıtları, pasaport ve diğer kimlik belgelerini veya &#246;rneklerini hızlıca alabileceğiniz şekilde muhafaza etmenizi tavsiye ederiz. Detaylı bilgi i&#231;in <a href=\\\"https://www.turkishairlines.com/tr-int/yasal-uyari/yolcu-ve-bagaj-tasima-genel-sartlari/\\\" target=\\\"_blank\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Yolcu ve Bagaj Taşıma Genel Şartları</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22618"
    }
  ],
  "Free baggage": [
    {
      "question": "Bebek yolcuların ücretsiz bagaj hakkı ne kadardır?",
      "answer": "Bebek yolcularımızın her u&#231;uşta 10 kg, par&#231;a bagaj uygulaması kapsamındaki u&#231;uşlarda 23 kg bir par&#231;a bagaj hakkı vardır. Ayrıca t&#252;m u&#231;uşlarda boyutları 115 cm'yi ge&#231;meyen bir puset taşıyabilirler. &#199;ocuk yolcularımızın bagaj hakkı yetişkin yolcularımızla aynıdır. Detaylı bilgi almak i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/bebek-yolcu/\" title=\"Bebek ve &#199;ocuk Yolcu - Banner - Large Banner with Text\" target=\"_blank\"   >Bebeğinizle seyahat</a> sayfamızı inceleyebilirsiniz\n<p xmlns=\"http://www.w3.org/1999/xhtml\">*Dış hatlarda ecofly ve ecojet paketlerde ge&#231;erli değildir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">**Dış ve İ&#231; Hat &#252;cret koşullarına g&#246;re serbest bagaj taşıma hakkı değişkenlik g&#246;sterebilmektedir. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/ucret-kosullari/\" title=\"Fare Rules - Article - TR\"  >&#252;cret koşulları</a> sayfamızı ziyaret edebilirsiniz.</p>",
      "lastModifiedDateTime": "16-04-2025",
      "id": "105971"
    },
    {
      "question": "Kilo sınırını aşan bagajımı nasıl gönderebilirim?",
      "answer": "Hava kargo taşımacılığı ile ilgili şartları t&#252;m detaylarıyla &#246;ğrenmek i&#231;in <a href=\"https://www.turkishcargo.com.tr/tr\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">turkishcargo.com</a> web sitesini ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "358231"
    },
    {
      "question": "Bagaja alınmayan eşyalarımı nasıl taşıyabilirim?",
      "answer": "Yanınıza almak istediğiniz ancak bagaj alanında taşınması m&#252;mk&#252;n olmayan eşyalarınızla ilgili detaylı bilgiye <a href=\"https://www.turkishcargo.com.tr/tr\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">turkishcargo.com</a> web sitesinden ulaşabilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "358232"
    },
    {
      "question": "Anlaşmalı firmalarla yapacağım ortak uçuşlarda bagaj limitim değişir mi?",
      "answer": "Bagaj kuralları, u&#231;uşunuzu ger&#231;ekleştirdiğiniz anlaşmalı havayolu firmasına g&#246;re değişiklik g&#246;sterebilir. Daha fazla bilgi i&#231;in&#160;<a xlink:href=\"tcm:92-68645\" title=\"Codeshare Flights - Article - TR\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Codeshare Flights - Article - TR\">codeshare (ortak) u&#231;uş</a>&#160;sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "68788"
    },
    {
      "question": "Aktarma yaptığım sırada bagajımı alabilmem mümkün mü?",
      "answer": "Ne yazık ki aktarma sırasında bagajınıza ulaşabilmeniz m&#252;mk&#252;n değil. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> ya da <a title=\"Transfer-Transit Passengers - Article1 - TR\" href=\"/tr-tr/bilgi-edin/transfer-ve-transit-yolcular/\"   >transfer ve transit yolcu</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22610"
    },
    {
      "question": "Çocukların bagaj hakkı yetişkinlerle aynı mı?",
      "answer": "2-12 yaş aralığındaki &#231;ocuk yolcularımızın bagaj hakları yetişkin yolcularımızla aynıdır. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22749"
    },
    {
      "question": "Bagajımı sigortalayabiliyor musunuz?",
      "answer": "U&#231;uşlarımızda bagajınız sigortalanmasa da u&#231;ak altı bagaj b&#246;l&#252;m&#252;ne kabul edilen t&#252;m bagajların sorumluluğumuz altında olduğundan emin olabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22748"
    },
    {
      "question": "Havalimanında bagaj taşıma yardımı servisiniz var mı?",
      "answer": "T&#252;rk Hava Yolları olarak b&#246;yle bir hizmet sunamıyoruz. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22612"
    },
    {
      "question": "Birden fazla havayolu firmasıyla uçtuğumda bagaj hakkımı nasıl öğrenebilirim?",
      "answer": "Birden fazla havayolu firmasıyla seyahatinizi ger&#231;ekleştirdiğinizde en &#246;nemli taşıyıcının (MSC) bagaj kuralları ge&#231;erlidir. En &#246;nemli taşıyıcı (MSC), seyahatteki en &#246;nemli ve/veya en uzun bacağı u&#231;an havayolu firmasına g&#246;re IATA (Uluslararası Hava Taşımacılığı Birliği) kuralları gereğince belirlenir. Bagaj koşulları her u&#231;uşa g&#246;re farklılık g&#246;sterdiği i&#231;in en doğru detaylara, rezervasyon bilgilerinizden ve bilet &#252;zerindeki bagaj bilgilerinden ulaşabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22753"
    },
    {
      "question": "Uçuşum iptal olduğunda satın aldığım ekstra bagaj hakkına ne oluyor?",
      "answer": "U&#231;uşunuz iptal olduysa ve başka bir seferle varış yerine ulaştırılamadıysanız satın aldığınız ekstra&#160;bagaj hakkının iadesini alabilirsiniz. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/ekstra-bagaj/kurallar-ve-kosullar/\" title=\"Excess Baggage Terms And Conditions - Paragraph Article H1\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22608"
    },
    {
      "question": "En önemli taşıyıcı (MSC) nedir?",
      "answer": "Birden fazla havayolu firmasının ger&#231;ekleştirdiği seyahatlerde en &#246;nemli ya da en uzun bacağı u&#231;an havayolu firması en &#246;nemli taşıycı (MSC) olarak kabul edilir. En &#246;nemli taşıyıcı, IATA (Uluslararası Hava Taşımacılığı Birliği) kuralları gereğince belirlenir. Bu seyahatlerde en &#246;nemli taşıyıcının bagaj kuralları ge&#231;erlidir.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22750"
    },
    {
      "question": "Bebek yolcuların bagaj hakkı ne kadardır?",
      "answer": "Bebek yolcularımız 10 kg bagaj hakkıyla seyahat edebilir. Dış hat seferlerinde 10 kg bagaj hakkına bir adet katlanabilir puset eklenir. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22751"
    },
    {
      "question": "Bagajımda maddi değeri yüksek eşyalar olduğunda ne yapmalıyım?",
      "answer": "U&#231;ağın kargo kompartımanına vereceğiniz bagajınızın i&#231;eriğini hazırlarken i&#231;erisinde kırılabilir ve bozulabilir maddeler, elektronik cihazlar, para, m&#252;cevher, değerli maden, g&#252;m&#252;ş eşya, senet ve diğer ticari değerli kağıtlar, pasaport ve diğer kimlik belgelerinin veya &#246;rneklerinin bulunmamasına &#246;zen g&#246;stermelisiniz. Bu tarz eşyaları &#252;zerinizde veya kabin bagajınızda paketlenmiş olarak taşıyabilirsiniz. Kabin bagajında yer kalmadığı durumlarda, el bagajınız u&#231;ağın kargo kompartımanına alınabilir. Bu ihtimale karşı, yukarıda tarif edilen eşyalarınızı &#231;antanızdan hızlıca alabileceğiniz şekilde muhafaza etmenizi tavsiye ederiz. Detaylı bilgi i&#231;in <a href=\"https://www.turkishairlines.com/tr-int/yasal-uyari/yolcu-ve-bagaj-tasima-genel-sartlari/\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">Yolcu ve Bagaj Taşıma Genel Şartları</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22747"
    },
    {
      "question": "Aktarma sırasında bagajımın diğer uçağa geçişiyle kim ilgilenecek?",
      "answer": "Aktarma sırasında bagajınız taşıyıcı havayolu firmaları tarafından diğer u&#231;ağa ge&#231;irilir. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> ya da <a title=\"Transfer-Transit Passengers - Article1 - TR\" href=\"/tr-tr/bilgi-edin/transfer-ve-transit-yolcular/\"   >transfer ve transit yolcular</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22611"
    }
  ],
  "Restrictions": [
    {
      "question": "Kabin bagajınızda ya da kayıtlı bagajınızda powerbank taşıyabilir misiniz?",
      "answer": "Lityum-metal, lityum-iyon h&#252;creleri veya pilleri i&#231;eren ve birincil amacı başka bir cihaza (&#246;rneğin powerbank) g&#252;&#231; sağlamak olan eşyalara yalnızca kabin bagajında (el bagajı) izin verilir. Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/kisitlamalar/\" title=\"Restrictions - Article - TR\" target=\"_blank\"   >kısıtlamalar</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379645"
    },
    {
      "question": "Kabin ya da kayıtlı bagajda alkollü içecek taşıyabilir misiniz?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\"><span lang=\"TR\" xml:lang=\"TR\">Evet, kabin ya da kayıtlı bagajınızda alkoll&#252; i&#231;ecek taşıyabilirsiniz. İ&#231;eceklerin <span style=\"color: #212529; background: white;\">alkol oranı en fazla %70 olabilir. Bir yolcu yanında en fazla 5 litre i&#231;ki taşıyabilir. Havalimanı g&#252;venlik ge&#231;işlerindeki sıvı kısıtlaması nedeniyle kabin bagajında belirtilen taşıma miktarı, Duty-Free Shop'tan (g&#252;mr&#252;ks&#252;z satış mağazaları) alınan &#252;r&#252;nler i&#231;in ge&#231;erlidir.</span></span></p>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379664"
    },
    {
      "question": "Kayıtlı bagajda gıda ve sıvı ürünleri taşıma kuralları nedir?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Kayıtlı bagaj i&#231;erisinde gıda ve sıvı &#252;r&#252;nleri taşıma kuralları aşağıdaki gibidir:</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Katkı maddesi i&#231;ermeyen, sıvıyı i&#231;inde muhafaza edecek şekilde ve sızdırmaz paketler halinde birer litrelik olmak &#252;zere toplam beş litreye kadar <strong>sıvı</strong> taşınabilir.</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Gıda &#252;r&#252;nleri (zeytinyağı vb.)</li>\n<li>Salamura &#252;r&#252;nler</li>\n<li>Soslar, bal, pekmez</li>\n<li>S&#252;t, yoğurt, konserve &#252;r&#252;nler vb. her biri maksimum birer litrelik sızdırmaz paketler halinde, toplamda beş litre olmalıdır.</li>\n</ul>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379663"
    },
    {
      "question": "Kabin bagajınızda deodorant ve parfüm taşıyabilir misiniz?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">En fazla 100 ml boyutlarda olan deodorant ve parf&#252;mleri kabin bagajınızda taşıyabilirsiniz. Diğer yolcuların konforu a&#231;sından deodorant ve parf&#252;mlerinizi koku sızdırmayacak şekilde taşımanızı &#246;neririz.Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/kisitlamalar/\" title=\"Restrictions - Article\" target=\"_blank\"  >kısıtlamalar</a> sayfamızdan ulaşabilirsiniz.</p>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379662"
    },
    {
      "question": "AirWheel tipi kişisel araçlarınızı uçakta taşıyabilir misiniz?",
      "answer": "<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Hoverboard,&#160;Segway,&#160;AirWheel</li>\n<li>Solowheel,&#160;Balance&#160;Wheel</li>\n<li>Elektrikli/şarjlı bisikletler, lityum-iyon batarya ile &#231;alışan benzeri taşınabilir kişisel ara&#231;lar ile lityum bataryayla &#231;alışan binilebilir bagajların kabin bagajı ya da kayıtlı bagaj olarak u&#231;akta taşınması yasaktır. Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/kisitlamalar/\" title=\"Restrictions - Article - TR\" target=\"_blank\"  >kısıtlamalar</a>&#160;sayfamızdan ulaşabilirsiniz.</li>\n</ul>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379661"
    },
    {
      "question": "Akıllı bagajlarınızı uçakta taşıyabilir misiniz?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Akıllı bagajlar;</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Entegre lityum bataryaları sayesinde harici cihazları şarj etme</li>\n<li>GPS takip sistemi</li>\n<li>Bluetooth ve Wi-Fi bağlantısı</li>\n<li>Kendini tartma &#246;zelliği ve dijital kilit gibi teknolojik donanımları i&#231;eren valizlerdir.&#160;</li>\n</ul>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Harici cihazları şarj etmeye yarayan entegre lityum bataryalara sahip akıllı bagajlarda batarya &#231;ıkarılamıyorsa, kabin bagajı ya da kayıtlı bagaj olarak u&#231;akta taşınması yasaktır.</p>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379660"
    }
  ],
  "Turkish Airlines Holidays": [
    {
      "question": "Turkish Airlines Holidays nedir?",
      "answer": "Turkish Airlines Holidays tarafından sunulan tatil paketleri; u&#231;ak bileti, konaklama, transfer, ara&#231; kiralama, sigorta gibi tatil ihtiya&#231;larını tek &#231;atı altında topluyor. Ayrıca, t&#252;m seyahat planlarını dijital ortamda, zahmetsizce yapma ve tatilin her adımını kişiselleştirebilme fırsatı sunuyor.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377640"
    },
    {
      "question": "Turkish Airlines Holidays nasıl avantajlar sağlıyor?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Turkish Airlines Holidays tatil paketlerinin avantajlarını aşağıda g&#246;rebilirsiniz.</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>T&#252;rkiye &#231;ıkışlı seyahatlerde ve u&#231;uş tarihinden 30 g&#252;n &#246;ncesine kadar yapılan iptal taleplerinde, u&#231;uş dahil t&#252;m paket tatiliniz i&#231;in koşulsuz iptal garantisi</li>\n<li>Miles&Smiles ile u&#231;uş miline ek olarak konaklama, transfer, ara&#231; kiralamadan da 10 kata kadar ekstra mil kazanma fırsatı</li>\n<li>D&#252;nya genelinde 550.000'den fazla otel se&#231;eneğiyle geniş envanterden yararlanma fırsatı</li>\n<li>Farklı b&#246;lgelere y&#246;nelik bireysel ihtiya&#231; ve tercihlere &#246;zel tatil/tur programları ile kişiselleştirilmiş seyahat ayrıcalığı</li>\n<li>T&#252;rk Hava Yolları hizmet garantisi ile t&#252;m tatil planınızı tek bir adresten kolayca yapma imkanı</li>\n</ul>",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377641"
    },
    {
      "question": "Turkish Airlines Holidays hizmetindeki tatil paketi seçenekleri neler?",
      "answer": "Turkish Airlines Holidays hizmetinde \\\"Her şey dahil tatil paketleri\\\", \\\"U&#231;ak dahil tatil paketleri\\\" gibi her ihtiyaca y&#246;nelik se&#231;enekler var. Detaylı bilgilere <a href=\\\"https://www.turkishairlinesholidays.com/tr-tr?utm_source=google-brand&utm_medium=cpc&gad_source=1&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQnUat35tseJg72qcfb-xRRALkkNfhCiqf_-MkJlhuxcAeebFx6sFUxoCd1sQAvD_BwE\\\" target=\\\"_blank\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Turkish Airlines Holidays</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377642"
    },
    {
      "question": "Turkish Airlines Holidays tatil paketi fiyatları nedir?",
      "answer": "Fiyatlar, alacağınız pakete g&#246;re farklılık g&#246;stermektedir. Paket satın alırken yapılan &#246;demenin dışında kesinlikle herhangi bir &#246;deme yapmazsınız. Zaman zaman sunulan <a href=\"https://www.turkishairlinesholidays.com/tr-tr/erken-rezervasyon-otelleri-ve-tatil-paketleri\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">erken rezervasyon</a> ve son dakika fırsatlarıyla da &#231;ok daha uygun koşullarda, ekonomik bir tatil imkanı yakalayabilirsiniz.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377643"
    },
    {
      "question": "Hazır tatil paketi seçeneklerinde değişiklik yapabilir misiniz?",
      "answer": "Temelde u&#231;ak bileti ve otel kombinasyonundan oluşan dinamik paketlere farklı kapsamlarda ara&#231; kiralama, transfer, tur, aktivite gibi hizmetlerden ihtiyacınıza g&#246;re ekleme yapabilirsiniz. Dilerseniz, değişiklik yapmadan planı ve i&#231;eriği belirli, birden &#231;ok destinasyon ve tur-aktivite hizmetleri i&#231;eren hazır paketlerden de yararlanabilirsiniz. Ayrıca paket t&#252;rleri ve i&#231;erikleri pazar bazlı değişiklik g&#246;sterebilir.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377644"
    },
    {
      "question": "Bu tatil paketleri sadece Türkiye çıkışlı uçuşlarda mı geçerli?",
      "answer": "Turkish Airlines Holidays hizmeti, 60'tan fazla kalkış &#252;lkesinden 200'&#252;n &#252;zerinde destinasyona tatil imkanı sunuyor. Detaylı bilgilere <a href=\"http://www.turkishairlinesholidays.com\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">http://www.turkishairlinesholidays.com</a> ve <a href=\"https://holidays.turkishairlines.com/\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">https://holidays.turkishairlines.com/</a> sayfalarımızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377645"
    }
  ]
};

// ============================================================================
// IMPORT FUNCTIONS
// ============================================================================

async function importEnUsContent(app) {
  const trLocale = 'tr-TR';
  const enLocale = 'en-US';

  try {
    let totalSuccess = 0;
    let totalSkip = 0;
    let totalError = 0;

    // Process each section
    for (const [enSectionKey, topics] of Object.entries(enUsContent)) {
      console.log(`\n📦 Processing section: ${enSectionKey}`);
      
      // Find the corresponding tr-TR section
      const trSectionName = enUsSectionMapping[enSectionKey] || enSectionKey;
      
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

      // Find or create en-US section
      let enSection = await app.entityService.findMany('api::faq-section.faq-section', {
        locale: enLocale,
        filters: {
          sectionName: trSectionName, // Use same sectionName as tr-TR
        },
        limit: 1,
      });

      if (!enSection || enSection.length === 0) {
        console.log(`📝 Creating en-US section: ${trSectionName}...`);
        enSection = await app.entityService.create('api::faq-section.faq-section', {
          data: {
            sectionName: trSectionName,
            sectionTranslation: topics[0]?.sectionTranslation || enSectionKey,
            order: trSection.order || 0,
          },
          locale: enLocale,
        });
        
        // Publish the section using documentService
        if (enSection.documentId) {
          await app.documents('api::faq-section.faq-section').publish({
            documentId: enSection.documentId,
            locale: enLocale,
          });
        }
        
        console.log(`✅ Created and published en-US section with ID: ${enSection.id}`);
      } else {
        enSection = enSection[0];
        console.log(`✅ Found existing en-US section with ID: ${enSection.id}`);
        
        // Publish section if not published
        if (!enSection.publishedAt && enSection.documentId) {
          await app.documents('api::faq-section.faq-section').publish({
            documentId: enSection.documentId,
            locale: enLocale,
          });
          console.log(`✅ Published en-US section: ${enSection.id}`);
        }
      }

      // Import topics
      let sectionSuccess = 0;
      let sectionSkip = 0;
      let sectionError = 0;

      for (const topicData of topics) {
        try {
          // Check if topic already exists by uniqueId in en-US
          const existingTopic = await app.entityService.findMany('api::faq-topic.faq-topic', {
            locale: enLocale,
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
                locale: enLocale,
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

          // Create topic in en-US
          const topic = await app.entityService.create('api::faq-topic.faq-topic', {
            data: {
              topicName: topicData.topicName,
              topicTranslation: topicData.topicTranslation,
              section: enSection.id,
              tcmID: topicData.tcmID,
              linkUri: topicData.linkUri,
              uniqueId: topicData.uniqueId,
              seoUrl: topicData.seoUrl,
              metadata: topicData.metadata,
              order: 0,
            },
            locale: enLocale,
          });

          // Publish the topic using documentService
          if (topic.documentId) {
            await app.documents('api::faq-topic.faq-topic').publish({
              documentId: topic.documentId,
              locale: enLocale,
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
      const trSectionName = deDeSectionMapping[deSectionKey] || deSectionKey;
      
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

async function importDisabledPassengersQuestions(app) {
  const locale = 'tr-TR';
  const topicName = 'Disabled passengers';

  try {
    // Find the topic
    const topics = await app.entityService.findMany('api::faq-topic.faq-topic', {
      locale: locale,
      filters: {
        topicName: topicName,
      },
      limit: 1,
    });

    if (!topics || topics.length === 0) {
      console.log(`❌ Topic "${topicName}" not found in ${locale}`);
      return;
    }

    const topic = topics[0];
    console.log(`✅ Found topic: ${topic.topicName} (ID: ${topic.id})`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const questionData of disabledPassengersQuestions) {
      try {
        // Check if question already exists by legacyId
        const existingQuestion = await app.entityService.findMany('api::faq-question.faq-question', {
          locale: locale,
          filters: {
            legacyId: questionData.id,
          },
          limit: 1,
        });

        if (existingQuestion && existingQuestion.length > 0) {
          console.log(`⏭️  Skipping "${questionData.question.substring(0, 50)}..." - already exists`);
          skipCount++;
          
          // Ensure existing question is published
          const existing = existingQuestion[0];
          if (!existing.publishedAt && existing.documentId) {
            await app.documents('api::faq-question.faq-question').publish({
              documentId: existing.documentId,
              locale: locale,
            });
            console.log(`✅ Published existing question: "${questionData.question.substring(0, 50)}..."`);
            successCount++;
          }
          continue;
        }

        // Create question
        const question = await app.entityService.create('api::faq-question.faq-question', {
          data: {
            title: questionData.question.substring(0, 100), // First 100 chars for display
            question: questionData.question,
            answer: questionData.answer,
            topic: topic.id,
            legacyId: questionData.id,
            order: 0,
          },
          locale: locale,
        });

        // Publish the question using documentService
        if (question.documentId) {
          await app.documents('api::faq-question.faq-question').publish({
            documentId: question.documentId,
            locale: locale,
          });
        }

        console.log(`✅ Created and published: "${questionData.question.substring(0, 50)}..." (ID: ${question.id})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error creating question:`, error.message);
        errorCount++;
      }
    }

    console.log(`\n📊 Summary: ✅ ${successCount} | ⏭️  ${skipCount} | ❌ ${errorCount}`);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    throw error;
  }
}

async function importInfantsChildrenQuestions(app) {
  const locale = 'tr-TR';
  const topicName = 'Infants and children';

  try {
    const topics = await app.entityService.findMany('api::faq-topic.faq-topic', {
      locale: locale,
      filters: { topicName: topicName },
      limit: 1,
    });

    if (!topics || topics.length === 0) {
      console.log(`❌ Topic "${topicName}" not found in ${locale}`);
      return;
    }

    const topic = topics[0];
    console.log(`✅ Found topic: ${topic.topicName} (ID: ${topic.id})`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const questionData of infantsChildrenQuestions) {
      try {
        const existingQuestion = await app.entityService.findMany('api::faq-question.faq-question', {
          locale: locale,
          filters: { legacyId: questionData.id },
          limit: 1,
        });

        if (existingQuestion && existingQuestion.length > 0) {
          const existing = existingQuestion[0];
          if (!existing.publishedAt && existing.documentId) {
            await app.documents('api::faq-question.faq-question').publish({
              documentId: existing.documentId,
              locale: locale,
            });
            console.log(`✅ Published existing question: "${questionData.question.substring(0, 50)}..."`);
            successCount++;
          } else {
            console.log(`⏭️  Skipping "${questionData.question.substring(0, 50)}..." - already exists`);
            skipCount++;
          }
          continue;
        }

        const question = await app.entityService.create('api::faq-question.faq-question', {
          data: {
            title: questionData.question.substring(0, 100),
            question: questionData.question,
            answer: questionData.answer,
            topic: topic.id,
            legacyId: questionData.id,
            order: 0,
          },
          locale: locale,
        });

        if (question.documentId) {
          await app.documents('api::faq-question.faq-question').publish({
            documentId: question.documentId,
            locale: locale,
          });
        }

        console.log(`✅ Created and published: "${questionData.question.substring(0, 50)}..." (ID: ${question.id})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error creating question:`, error.message);
        errorCount++;
      }
    }

    console.log(`\n📊 Summary: ✅ ${successCount} | ⏭️  ${skipCount} | ❌ ${errorCount}`);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    throw error;
  }
}

async function importQuestionsForTopic(app, topicName, questions) {
  const locale = 'tr-TR';

  try {
    const topics = await app.entityService.findMany('api::faq-topic.faq-topic', {
      locale: locale,
      filters: { topicName: topicName },
      limit: 1,
    });

    if (!topics || topics.length === 0) {
      console.log(`❌ Topic "${topicName}" not found in ${locale}`);
      return { success: 0, skip: 0, error: 0 };
    }

    const topic = topics[0];
    console.log(`\n✅ Found topic: ${topic.topicName} (ID: ${topic.id})`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const questionData of questions) {
      try {
        const existingQuestion = await app.entityService.findMany('api::faq-question.faq-question', {
          locale: locale,
          filters: { legacyId: questionData.id },
          limit: 1,
        });

        if (existingQuestion && existingQuestion.length > 0) {
          const existing = existingQuestion[0];
          if (!existing.publishedAt && existing.documentId) {
            await app.documents('api::faq-question.faq-question').publish({
              documentId: existing.documentId,
              locale: locale,
            });
            console.log(`✅ Published existing: "${questionData.question.substring(0, 50)}..."`);
            successCount++;
          } else {
            console.log(`⏭️  Skipping: "${questionData.question.substring(0, 50)}..."`);
            skipCount++;
          }
          continue;
        }

        const question = await app.entityService.create('api::faq-question.faq-question', {
          data: {
            title: questionData.question.substring(0, 100),
            question: questionData.question,
            answer: questionData.answer,
            topic: topic.id,
            legacyId: questionData.id,
            order: 0,
          },
          locale: locale,
        });

        if (question.documentId) {
          await app.documents('api::faq-question.faq-question').publish({
            documentId: question.documentId,
            locale: locale,
          });
        }

        console.log(`✅ Created: "${questionData.question.substring(0, 50)}..." (ID: ${question.id})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error:`, error.message);
        errorCount++;
      }
    }

    console.log(`📊 ${topicName}: ✅ ${successCount} | ⏭️  ${skipCount} | ❌ ${errorCount}`);
    return { success: successCount, skip: skipCount, error: errorCount };
  } catch (error) {
    console.error(`❌ Fatal error for topic "${topicName}":`, error);
    return { success: 0, skip: 0, error: questions.length };
  }
}

// ============================================================================
// MAIN FUNCTION
// ============================================================================
async function main() {
  let app;
  try {
    console.log('\n' + '🚀'.repeat(30));
    console.log('🚀 STARTING FAQ DATA IMPORT');
    console.log('🚀'.repeat(30));

    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';
    global.strapi = app;

    // Step 1: Import en-US content
    console.log('\n' + '='.repeat(60));
    console.log('🌍 STEP 1: Importing en-US Sections and Topics');
    console.log('='.repeat(60));
    await importEnUsContent(app);

    // Step 2: Import de-DE content
    console.log('\n' + '='.repeat(60));
    console.log('🌍 STEP 2: Importing de-DE Sections and Topics');
    console.log('='.repeat(60));
    await importDeDeContent(app);

    // Step 3: Import Disabled passengers questions
    console.log('\n' + '='.repeat(60));
    console.log('❓ STEP 3: Importing Disabled passengers Questions');
    console.log('='.repeat(60));
    await importDisabledPassengersQuestions(app);

    // Step 4: Import Infants and children questions
    console.log('\n' + '='.repeat(60));
    console.log('❓ STEP 4: Importing Infants and children Questions');
    console.log('='.repeat(60));
    await importInfantsChildrenQuestions(app);

    // Step 5: Import all other questions
    console.log('\n' + '='.repeat(60));
    console.log('❓ STEP 5: Importing All Other FAQ Questions');
    console.log('='.repeat(60));
    
    // Skip topics that were already imported separately and "Special Assistance" (duplicate of Disabled passengers)
    const topicsToImport = Object.keys(questionsByTopic).filter(topic => 
      topic !== "Special Assistance" && 
      topic !== "Infants and children" && 
      topic !== "Disabled passengers"
    );
    for (const topicName of topicsToImport) {
      const questions = questionsByTopic[topicName];
      if (!questions || questions.length === 0) continue;
      await importQuestionsForTopic(app, topicName, questions);
    }

    // Final summary
    console.log('\n' + '🎉'.repeat(30));
    console.log('🎉 ALL FAQ DATA IMPORT COMPLETED!');
    console.log('🎉'.repeat(30));

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
