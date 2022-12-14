import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set('strictQuery', true)

const MONGO_URL = process.env.MONGO_URL;

export const db = {
  _init: async () => {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log(`Connected to database succesfully...`);
    !conn && console.log(`Error has occured...`);
  },
};
