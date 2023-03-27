import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vinicios:Mudar123@vinicios.g0neia0.mongodb.net/vinicios-node");

let db = mongoose.connection;

export default db