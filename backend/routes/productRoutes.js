import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// GET all products
router.get(
  '/',
  asyncHandler(async (request, response) => {
    const products = await Product.find({})
    response.json(products)
  })
)

// GET single product
router.get(
  '/:id',
  asyncHandler(async (request, response) => {
    const product = await Product.findById(request.params.id)

    if (product) {
      response.json(product)
    } else {
      response.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
