require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
// MIDDLEWARE & MONGO CONNECTION
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.json)
app.use(express.urlencoded({extended:true}));

const eventRouter = require('./controllers/event')
app.use('/event', eventRouter)

const commentRouter = require('./controllers/comments')
app.use('/comment', commentRouter)
// Open the Connection
db.on( 'open' , ()=>{
  console.log('✅ connection made!');
});


// apps 
app.get('/', (req, res) => {
    res.send('this is the home page')
})



app.listen(PORT, ()=> {
    console.log('connection made')
})