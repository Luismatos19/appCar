"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getCarById } from "../../utils/data";
import { capitalizeFirstLetter, formattedPrice } from "../../utils/utils";
import { Button } from "../../components/Button/button";
import { deleteCar } from "../../utils/actions";

interface iCarProps {
  license: string;
}

export default function CarDetails({ license }: iCarProps) {
  const [car, setCar] = useState<ICar>();

  const navigation = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await getCarById(license);
      setCar(response);
    }

    fetchData();
  }, []);

  async function handleDelete() {
    deleteCar(license);
    navigation.push("/");
  }

  function handleFinance() {
    navigation.push("/finance");
  }

  return (
    <>
      {car && (
        <div className="container none w-1/2  mx-auto h-4/5 flex items-center flex-col p-5">
          <img src={car.image} className="rounded-md shadow-lg w-full h-80" />
          <div className="text-lg font-bold m-1 mt-5">{`${capitalizeFirstLetter(
            car.model
          )} - ${capitalizeFirstLetter(car?.brand)}`}</div>
          <div className="text-lg font-bold m-1">{`Cor - ${capitalizeFirstLetter(
            car.color
          )}`}</div>
          <div className="text-lg font-bold m-1">{`Preço - ${formattedPrice(
            car.price || 0
          )}`}</div>
          <div className="mt-20 flex justify-between w-full">
            <Button onClick={handleFinance}>Financie</Button>
            <Button onClick={handleDelete}>Excluir</Button>
          </div>
        </div>
      )}
    </>
  );
}
