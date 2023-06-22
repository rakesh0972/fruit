import { Carousel } from '@mantine/carousel';
import Button from '../common/Button';
const Main = () => {
	const images = [
		'./back.png',
		'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		'https://images.unsplash.com/photo-1455099229380-7b52707e356a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
	];
	return (
		<div className="">
			<Carousel withControls={true} withIndicators className="relative p-3 ">
				{images.map((image, i) => {
					return (
						<Carousel.Slide key={i} className="rounded-sm">
							<div className="absolute top-[45%] left-3  transform  -translate-y-1/2 text-white font-lato md:left-28 md:mx-auto">
								<h1 className="md:text-4xl md:pb-8  pb-2 font-normal text-sm">
									Now Offering
								</h1>
								<h1 className="md:text-7xl md:pb-8 pb-2 font-bold text-lg">
									FREE Home Deliveries
								</h1>
								<h1 className="md:text-4xl md:pb-8 pb-2 font-normal text-sm">
									Fresh Products to your door
								</h1>
								<Button />
							</div>
							<img
								src={image}
								alt=""
								className=" h-full w-full bg-cover rounded-sm "
							/>
							<div className="absolute inset-0 bg-black opacity-20 "></div>
						</Carousel.Slide>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Main;
