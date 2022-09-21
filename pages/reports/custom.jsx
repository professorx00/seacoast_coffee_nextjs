import { Container, Typography } from "@mui/material";
import React from "react";
import ReportMenu from "../../components/ReportMenu";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Loading from "../../components/Loading";

export default function Custom() {
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
      <Typography variant="h1">Custom</Typography>
    </Container>
  );
}
