"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const response = await deleteCar(license);

    if (response.success === true) {
      toast.success("Carro deletado com sucesso");
      setTimeout(function () {
        navigation.push("/");
      }, 1000);
      return;
    }
    toast.error("Algo deu errado");
  }

  function handleFinance() {
    navigation.push("/finance");
  }

  return (
    <>
      <ToastContainer />
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
