const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const imageRoute = require("./routes/images")
const cors = require("cors");
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
app.use(cors());
app.get('/' , (req,res) =>{
    res.send("Hello world") 
})


// connect db

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB);   
        console.log("connected");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected" , () =>{
    console.log("disconnected");
});
mongoose.connection.on("connected" , () =>{
    console.log("connected");
});
app.use('/api/v1/all' , imageRoute)

app.use(express.json({ limit: "3mb" }));

app.listen(port ,() =>{
    connect();
    console.log(`Listening from ${port}`);
});