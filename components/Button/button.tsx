import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: IButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
