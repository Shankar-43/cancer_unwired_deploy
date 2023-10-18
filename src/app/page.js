"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/inbox");
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <main className={styles.main}>
      <p></p>
    </main>
  );
}
