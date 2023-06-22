import { createContext, useState } from 'react';
const CartContext = createContext();

export function CartProvider({ children }) {
	const [item, setItem] = useState([]);

	const addToCart = (name, price, image) => {
		setItem((prev) => [...prev, { name, price, image }]);
	};

	return (
		<CartContext.Provider value={{ item, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
