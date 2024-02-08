import { NextRequest, NextResponse } from "next/server";
import { calculateCredit } from "../../../utils/utils";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { name } = reqBody;

  function generateRandomNumber() {
    return Math.floor(Math.random() * 999) + 1;
  }

  const score = generateRandomNumber();

  const result = calculateCredit(score);

  return NextResponse.json({
    sucess: true,
    message: `${name}, ${result}}`,
  });
}
