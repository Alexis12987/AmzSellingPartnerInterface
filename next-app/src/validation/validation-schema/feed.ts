import { z } from "zod/v4";
import { AmazonFeedProcessingStatus } from "constant";

export const SpAPIClientConfigSchema = z.object({
  region: z.enum(["eu", "na", "fe"]),
  refresh_token: z.string().nonempty(),
  access_token: z.string().optional(),
  use_sandbox: z.stringbool(),
});

export const GetFeedsFiltersSchema = z.object({
  feedStatus: z.array(z.enum(AmazonFeedProcessingStatus)).optional(),
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional(),
  marketplaceIds: z.array(z.string()).optional(),
});
