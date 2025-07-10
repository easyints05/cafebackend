import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpassword = encodeURIComponent(process.env.DBPASSWORD);

mongoose.connect(`mongodb+srv://${dbuser}:${dbpassword}@cluster0.llljuvp.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
  app.listen(8081, () => {
    console.log("Server started at port 8081");
  });
});
app.use("/api/users", userRouter);