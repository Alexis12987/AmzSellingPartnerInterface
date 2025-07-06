"use client";
import FeedsTable from "components/FeedsTable";
import FilterForm from "components/FilterForm";
import { loadSettings } from "local-storage/storageUtils";
import { useState } from "react";
import { AmazonFeed, GetFeedsFilters } from "types/types";
import Snackbar from "@mui/material/Snackbar";

export default function Page() {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (input: GetFeedsFilters) => {
    setIsLoading(true);
    const { startDate, endDate, feedStatus, marketplaceIds, feedTypes } = input;
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
    (feedTypes || []).forEach((type) => params.append("feedTypes", type));
    let url = new URL(
      "/api",
      `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api`
    );
    url.search = params.toString();
    const result: { feeds: AmazonFeed[] } = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    }).then(async (value) => {
      const response = await value.json();
      if (value.status != 200) {
        setMessage(
          "result" in response && typeof response.result == "string"
            ? response.result
            : "Error"
        );
        setOpen(true);
      }
      return response;
    });
    setFeeds(result.feeds);
    setIsLoading(false);
  };

  return (
    <>
      <FilterForm isLoading={isLoading} onSubmit={onSubmit}></FilterForm>
      <FeedsTable rows={feeds}></FeedsTable>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
}
