"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { getScore } from "../../utils/actions";
import { Modal } from "../../components/modal/modal";

export default function Finance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const notify = () => toast.error("Notificação simples!");

  async function onSubmit(data) {
    const response = await getScore(data);
    setModalText(response.message);
    setIsModalOpen(true);
  }

  return (
    <>
      <div>
        <button onClick={notify}>Mostrar Notificação</button>
      </div>
      <div className="max-w-md mx-auto bg-blue-200 p-8 rounded-md shadow-md mt-5">
        <h2 className="text-2xl font-bold mb-4">Financiamento</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "O campo nome é obrigatório" })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="cpf" className="block text-sm font-semibold mb-1">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              {...register("cpf", { required: "O campo CPF é obrigatório" })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.cpf && (
              <p className="text-red-500 mt-1">{errors.cpf.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-sm font-semibold mb-1"
            >
              Salario
            </label>
            <input
              type="number"
              id="salary"
              {...register("salary", {
                required: "O campo salario é obrigatório",
              })}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            {errors.salary && (
              <p className="text-red-500 mt-1">{errors.salary.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-semibold mb-1"
            >
              Endereço
            </label>
            <input
              type="text"
              id="address"
              {...register("address")}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-semibold mb-1">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              {...register("city")}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="uf" className="block text-sm font-semibold mb-1">
              UF
            </label>
            <input
              type="text"
              id="uf"
              {...register("uf")}
              className="border border-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          text={modalText}
          setIsOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
