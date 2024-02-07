import { NextApiRequest, NextApiResponse } from "next";

import { Car } from "../../../utils/models";
import { connectToDb } from "../../../utils/utils";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectToDb();

  if (req.method === "GET") {
    return getAllCars(req, res);
  } else if (req.method === "POST") {
    return createCar(req, res);
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}

async function getAllCars(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cars = await Car.find();
    return NextResponse.json(cars);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

async function createCar(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { brand, model, color, license, price, image } = req.body;
    const newCar = await Car.create({
      brand,
      model,
      color,
      license,
      price,
      image,
    });
    res.status(201).json({ success: true, data: newCar });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
