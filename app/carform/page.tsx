"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { createCar } from "../../utils/actions";

interface ICarFormData {
  brand: string;
  model: string;
  color: string;
  license: string;
  price: number;
  image: string;
}

export default function CarForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useRouter();

  async function onSubmit(data: ICarFormData) {
    await createCar(data);

    navigation.push("/");
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-blue-200 p-8 rounded-md shadow-md mt-5">
        <h2 className="text-2xl font-bold mb-4">Cadastrar novo carro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-semibold mb-1">
              Marca
            </label>
            <input
              type="text"
              id="brand"
              {...register("brand", { required: "Campo marca é obrigatório" })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.brand && (
              <p className="text-red-500 mt-1">{errors.brand.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="model" className="block text-sm font-semibold mb-1">
              Modelo
            </label>
            <input
              type="text"
              id="model"
              {...register("model", { required: "Campo modelo é obrigatório" })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.model && (
              <p className="text-red-500 mt-1">{errors.model.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-sm font-semibold mb-1">
              Cor
            </label>
            <input
              type="text"
              id="color"
              {...register("color", { required: "Campo cor é obrigatório" })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.color && (
              <p className="text-red-500 mt-1">{errors.color.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="license"
              className="block text-sm font-semibold mb-1"
            >
              Placa
            </label>
            <input
              type="text"
              id="license"
              {...register("license", {
                required: "Campo placa é obrigatório",
              })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.license && (
              <p className="text-red-500 mt-1">{errors.license.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-semibold mb-1">
              Preço
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: "Campo preço é obrigatório" })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.price && (
              <p className="text-red-500 mt-1">{errors.price.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold mb-1">
              Url da foto
            </label>
            <input
              type="text"
              id="image"
              {...register("image", { required: "Campo imagem é obrigatório" })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}
