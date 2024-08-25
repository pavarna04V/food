import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pavarna04:XS4SjDt5dglUp7po@cluster0.nfq3d.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}