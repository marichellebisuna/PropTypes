import React from 'react';
import Product from '../components/Product';
import { ProductConsumer } from '../context/context';


export default function FeaturedProduct() {
	return (
		<section className="py-5">
			<div className="container">
				<h1>Featured Products</h1>
				<div className="row my-5">
					<ProductConsumer>
						{(value) => {
							const { featuredProducts } = value;

							return featuredProducts.map((product) => {
								return <Product key={product.id} product={product} />;
							});
						}}
					</ProductConsumer>
				</div>
			</div>
		</section>
	);
}
