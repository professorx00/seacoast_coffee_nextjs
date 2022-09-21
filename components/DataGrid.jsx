import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "roast_name",
    headerName: "Roast Name",
    width: 150,
    editable: false,
  },
  {
    field: "roast_date",
    headerName: "Roast Date",
    type: "date",
    width: 110,
    editable: false,
  },
  {
    field: "roast_type",
    headerName: "Roast Type",
    width: 110,
    editable: false,
  },
  {
    field: "packaged",
    headerName: "Packaged",
    description: "This column has a value getter and is not sortable.",
    width: 110,
    type: "boolean",
  },
];

export default function AppDataGrid({ data }) {
  return (
    <Box sx={{ height: 400, width: "100%", mx: 1 }}>
      <Typography variant="h5">Recent Roast</Typography>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
