import { SellingPartner } from "amazon-sp-api";

let spClient = new SellingPartner({
  region: "eu", // The region to use for the SP-API endpoints ("eu", "na" or "fe")
  refresh_token: "<REFRESH_TOKEN>", // The refresh token of your app user
});

export { spClient };
