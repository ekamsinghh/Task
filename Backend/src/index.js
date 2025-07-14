const express=require('express');
const app = express();
const cors = require('cors');
const { PORT } = require('./config/index');
//For body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middlware setup for cross origin requests
app.use(cors({
    origin: "*",// Allows the requests from all the origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]// if we don't define or set these two are the default values
}));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});