import {
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const initialValues = {
  username: "",
  password: "",
};

const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

let validationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
});

export default function LoginForm() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#359591",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await signIn("credentials", {
            redirect: false,
            username: values.username,
            password: values.password,
            callbackUrl: "/dashboard",
          });
          if (res?.error) {
            console.error(res.error);
          }
          if (res.url) router.push("/dashboard");
          setSubmitting(false);
        }}
      >
        {({
          dirty,
          isValid,
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "column",
                p: 2,
                width: "100%",
              }}
            >
              <Typography variant="h2">Login</Typography>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <TextField
                label="Username"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
                sx={{ marginBottom: "1rem" }}
                color="secondary"
              />
              {errors.username && (
                <Box>
                  <Typography>{errors.username}</Typography>
                </Box>
              )}

              <TextField
                label="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ marginBottom: "1rem" }}
                color="secondary"
              />
              {errors.password && (
                <Box>
                  <Typography>{errors.password}</Typography>
                </Box>
              )}
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!dirty || !isValid}
                  color="secondary"
                  onClick={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                >
                  Login
                </Button>
                <Button
                  color="info"
                  onClick={() => {
                    router.push("/auth/userSignUp");
                  }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
}
