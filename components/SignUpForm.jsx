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
  email: "",
  firstName: "",
  lastName: "",
};

const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

let validationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
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

export default function SignUpForm() {
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
          const response = await fetch("/api/userSignUp", {
            method: "POST",
            body: JSON.stringify(values),
          });
          const data = await response.json();
          setSubmitting(false);
          if (data.success) {
            signIn();
          } else {
            alert(data.message);
          }
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
              <Typography variant="h2">Sign Up</Typography>
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
              <TextField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ marginBottom: "1rem" }}
                color="secondary"
              />
              {errors.email && (
                <Box>
                  <Typography>{errors.email}</Typography>
                </Box>
              )}
              <TextField
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ marginBottom: "1rem" }}
                color="secondary"
              />
              {errors.firstName && (
                <Box>
                  <Typography>{errors.firstName}</Typography>
                </Box>
              )}
              <TextField
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ marginBottom: "1rem" }}
                color="secondary"
              />
              {errors.lastName && (
                <Box>
                  <Typography>{errors.lastName}</Typography>
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
                  Register
                </Button>
                <Button
                  color="info"
                  onClick={() => {
                    router.push("/auth/userLogin");
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
}
