import { z } from "zod/v4";
import { AmazonFeedProcessingStatus, AmazonFeedType } from "constant";

export const SpAPIClientConfigSchema = z.object({
  region: z.enum(["eu", "na", "fe"]),
  refresh_token: z.string().nonempty(),
  access_token: z.string().optional(),
  use_sandbox: z.stringbool(),
});

export const GetFeedsFiltersSchema = z.object({
  feedStatus: z
    .preprocess(
      (val) => (typeof val === "string" ? [val] : val),
      z.array(z.enum(AmazonFeedProcessingStatus))
    )
    .optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  marketplaceIds: z
    .preprocess(
      (val) => (typeof val === "string" ? [val] : val),
      z.array(z.string())
    )
    .optional(),
  feedTypes: z
    .preprocess(
      (val) => (typeof val === "string" ? [val] : val),
      z.array(z.enum(AmazonFeedType)).max(10)
    )
    .optional(),
});
