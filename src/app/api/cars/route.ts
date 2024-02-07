import { NextResponse } from "next/server";

import { Car } from "../../../../utils/models";
import { connectToDb } from "../../../../utils/utils";

export async function GET() {
  try {
    connectToDb();
    const cars = await Car.find();
    return NextResponse.json(cars);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch cars!");
  }
}
