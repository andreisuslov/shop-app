import express from 'express';

const router = express.Router();

import asyncHandlerHelper from '../middleware/asyncHandlerHelper.js';

import products from '../data/products.js';

import Product from '../models/productModel.js';

router.get(
	'/',
	asyncHandlerHelper(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	}),
);

router.get(
	'/:id',
	asyncHandlerHelper(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			return res.json(product);
		}
		res.status(404).json({ message: 'Product not found' });
	}),
);

export default router;
