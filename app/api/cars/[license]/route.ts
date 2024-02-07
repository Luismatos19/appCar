import { NextApiRequest, NextApiResponse } from "next";

import { connectToDb } from "../../../../utils/utils";
import { Car } from "../../../../utils/models";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectToDb();

  switch (method) {
    case "GET":
      return getCarByLicense(req, res);
    case "DELETE":
      return deleteCarByLicense(req, res);
    default:
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      break;
  }
}

async function getCarByLicense(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { license } = req.query;
    const car = await Car.findOne({ license });
    console.log(res);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({ success: true, data: car });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

async function deleteCarByLicense(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { license } = req.query;
    const deletedCar = await Car.findOneAndDelete({ license });
    if (!deletedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Car deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
