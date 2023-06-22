import Button from '../common/Button';

const Card1 = ({ image, name }) => {
	return (
		<div>
			<img src={image} alt="" className="w-full h-full bg-cover bg-center" />
			<h1 className="py-3 text-center font-lato text-base font-semibold">
				{name}
			</h1>
			<div className="text-center">
				<Button />
			</div>
		</div>
	);
};

export default Card1;
