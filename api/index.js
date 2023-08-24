const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const noticeRoute = require("./routers/notice");
const getNoticeRoute = require("./routers/getnotice");
const getSingltNoticeRoute = require("./routers/singlenotice");
const delupNoticeRoute = require("./routers/delupnotice");
const regLogRouter = require("./routers/reglog");

dotenv.config();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

mongoose.connect('mongodb://localhost:27017/Nist')
.then(console.log("Successfully connected to database"))
.catch(err => console.log(err));


app.use("/",noticeRoute);
app.use("/",getNoticeRoute);
app.use("/",getSingltNoticeRoute);
app.use("/",delupNoticeRoute);
app.use("/",regLogRouter);




app.listen('5000',() => {
    console.log("Server running at port 5000");
});
