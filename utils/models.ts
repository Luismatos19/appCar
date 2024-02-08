import mongoose, { Model } from "mongoose";

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      require: true,
      max: 50,
    },
    model: {
      type: String,
      require: true,
      max: 50,
    },
    color: {
      type: String,
      require: true,
      max: 20,
    },
    license: {
      type: String,
      require: true,
      max: 10,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Car: Model<ICar[]> =
  mongoose.models?.Car || mongoose.model("Car", carSchema);
