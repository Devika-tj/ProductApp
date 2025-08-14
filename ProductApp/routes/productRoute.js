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
//  router.delete('/delete/:id', async (req, res) => {
//     await productSchema.findByIdAndDelete(req.params.id);
//     res.redirect('/');
// });


module.exports = router;