interface IModalPros {
  isOpen: boolean;
  text: string;
  setIsOpen: (condition: boolean) => void;
}

export function Modal({ isOpen, text, setIsOpen }: IModalPros) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded p-4 max-w-sm">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                &#10005;
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">
                Resultado da simulação de financiamento
              </h2>
              <p className="text-gray-700 mb-4">{text}</p>
              <button
                onClick={closeModal}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
