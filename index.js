const {response}=require('express');
const express=require('express');
const {SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct}=require('./controllers/productsController');
const router=express.Router();

router.get("/",(req,res)=>{
     res.send("Mongoose Crud Implementation");
});

router.get("/addproduct",(req,res)=>{
     res.render("addproduct");
});

router.get("/home",getAllProduct);
router.post("/addproduct1",SaveProduct);
router.get('/editproduct/:id',getProductById);
router.get("/deleteproduct/:id",deleteProduct);
router.get("/getproducts",getAllProduct);
router.post("/editproduct1/:id",updateProduct);

module.exports=router;