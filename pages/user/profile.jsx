import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/system";
import { Divider, TextField, Typography } from "@mui/material";

export default function Profile() {
  const session = useSession();
  const router = useRouter();
  const udata = session?.data?.userData;

  if (session.status === "unauthenticated") {
    router.push("/auth/userLogin");
  }

  return (
    <Container>
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4">Profile</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>First Name</Typography>
        <TextField fullWidth value={udata?.firstName} />
        <Typography>Last Name</Typography>
        <TextField fullWidth value={udata?.lastName} />
        <Typography>Email</Typography>
        <TextField fullWidth value={udata?.email} />
      </Box>
    </Container>
  );
}
