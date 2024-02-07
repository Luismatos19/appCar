"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCars } from "../utils/data";
import { Button } from "../components/Button/button";
import { PaginatedData } from "../components/paginatedData/paginatedData";

export default function Home() {
  const [value, setValue] = useState("");
  const [cars, setCars] = useState<ICar[]>([]);

  const navigation = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await getCars();
      console.log(response);
      setCars(response);
    }

    fetchData();
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSearch() {
    navigation.push(`car?license=${value}`);
  }

  return (
    <div>
      <div className="flex items-center justify-center m-8">
        <div className="mr-5 font-bold">Buscar por placa: </div>
        <input
          type="text"
          placeholder="Buscar..."
          value={value}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mr-3"
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </div>
      <PaginatedData data={cars} pageSize={8} />
    </div>
  );
}
