const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const { router } = require("./routes/studentRoutes");

const server = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/university");
  console.log("db coneected");
}

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());
server.use("/api", router);

server.listen(8080, () => {
  console.log("sever listening at port 8080");
});
