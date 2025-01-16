const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes=require("./routes/user.routes");
const captainRoutes=require("./routes/captain.routes");
const connectDB = require("./db/db");
connectDB();
// app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());


app.use('/users',userRoutes);
app.use('/captain',captainRoutes);

module.exports = app;
