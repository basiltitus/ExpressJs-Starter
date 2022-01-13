const express=require("express")
const dotenv=require("dotenv")
const v1=require("./routes/v1")
const logger=require('./middlewares/logger')
const morgan=require("morgan")
const app=express()
app.use(express.json())
const connectDb=require("./config/db")
const connectDB = require("./config/db")
dotenv.config({path:"./config/config.env"})

connectDB();

// app.use(logger);
app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to "+process.env.APP_NAME )
})

app.use("/api/v1",v1);

app.listen(process.env.PORT,console.log("App listening to "+process.env.PORT))