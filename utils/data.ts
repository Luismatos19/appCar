import { useSearchParams } from "next/navigation";

export async function getCars() {
  const response = await fetch(`http://localhost:3000/api/cars`);
  return response.json();
}

export async function getCarById(license: string) {
  const response = await fetch(
    `http://localhost:3000/api/cars/license?license=${license}`
  );
  return response.json();
}
