import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
	/* We use useState() to create a state variable to store the products. */
	const [products, setProducts] = useState([]);

	/* In React, we use useEffect() to run code when a component mounts or unmounts. 
	In this case, we use it to fetch products from the API and set them in the state. 
	An empty array as the second argument ensures that the effect runs only once when the component mounts.
	*/
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('/api/products');
			const data = await response.json();
			setProducts(data);
		};
		fetchProducts();
	}, []);
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{/* Now the variable products pertains to this piece of state, so we can map over it. */}
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
