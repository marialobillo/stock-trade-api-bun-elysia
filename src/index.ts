import { Elysia } from "elysia";

const PORT = process.env.PORT || 3030;


const start = async () => {
  try {
    
    const app = new Elysia()
      .get("/", () => "Hello Elysia")
      .listen(PORT);

      console.log(`\n ### 🦊 Elysia is running at ${app?.server?.hostname}:${app?.server?.port} ###`)
  } catch (error) {
    console.log("XXX Error during server connection: ", error)
  }
}

start();


