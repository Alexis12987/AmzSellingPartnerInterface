import * as React from "react";
import { DataGrid, GridColDef, GridValueGetter } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { AmazonFeed } from "types/types";

const columns: GridColDef[] = [
  { field: "feedId", headerName: "Feed ID", width: 150 },
  { field: "feedType", headerName: "Feed Type", width: 150 },
  {
    field: "marketplaceIds",
    headerName: "Marketplace IDs",
    width: 200,
    valueGetter: (value: string, row): string => value || "",
  },
  {
    field: "createdTime",
    headerName: "Created Time",
    width: 180,
    valueGetter: (value, row): string => value,
  },
  { field: "processingStatus", headerName: "Processing Status", width: 150 },
  {
    field: "processingStartTime",
    headerName: "Processing Start Time",
    width: 180,
    valueGetter: (value, row): string => value,
  },
  {
    field: "processingEndTime",
    headerName: "Processing End Time",
    width: 180,
    valueGetter: (value, row): string => value,
  },
  {
    field: "resultFeedDocumentId",
    headerName: "Result Feed Document ID",
    width: 180,
  },
];

type Props = { rows: AmazonFeed[] };

export default function FeedsTable(props: Props) {
  const paginationModel = { page: 0, pageSize: 50 };
  const [rows, setRows] = useState<AmazonFeed[]>({ ...props.rows });

  useEffect(() => {
    if (props.rows) {
      props.rows.forEach((row, index) => {
        row["id"] = index;
      });
      setRows(props.rows);
    }
  }, [props.rows]);

  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 50]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
