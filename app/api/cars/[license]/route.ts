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
      success: false,
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
      message: "carro deletado com sucesso!",
      success: true,
      deletedCar,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Algo deu errado",
      success: false,
    });
  }
}
