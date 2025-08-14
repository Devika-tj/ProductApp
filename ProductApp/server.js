const express=require('express')
const app=express()
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()
const connectDB=require('./db/connection')
const userRoutes = require('./routes/userRoute');
const productRoutes=require('./routes/productRoute')
const PORT=process.env.PORT||3000
connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/products',productRoutes)
app.use('/user',userRoutes)



app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})