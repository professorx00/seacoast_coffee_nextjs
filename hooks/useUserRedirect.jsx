import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
export default function useUserRedirect() {
  const session = useSession();
  const router = useRouter();
  return "yes";
}
