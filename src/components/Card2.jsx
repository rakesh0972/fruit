import { useState, useContext } from 'react';
import CartContext from './CartContext';

const Card2 = ({ name, price, image }) => {
	const [color, setColor] = useState('#DC0D0D');
	const [textcolor, settextColor] = useState('white');
	const [text, setText] = useState('Add to cart');
	const { addToCart } = useContext(CartContext);
	const handle = () => {
		setText('Added to cart');
		setColor('');
		settextColor('#98A2B3');
		addToCart(name, price, image);
	};

	return (
		<div className="rounded-lg border border-gray-light min-w-min  ">
			<img src={image} alt="" className="w-full h-full bg-cover bg-center" />

			<div className="px-3">
				<h1 className="font-lato text-lg font-bold py-2">{name}</h1>
				<p className="font-lato text-xs font-medium pb-2">${price}</p>
			</div>

			<hr className="text-gray-light" />
			<button
				className=" w-full py-3 "
				style={{
					backgroundColor: color,
					color: 'white',
					borderRadius: '6px',
				}}
				onClick={handle}
			>
				<p
					style={{
						color: textcolor,
					}}
				>
					{text}
				</p>
			</button>
		</div>
	);
};

export default Card2;
