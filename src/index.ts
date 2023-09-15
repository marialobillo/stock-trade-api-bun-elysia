import { Elysia } from "elysia";
import connectDB from "./config/mongo";

const PORT = process.env.PORT || 3030;


const start = async () => {
  try {
    await connectDB();
    const app = new Elysia()
      .get("/", () => "Hello Elysia")
      .listen(PORT);

      console.log(`\n ### 🦊 Elysia is running at ${app?.server?.hostname}:${app?.server?.port} ###`)
  } catch (error) {
    console.log("XXX Error during server connection: ", error)
  }
}

start();


