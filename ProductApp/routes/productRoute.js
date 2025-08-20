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
<<<<<<< HEAD
router.delete('/delete/:id',verifyToken, async (req, res) => {
=======
router.delete('/delete/:id', async (req, res) => {
>>>>>>> 33d1279b0e11cf04a788b1abfdaf908c2a0467da
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
<<<<<<< HEAD
router.put('/update/:id',verifyToken, async (req, res) => {
  try {
    const updatedProduct = await productSchema.findByIdAndUpdate(
=======
router.put('/update/:id', async (req, res) => {
  try {
    const updatedProduct = await blogSchema.findByIdAndUpdate(
>>>>>>> 33d1279b0e11cf04a788b1abfdaf908c2a0467da
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
<<<<<<< HEAD

=======
>>>>>>> 33d1279b0e11cf04a788b1abfdaf908c2a0467da


module.exports = router;
