const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/index");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb+srv://asrulkadir:PE7o2I8OicNNdNbf@cluster0.hcjb7.mongodb.net/myDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on('error', (error => console.error(error)));
db.once('open', () => console.log("Database Connected"));

app.use(cors());
app.use(express.json());
app.use('/product', route);

app.listen("4000", () => console.log("Server Running at port: 4000"))