import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button
          onClick={() => {
            router.push("/auth/userLogin");
          }}
        >
          Login
        </Button>
      </main>
    </div>
  );
}
