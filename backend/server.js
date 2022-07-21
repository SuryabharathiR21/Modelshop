const express = require('express');
const app = express();
const mongoose= require('mongoose');
const bodyParser =require('body-parser');
require('dotenv/config')
const productsData = require('./data/products');
//const DB = require('./routes/posts');
const products = require('./models/post')
const cors = require('cors') 
app.use(cors({
  origin: "*",
}))
app.use(bodyParser.json());
//import routes 
const postsRoute= require('./routes/posts');

app.use("/posts",postsRoute); 
//routes
app.get('/',(req, res)=>{
 res.send ('home'); 
});

//connect to DB
mongoose.connect (process.env.DB_URI,
  {useNewUrlParser: true},
  () =>
   console.log('Connection success') 
   );

const importdata = async () => {
  try {
      await products.deleteMany({});

      await products.insertMany(productsData);

      console.log("Data imported")

  } catch (error) {
      console.error("error with import ");
      process.exit(1);
  }
};

 

app.listen(process.env.PORT, () => console.log("Listening at", process.env.PORT))

importdata();


