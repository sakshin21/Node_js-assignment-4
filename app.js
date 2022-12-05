const express=require('express');
const mongoose=require('mongoose');
const PORT=2000;
const app=express();
const exphbs=require('ejs');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const connectionString="mongodb://127.0.0.1/myproductdb";
mongoose
  .connect(connectionString)
  .then(res=> console.log("Database Connected"))
  .catch(err=> console.log("Error : "+err))

const mainRoutes=require('./index');
app.use("/",mainRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work On ${PORT}`)
})