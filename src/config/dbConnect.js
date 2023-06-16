import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rafaelFerSilva:Ads784512@alura.crkxjdh.mongodb.net/alura")
let db = mongoose.connection
export default db
