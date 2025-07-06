import { SellingPartner } from "amazon-sp-api";
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
    options: {
      use_sandbox: clientConfig.use_sandbox,
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

  const spClient = getClient(clientConfig);

  do {
    const response = await spClient.callAPI({
      operation: "getFeeds",
      endpoint: "feeds",
      query: nextToken
        ? { nextToken }
        : {
            marketplaceIds: filters.marketplaceIds,
            feedTypes: filters.feedTypes,
            createdSince: filters.startDate,
            createdUntil: filters.endDate,
            processingStatuses: filters.feedStatus,
            pageSize: 10,
          },
    });
    if (response.feeds) {
      allFeeds.push(...response.feeds);
    }

    nextToken = response.nextToken;
  } while (nextToken);

  return allFeeds;
};
