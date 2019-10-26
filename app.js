const express=require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

require('dotenv/config');

app.use(bodyParser.json());
app.use(express.json({extended:false}))

// Import Routes 
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute)
app.use(cors())


//Middleware

// app.use('/posts',()=>{
//     console.log('this is a middleware running')
// })

// You have ability to create route

//Route

app.get('/',(req,res)=>{
    res.send("We are home")
})

// app.get('/posts',(req,res)=>{
//     res.send('we are at posts')
// })

//How to connect to Db
// mongoose.connect(
//     'mongodb+srv://sandeep:<sandeep3>@cluster0-j4kyz.mongodb.net/test?retryWrites=true&w=majority',
//     { useNewUrlParser: true },
//     () => console.log('connected to db')
// );

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
);

//How to start listening

app.listen(3001);

