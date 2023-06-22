import Button from '../common/Button';

const Banner = () => {
	return (
		<div className="mt-3">
			<section
				className="w-full px-lg flex items-center h-[30vh] "
				style={{
					backgroundImage: `url(banner.png)`,
					// height: '40vh',

					backgroundSize: 'cover',
					backgroundPosition: 'center',
					// backgroundAttachment: 'fixed',
					// minHeight: '400px',
				}}
			>
				<div className="px-3 md:w-[80%] md:mx-auto">
					<h1 className="font-lato font-bold text-lg text-white pb-4">
						Buy 2 and get 20% OFF
					</h1>
					<Button />
				</div>
			</section>
		</div>
	);
};

export default Banner;
