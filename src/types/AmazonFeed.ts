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
