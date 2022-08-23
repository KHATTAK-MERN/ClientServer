const express = require("express");
const authRouter = require("./Routers/index");
const connectingDataBase = require("./MongoDB Connection");
require("dotenv").config();
const cors = require("cors");

const app = express();
connectingDataBase();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(process.env.PORT, () => console.log("Server Started"));
