"use client";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function LoadingWithDelay() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return !ready ? <Loading /> : null;
}
