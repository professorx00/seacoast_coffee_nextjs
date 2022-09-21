import { CircularProgress, Box } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <CircularProgress size={75} />
    </Box>
  );
}
