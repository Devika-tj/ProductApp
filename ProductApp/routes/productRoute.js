const express=require('express')
const router= express.Router();
const productSchema = require('../models/productdata');
const jwt=require('jsonwebtoken')

function verifyToken(req,res,next){
  let token=req.headers.token
  try{
    if(!token)throw 'Unauthorized Access'
    let payload=jwt.verify(token,"secret")
    if(!payload) throw 'Unauthorized Access'
    next()
  }catch(err){
    res.json({message:err})
  }
  }

router.get('/', async (req, res) => {
  try {
    const products = await productSchema.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
router.post("/add", verifyToken,async (req, res) => {
  try {
    const newProduct = new productSchema(req.body); 
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});
router.delete('/delete/:id',verifyToken, async (req, res) => {
  try {
    const deletedProduct = await blogSchema.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully', deletedProduct });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete Product' });
  }
});

// PUT
router.put('/update/:id',verifyToken, async (req, res) => {
  try {
    const updatedProduct = await productSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update Product' });
  }
});



module.exports = router;