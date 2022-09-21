import React from "react";
import {
  Button,
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Loading from "../components/Loading";
import AreaChart from "../components/AreaChart";
import PieChart from "../components/PieChart";
import AppDataGrid from "../components/DataGrid";

const data = [
  {
    id: 1,
    roast_name: "Snow",
    roast_date: new Date(),
    roast_type: "Light",
    packaged: true,
  },
  {
    id: 2,
    roast_name: "Lannister",
    roast_date: new Date(),
    roast_type: "Medium",
    packaged: true,
  },
  {
    id: 3,
    roast_name: "Lannister",
    roast_date: new Date(),
    roast_type: "Light",
    packaged: true,
  },
  {
    id: 4,
    roast_name: "Stark",
    roast_date: new Date(),
    roast_type: "Light",
    packaged: false,
  },
  {
    id: 5,
    roast_name: "Targaryen",
    roast_date: new Date(),
    roast_type: "Light",
    packaged: true,
  },
  {
    id: 6,
    roast_name: "Melisandre",
    roast_date: new Date(),
    roast_type: "Dark",
    packaged: true,
  },
  {
    id: 7,
    roast_name: "Clifford",
    roast_date: new Date(),
    roast_type: "Darkest",
    packaged: false,
  },
  {
    id: 8,
    roast_name: "Frances",
    roast_date: new Date(),
    roast_type: "Light",
    packaged: true,
  },
  {
    id: 9,
    roast_name: "Roxie",
    roast_date: new Date(),
    roast_type: "Medium",
    packaged: true,
  },
];

export default function Protected() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.status === "unauthenticated") {
    router.push("/auth/userLogin");
  }
  if (session.status === "authenticated") {
    return (
      <Container>
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Card
            sx={{
              mx: 2,
              my: { xs: 2, sm: 0 },
              background: "#d9c5ad",
            }}
          >
            <CardHeader
              title="Total Weekly Roast"
              sx={{ background: "#399794" }}
            />
            <Divider />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">125</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              mx: 2,
              my: { xs: 2, sm: 0 },
              background: "#d9c5ad",
            }}
          >
            <CardHeader
              title="Total Weekly Invoices"
              sx={{ background: "#399794" }}
            />
            <Divider />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">60</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              mx: 2,
              my: { xs: 2, sm: 0 },
              background: "#d9c5ad",
            }}
          >
            <CardHeader
              title="Total Weekly Packaged"
              sx={{ background: "#399794" }}
            />
            <Divider />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">5689</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "70%" },
              background: "#F8F6F4",
              p: 3,
              borderRadius: 2,
              boxShadow: 5,
              my: 2,
              mx: { xs: 0, sm: 0, md: 2 },
            }}
          >
            <AreaChart />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "30%" },
              background: "#F8F6F4",
              p: 3,
              borderRadius: 2,
              boxShadow: 5,
              my: 2,
            }}
          >
            <PieChart />
          </Box>
        </Box>
        <Box
          sx={{
            my: 5,
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <AppDataGrid data={data} />
          <AppDataGrid data={data} />
        </Box>
      </Container>
    );
  }
}
