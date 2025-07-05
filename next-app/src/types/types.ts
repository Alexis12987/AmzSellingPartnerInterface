import {
  GetFeedsFiltersSchema,
  SpAPIClientConfigSchema,
} from "validation/validation-schema/feed";
import z from "zod/v4";

export type GetFeedsFilters = z.infer<typeof GetFeedsFiltersSchema>;

export type SpAPIClientConfig = z.infer<typeof SpAPIClientConfigSchema>;

export interface AmazonFeed {
  feedId: string;
  feedType: string;
  marketplaceIds: Array<string>;
  createdTime: string;
  processingStatus: "CANCELLED";
  processingStartTime: string;
  processingEndTime: string;
  resultFeedDocumentId: string;
}
