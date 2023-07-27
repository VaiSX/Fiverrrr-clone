import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set('strictQuery',true)

const connect = async ()=>{
try {
    await mongoose.connect('mongodb+srv://VaiS:pass@cluster0.ssaaftr.mongodb.net/?retryWrites=true&w=majority');
  console.log("Connected to mongoDB!")  
} catch (error) {
    console.log(error);
  }
}

app.listen(8000,()=>{
    connect();
    console.log("Backend running")
});