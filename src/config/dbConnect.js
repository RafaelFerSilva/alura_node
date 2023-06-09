import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rafafersilva:Ads784512@cluster0.xtai3ej.mongodb.net/?retryWrites=true&w=majority")
let db = mongoose.connection
export default db
