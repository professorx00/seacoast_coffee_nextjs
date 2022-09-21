import React, { useContext, useState } from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { UIContext } from "../contexts/UIContext";

const sideMenu = [
  { name: "Organic", link: "/reports/organic" },
  { name: "All Seasons", link: "/reports/allSeasons" },
  { name: "Fair Trade", link: "/reports/fairTrade" },
  { name: "Roast", link: "/reports/roast" },
  { name: "Packaging", link: "/reports/packaging" },
  { name: "Custom", link: "/reports/custom" },
];

export default function ReportMenu() {
  const [uiState, setUIState] = useContext(UIContext);
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "info.main",
        width: "100%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        zIndex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: 3,
      }}
    >
      {sideMenu.map((item) => {
        return (
          <Button
            key={item.name}
            color={uiState?.reports === item.name ? "secondary" : "primary"}
            onClick={() => {
              setUIState({ ...uiState, reports: item.name });
              router.push(item.link);
            }}
          >
            {item.name}
          </Button>
        );
      })}
    </Box>
  );
}
