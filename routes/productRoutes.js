import express from 'express';
import asyncHandler from 'express-async-handler'
const router = express.Router();
import Product from '../models/productModel.js'

router.get('/', asyncHandler(async (req, res) => {
    const product = await Product.find({})
    res.status(200).send(product)

}))
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).json({ message: "product not find" })
    }
}))
export default router;