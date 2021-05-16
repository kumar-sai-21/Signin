const express=require('express');
const app= express();
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const routesurf= require('./routes/routes')
const cors = require('cors');
dotenv.config()
mongoose.connect(process.env.database_access,()=>console.log("Database connection established"))


app.use(express.json())
app.use(cors())
app.use('/app',routesurf)
app.listen(4000,()=>console.log("Server is Running"))

