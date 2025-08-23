"use client";
import { useEffect, useState } from "react";
import AwesomeLoader from "@/components/Banner/awesome-loader";

export default function PreloaderOverlay() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShow(false), 2100); // keep it short
    return () => clearTimeout(id);
  }, []);
  if (!show) return null;
  return (
    <div
    //   aria-hidden="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <AwesomeLoader />
    </div>
  );
}
