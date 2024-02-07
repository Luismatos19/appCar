import { Button } from "@/components/Button/button";
import { getCarById } from "../../../utils/data";
import { formattedPrice } from "../../../utils/utils";

interface iCarProps {
  license: string;
}

export default async function CarDetails({ license }: iCarProps) {
  const response = await getCarById(license);
  const car = response[0];

  return (
    <>
      <div className="container none m-0-auto flex items-center flex-col p-5">
        <img
          src={car.image}
          width={600}
          height={400}
          className="rounded-md shadow-lg"
        />
        <div className="text-lg font-bold m-0">{`${car.model} - ${car.brand}`}</div>
        <div className="text-lg font-bold m-0">{`Cor - ${car.color}`}</div>
        <div className="text-lg font-bold m-0">{`Preço - ${formattedPrice(
          car.price
        )}`}</div>
        <div className="mt-5">
          <Button>Financie</Button>
        </div>
      </div>
    </>
  );
}
