"use client";
import AmazonFeedsTable from "components/AmazonFeedsTable";
import FilterForm, { FilterValues } from "components/FilterForm";
import { useState } from "react";

export default function Page() {
  const [filters, setFilters] = useState<FilterValues>({
    feed_id: "",
    feedStatus: [],
  });

  return (
    <>
      <h1>Hello, Next.js!</h1>
      <FilterForm onSubmit={setFilters}></FilterForm>
      <AmazonFeedsTable></AmazonFeedsTable>
    </>
  );
}
