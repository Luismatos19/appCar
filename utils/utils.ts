import mongoose from "mongoose";

const connection: any = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.DATABASE_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export function formattedPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function calculateCredit(score: number) {
  switch (true) {
    case score >= 1 && score <= 299:
      return "Sua analise de credito foi Reprovada";
    case score >= 300 && score <= 599:
      return "Sua analise de credito foi Aprovada, condições: 70% de entrada, 30% do comprometimento da renda";
    case score >= 600 && score <= 799:
      return "Sua analise de credito foi Aprovada, condições: 50% de entrada, 25% do comprometimento da renda";
    case score >= 800 && score <= 950:
      return "Sua analise de credito foi Aprovada, condições: 30% de entrada, 20% do comprometimento da renda";
    case score >= 951 && score <= 999:
      return "Sua analise de credito foi Aprovada, condições: 100% de financiamento, taxa zero";
    default:
      return "Score inválido";
  }
}
