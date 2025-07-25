export enum AmazonFeedProcessingStatus {
  CANCELLED = "CANCELLED",
  DONE = "DONE",
  FATAL = "FATAL",
  IN_PROGRESS = "IN_PROGRESS",
  IN_QUEUE = "IN_QUEUE",
}

type MarketplaceInfo = {
  id: string;
  name: string;
};

type MarketplacesType = {
  [key: string]: MarketplaceInfo;
};

export const AmazonMarketplaces: MarketplacesType = {
  CA: {
    id: "A2EUQ1WTGCTBG2",
    name: "Canada",
  },
  US: {
    id: "ATVPDKIKX0DER",
    name: "United States of America",
  },
  MX: {
    id: "A1AM78C64UM0Y8",
    name: "Mexico",
  },
  BR: {
    id: "A2Q3Y263D00KWC",
    name: "Brazil",
  },
  IE: {
    id: "A28R8C7NBKEWEA",
    name: "Ireland",
  },
  ES: {
    id: "A1RKKUPIHCS9HS",
    name: "Spain",
  },
  GB: {
    id: "A1F83G8C2ARO7P",
    name: "United Kingdom",
  },
  FR: {
    id: "A13V1IB3VIYZZH",
    name: "France",
  },
  BE: {
    id: "AMEN7PMS3EDWL",
    name: "Belgium",
  },
  NL: {
    id: "A1805IZSGTT6HS",
    name: "Netherlands",
  },
  DE: {
    id: "A1PA6795UKMFR9",
    name: "Germany",
  },
  IT: {
    id: "APJ6JRA9NG5V4",
    name: "Italy",
  },
  SE: {
    id: "A2NODRKZP88ZB9",
    name: "Sweden",
  },
  ZA: {
    id: "AE08WJ6YKNBMC",
    name: "South Africa",
  },
  PL: {
    id: "A1C3SOZRARQ6R3",
    name: "Poland",
  },
  EG: {
    id: "ARBP9OOSHTCHU",
    name: "Egypt",
  },
  TR: {
    id: "A33AVAJ2PDY3EV",
    name: "Turkey",
  },
  SA: {
    id: "A17E79C6D8DWNP",
    name: "Saudi Arabia",
  },
  AE: {
    id: "A2VIGQ35RCS4UG",
    name: "United Arab Emirates",
  },
  IN: {
    id: "A21TJRUUN4KGV",
    name: "India",
  },
  SG: {
    id: "A19VAU5U5O7RUS",
    name: "Singapore",
  },
  AU: {
    id: "A39IBJ37TRP1C6",
    name: "Australia",
  },
  JP: {
    id: "A1VC38T7YXB528",
    name: "Japan",
  },
} as const;

export enum AmazonFeedType {
  // Business
  RFQ_UPLOAD_FEED = "RFQ_UPLOAD_FEED",

  // EasyShip
  POST_EASYSHIP_DOCUMENTS = "POST_EASYSHIP_DOCUMENTS",

  // Fulfillment by Amazon
  POST_FULFILLMENT_ORDER_REQUEST_DATA = "POST_FULFILLMENT_ORDER_REQUEST_DATA",
  POST_FULFILLMENT_ORDER_CANCELLATION_REQUEST_DATA = "POST_FULFILLMENT_ORDER_CANCELLATION_REQUEST_DATA",
  POST_FBA_INBOUND_CARTON_CONTENTS = "POST_FBA_INBOUND_CARTON_CONTENTS",
  POST_FLAT_FILE_FBA_CREATE_REMOVAL = "POST_FLAT_FILE_FBA_CREATE_REMOVAL",
  POST_FLAT_FILE_FULFILLMENT_ORDER_REQUEST_DATA = "POST_FLAT_FILE_FULFILLMENT_ORDER_REQUEST_DATA",
  POST_FLAT_FILE_FULFILLMENT_ORDER_CANCELLATION_REQUEST_DATA = "POST_FLAT_FILE_FULFILLMENT_ORDER_CANCELLATION_REQUEST_DATA",

  // Invoicing
  UPLOAD_VAT_INVOICE = "UPLOAD_VAT_INVOICE",

  // Listings
  POST_STD_ACES_DATA = "POST_STD_ACES_DATA",
  POST_FLAT_FILE_BOOKLOADER_DATA = "POST_FLAT_FILE_BOOKLOADER_DATA",
  POST_FLAT_FILE_INVLOADER_DATA = "POST_FLAT_FILE_INVLOADER_DATA",
  POST_FLAT_FILE_LISTINGS_DATA = "POST_FLAT_FILE_LISTINGS_DATA",
  POST_FLAT_FILE_CONVERGENCE_LISTINGS_DATA = "POST_FLAT_FILE_CONVERGENCE_LISTINGS_DATA",
  POST_FLAT_FILE_PRICEANDQUANTITYONLY_UPDATE_DATA = "POST_FLAT_FILE_PRICEANDQUANTITYONLY_UPDATE_DATA",
  POST_INVENTORY_AVAILABILITY_DATA = "POST_INVENTORY_AVAILABILITY_DATA",
  JSON_LISTINGS_FEED = "JSON_LISTINGS_FEED",
  POST_PRODUCT_OVERRIDES_DATA = "POST_PRODUCT_OVERRIDES_DATA",
  POST_PRODUCT_PRICING_DATA = "POST_PRODUCT_PRICING_DATA",
  POST_PRODUCT_DATA = "POST_PRODUCT_DATA",
  POST_PRODUCT_IMAGE_DATA = "POST_PRODUCT_IMAGE_DATA",
  POST_PRODUCT_RELATIONSHIP_DATA = "POST_PRODUCT_RELATIONSHIP_DATA",
  POST_UIEE_BOOKLOADER_DATA = "POST_UIEE_BOOKLOADER_DATA",

  // Order
  POST_FLAT_FILE_ORDER_ACKNOWLEDGEMENT_DATA = "POST_FLAT_FILE_ORDER_ACKNOWLEDGEMENT_DATA",
  POST_FLAT_FILE_PAYMENT_ADJUSTMENT_DATA = "POST_FLAT_FILE_PAYMENT_ADJUSTMENT_DATA",
  POST_FLAT_FILE_FULFILLMENT_DATA = "POST_FLAT_FILE_FULFILLMENT_DATA",
  POST_EXPECTED_SHIP_DATE_SOD_FLAT_FILE = "POST_EXPECTED_SHIP_DATE_SOD_FLAT_FILE",
  POST_INVOICE_CONFIRMATION_DATA = "POST_INVOICE_CONFIRMATION_DATA",
  POST_ORDER_ACKNOWLEDGEMENT_DATA = "POST_ORDER_ACKNOWLEDGEMENT_DATA",
  POST_PAYMENT_ADJUSTMENT_DATA = "POST_PAYMENT_ADJUSTMENT_DATA",
  POST_ORDER_FULFILLMENT_DATA = "POST_ORDER_FULFILLMENT_DATA",
  POST_EXPECTED_SHIP_DATE_SOD = "POST_EXPECTED_SHIP_DATE_SOD",
}
