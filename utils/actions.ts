import { Car } from "./models";
import { connectToDb } from "./utils";

export async function deleteCar(license: string) {
  try {
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
}
