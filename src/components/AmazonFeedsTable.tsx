import * as React from "react";
import { DataGrid, GridColDef, GridValueGetter } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "feedId", headerName: "Feed ID", width: 150 },
  { field: "feedType", headerName: "Feed Type", width: 150 },
  {
    field: "marketplaceIds",
    headerName: "Marketplace IDs",
    width: 200,
    // Affiche la liste en string séparée par des virgules
    valueGetter: (value, row): GridValueGetter => value.join(", "),
  },
  {
    field: "createdTime",
    headerName: "Created Time",
    width: 180,
    // optionnel : formater la date si besoin
    valueGetter: (value, row): GridValueGetter => value,
  },
  { field: "processingStatus", headerName: "Processing Status", width: 150 },
  {
    field: "processingStartTime",
    headerName: "Processing Start Time",
    width: 180,
    valueGetter: (value, row): GridValueGetter => value,
  },
  {
    field: "processingEndTime",
    headerName: "Processing End Time",
    width: 180,
    valueGetter: (value, row): GridValueGetter => value,
  },
  {
    field: "resultFeedDocumentId",
    headerName: "Result Feed Document ID",
    width: 180,
  },
];
const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={[]}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
