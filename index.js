const mongoose = require('mongoose');
const cors = require('cors') 
const path = require('path')
// const { Schema } = 'mongoose'
require('dotenv').config()
const express = require('express')
var morgan = require('morgan')
const app = express()




// ..db mongoose.connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(`mongodb+srv://Arun_koli:keRb62elbf1vrhyX@cluster0.xm7u3s2.mongodb.net/ecommerce_DBS?retryWrites=true&w=majority`);
    console.log('db connected')
}

app.use(cors())
const proRouter = require('./routes/product')
app.use(express.json())
app.use(morgan('common'))
app.use(express.static(path.resolve(__dirname ,process.env.dist)))
app.use('/products', proRouter.routes)
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname , 'dist','index.html'))
})


// API - ENDpoint -Route


// Create POST API   /product      *****{C R U D}*****


app.listen(8080, () => {
    console.log("server starting")

})








// 
// mongodb Database Access            
// user = puneet123   

// QeDReCMyGaQBu5Dv
