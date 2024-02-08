import { NextRequest, NextResponse } from "next/server";

import { connectToDb } from "../../../../utils/utils";
import { Car } from "../../../../utils/models";

export async function GET(req: NextRequest) {
  await connectToDb();

  const searchParams = req.nextUrl.searchParams;
  const license = searchParams.get("license");

  try {
    const car = await Car.findOne({ license });
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json({
      message: error,
      sucess: false,
    });
  }
}

export async function DELETE(req: NextRequest) {
  await connectToDb();

  const searchParams = req.nextUrl.searchParams;
  const license = searchParams.get("license");

  try {
    const deletedCar = await Car.findOneAndDelete({ license });

    return NextResponse.json({
      message: "Car created successfully",
      sucess: true,
      deletedCar,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      sucess: false,
    });
  }
}
