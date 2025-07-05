import { SellingPartner } from "amazon-sp-api";
import { GetFeedsResponse } from "amazon-sp-api/lib/typings/operations/feeds";
import { SpAPIClientConfig, GetFeedsFilters } from "types/types";

export const getClient = (clientConfig: SpAPIClientConfig): SellingPartner => {
  const spClient = new SellingPartner({
    region: clientConfig.region,
    refresh_token: clientConfig.refresh_token,
    ...(clientConfig.access_token
      ? { access_token: clientConfig.access_token }
      : {}),
    credentials: {
      SELLING_PARTNER_APP_CLIENT_ID: process.env.SELLING_PARTNER_APP_CLIENT_ID,
      SELLING_PARTNER_APP_CLIENT_SECRET:
        process.env.SELLING_PARTNER_APP_CLIENT_SECRET,
    },
  });
  return spClient;
};

export const getFeeds = async (
  filters: GetFeedsFilters,
  clientConfig: SpAPIClientConfig
) => {
  let nextToken: string | undefined = undefined;
  const allFeeds = [];
  return {
    feeds: [
      {
        feedId: "string",
        feedType: "string",
        marketplaceIds: ["string"],
        createdTime: "2025-07-05T08:33:39.610Z",
        processingStatus: "CANCELLED",
        processingStartTime: "2025-07-05T08:33:39.610Z",
        processingEndTime: "2025-07-05T08:33:39.610Z",
        resultFeedDocumentId: "string",
      },
    ],
    nextToken: "string",
  };

  const spClient = getClient(clientConfig);

  do {
    const response = await spClient.callAPI({
      operation: "getFeeds",
      endpoint: "feeds",
      query: nextToken
        ? { nextToken }
        : {
            marketplaceIds: filters.marketplaceIds,
            feedTypes: ["JSON_LISTINGS_FEED"],
            createdSince: filters.startDate,
            createdUntil: filters.endDate,
            processingStatuses: filters.feedStatus,
            pageSize: 100,
          },
    });

    if (response.payload) {
      allFeeds.push(...response.payload);
    }

    nextToken = response.nextToken;
  } while (nextToken);

  return allFeeds;
};
