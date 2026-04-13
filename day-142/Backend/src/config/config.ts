import dotenv from "dotenv";

dotenv.config();

type config = {
   readonly MONGO_URI: String
};

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not set");
}


export const config: config = {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/snitch"
};