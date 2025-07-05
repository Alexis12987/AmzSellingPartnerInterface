export enum AmazonFeedProcessingStatus {
  CANCELLED = "CANCELLED",
  DONE = "DONE",
  FATAL = "FATAL",
  IN_PROGRESS = "IN_PROGRESS",
  IN_QUEUE = "IN_QUEUE",
}

export enum MarketplaceIDs {
  CA = "A2EUQ1WTGCTBG2", // Canada
  US = "ATVPDKIKX0DER", // United States of America
  MX = "A1AM78C64UM0Y8", // Mexico
  BR = "A2Q3Y263D00KWC", // Brazil

  IE = "A28R8C7NBKEWEA", // Ireland
  ES = "A1RKKUPIHCS9HS", // Spain
  UK = "A1F83G8C2ARO7P", // United Kingdom
  FR = "A13V1IB3VIYZZH", // France
  BE = "AMEN7PMS3EDWL", // Belgium
  NL = "A1805IZSGTT6HS", // Netherlands
  DE = "A1PA6795UKMFR9", // Germany
  IT = "APJ6JRA9NG5V4", // Italy
  SE = "A2NODRKZP88ZB9", // Sweden
  ZA = "AE08WJ6YKNBMC", // South Africa
  PL = "A1C3SOZRARQ6R3", // Poland
  EG = "ARBP9OOSHTCHU", // Egypt
  TR = "A33AVAJ2PDY3EV", // Turkey
  SA = "A17E79C6D8DWNP", // Saudi Arabia
  AE = "A2VIGQ35RCS4UG", // United Arab Emirates
  IN = "A21TJRUUN4KGV", // India

  SG = "A19VAU5U5O7RUS", // Singapore
  AU = "A39IBJ37TRP1C6", // Australia
  JP = "A1VC38T7YXB528", // Japan
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
