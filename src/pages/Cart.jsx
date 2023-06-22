import { useContext, useState, useEffect } from 'react';
import CartAdded from '../components/CartAdded';
import CartContext from '../components/CartContext';
import { Grid } from '@mantine/core';

const cart = () => {
	const { item } = useContext(CartContext);
	let [totalCost, setTotalCost] = useState(0);
	useEffect(() => {
		// Calculate total cost whenever item change

		item.forEach((product) => {
			totalCost += product.price;
		});

		setTotalCost(totalCost);
		console.log(totalCost);
	}, [item]);

	return (
		<div className="md:w-[80%] mx-auto">
			<h1 className="font-lato text-4xl font-semibold text-center py-9">
				Cart Items
			</h1>
			{item.length == 0 && (
				<h1 className="font-lato text-2xl font-medium text-center py-9">
					NO items in Cart
				</h1>
			)}
			{item.map((fruit, i) => {
				return (
					<CartAdded
						key={i}
						name={fruit.name}
						image={fruit.image}
						price={fruit.price}
					/>
				);
			})}

			<div className="font-lato text-2xl font-semibold text-right py-9 px-4">
				Total cost is ${totalCost}
			</div>
		</div>
	);
};
export default cart;
