import React from "react";
import { Typography, Container } from "@mui/material";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Loading from "../components/Loading";

export default function Invoices() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.status === "unauthenticated") {
    router.push("/auth/userLogin");
  }
  return (
    <Container>
      <Typography>Invoices</Typography>
    </Container>
  );
}
