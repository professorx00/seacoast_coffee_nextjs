import React, { useState } from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import ReportMenu from "../components/ReportMenu";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Loading from "../components/Loading";

export default function Reports() {
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
      <ReportMenu />
    </Container>
  );
}
