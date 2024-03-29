"use server";
import { NextApiRequest, NextApiResponse } from "next";

import { Car } from "../../../utils/models";
import { connectToDb } from "../../../utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDb();

  try {
    const cars = await Car.find();
    return NextResponse.json(cars);
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      success: false,
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  await connectToDb();

  try {
    const reqBody = await req.json();
    const { brand, model, color, license, price, image } = reqBody;
    await Car.create({
      brand,
      model,
      color,
      license,
      price,
      image,
    });
    return NextResponse.json({
      message: "Car created successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      success: false,
    });
  }
}
