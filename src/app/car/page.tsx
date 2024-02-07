"use client";
import { useSearchParams } from "next/navigation";
import CarDetails from "./car";

export default function Car() {
  const params = useSearchParams().get("license");

  return <CarDetails license={params || ""} />;
}
