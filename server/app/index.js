// Entry point for the application
import express from "express";
import config from "./config.js";
import router from "./router.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});




app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
