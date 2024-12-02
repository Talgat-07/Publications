import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./router.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const port = 8080;
const DB_URL = `mongodb+srv://talakv07:tala-1221@cluster0.bx9nq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}`)
    );
  } catch (e) {
    console.log(e);
  }
};

startApp();
