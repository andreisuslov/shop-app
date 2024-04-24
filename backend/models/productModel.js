import mongoose from 'mongoose';

// put this var above productSchema to avoid "ReferenceError: Cannot access 'reviewSchema' before initialization"
const reviewSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const productSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		}, // ref is the name of the model that we want to reference
		name: { type: String, required: true, unique: true },
		image: { type: String, required: true },
		brand: { type: String, required: true },
		category: { type: String, required: true },
		description: { type: String, required: true },
		reviews: [reviewSchema],
		price: { type: Number, required: true },
		countInStock: { type: Number, required: true },
		rating: { type: Number, required: true },
		numReviews: { type: Number, required: true },
	},
	{
		timestamps: true,
	},
);

const Product = mongoose.model('Product', productSchema);

export default Product;
