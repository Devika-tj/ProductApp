const express=require('express')
const router= express.Router();
const productSchema = require('../models/productdata');

router.get('/', async (req, res) => {
  try {
    const products = await productSchema.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
router.post("/add", async (req, res) => {
  try {
    const newProduct = new productSchema(req.body); 
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});
router.delete('/delete/:id', async (req, res) => {
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
router.put('/update/:id', async (req, res) => {
  try {
    const updatedProduct = await blogSchema.findByIdAndUpdate(
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