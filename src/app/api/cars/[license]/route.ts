import { NextRequest, NextResponse } from "next/server";

import { connectToDb } from "../../../../../utils/utils";
import { Car } from "../../../../../utils/models";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const license = searchParams.get("license");
  try {
    connectToDb();
    const car = await Car.find({ license });

    return NextResponse.json(car);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch cars!");
  }
}
