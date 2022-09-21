import LoginForm from "../../components/LoginForm";
import { Box, Grid } from "@mui/material";

import React from "react";
import Image from "next/image";
import SignUpForm from "../../components/SignUpForm";

export default function userLogin() {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} md={5} lg={2}>
        <SignUpForm />
      </Grid>
      <Grid
        item
        xs={0}
        md={7}
        lg={10}
        sx={{
          backgroundImage: `url(${"/signUpBackground.jpg"})`,
          backgroundSize: "cover",
        }}
      ></Grid>
    </Grid>
  );
}
