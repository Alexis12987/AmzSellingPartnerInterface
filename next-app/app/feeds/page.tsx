"use client";
import FeedsTable from "components/FeedsTable";
import FilterForm from "components/FilterForm";
import { loadSettings } from "local-storage/storageUtils";
import { useState } from "react";
import { AmazonFeed, GetFeedsFilters } from "types/types";

export default function Page() {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (input: GetFeedsFilters) => {
    setIsLoading(true);
    const { startDate, endDate, feedStatus, marketplaceIds } = input;
    const { use_sandbox, refresh_token, access_token, region } = loadSettings();
    const params = new URLSearchParams({
      startDate,
      endDate,
      refresh_token,
      access_token,
      region,
      use_sandbox: String(use_sandbox),
    });

    (feedStatus || []).forEach((status) => params.append("feedStatus", status));
    (marketplaceIds || []).forEach((id) => params.append("marketplaceIds", id));
    let url = new URL(
      "/api",
      `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api`
    );
    url.search = params.toString();
    const result: { feeds: AmazonFeed[] } = await fetch(url).then(
      async (value) => await value.json()
    );
    setFeeds(result.feeds);
    setIsLoading(false);
  };

  return (
    <>
      <FilterForm isLoading={isLoading} onSubmit={onSubmit}></FilterForm>
      <FeedsTable rows={feeds}></FeedsTable>
    </>
  );
}
