const CartAdded = ({ image, name, price }) => {
	return (
		<div className="pb-4">
			<div className="flex w-full justify-between px-4">
				<img
					src={image}
					alt=""
					className="w-[20%] h-[20%] bg-cover bg-center"
				/>

				<h1 className="font-lato text-lg font-bold ">{name}</h1>
				<p className="font-lato text-lg font-medium ">${price}</p>
			</div>
		</div>
	);
};

export default CartAdded;
