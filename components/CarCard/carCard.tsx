// @ts-ignore
import { useRouter } from "next/navigation";

import { Button } from "../Button/button";
import { capitalizeFirstLetter } from "../../utils/utils";

interface ICarCardProps {
  car: ICar;
}

export function CarCard({ car }: ICarCardProps) {
  const navigation = useRouter();

  function formattedPrice(price: number) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function handleCarClick() {
    navigation.push(`car?license=${car.license}`);
  }

  return (
    <>
      {car && (
        <div className="border-2 pb-3 rounded-md border-blue-700 m-4 w-80 flex flex-col items-center ">
          <img
            src={car.image}
            className="rounded-t-md shadow-lg w-full h-40 object-cover"
            onClick={handleCarClick}
          />

          <div className="text-lg font-bold m-0">{`${capitalizeFirstLetter(
            car.model
          )} - ${capitalizeFirstLetter(car.brand)}`}</div>
          <div className="text-lg font-bold m-0">{`Cor - ${capitalizeFirstLetter(
            car.color
          )}`}</div>
          <div className="text-lg font-bold m-0">{`Placa - ${car.license}`}</div>
          <div className="text-lg font-bold m-0 mb-2">
            {`Preço - ${formattedPrice(car.price)}`}
          </div>
          <Button onClick={handleCarClick}>VER</Button>
        </div>
      )}
    </>
  );
}
