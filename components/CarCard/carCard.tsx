// @ts-ignore
import { useRouter } from "next/navigation";
import { Button } from "../Button/button";
import { deleteCar } from "../../utils/actions";

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

  function handleDelete() {
    deleteCar(car.license);
  }
  return (
    <>
      <div className="border-2 rounded-md border-blue-700 m-4 w-80 flex flex-col items-center ">
        <img
          src={car.image}
          width={400}
          height={200}
          className="rounded-md shadow-lg"
          onClick={handleCarClick}
        />
        <div className="text-lg font-bold m-0">{`${car.model} - ${car.brand}`}</div>
        <div className="text-lg font-bold m-0">{`Cor - ${car.color}`}</div>
        <div className="text-lg font-bold m-0">{`Placa - ${car.license}`}</div>
        <div className="text-lg font-bold m-0 mb-2">
          {`Preço - ${formattedPrice(car.price)}`}
        </div>
        <Button onClick={handleDelete}>Excluir</Button>
      </div>
    </>
  );
}