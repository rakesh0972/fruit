import { Badge } from '@mantine/core';
const Footer = () => {
	return (
		<>
			<div className=" font-inter md:w-[80%] md:mx-auto  md:py-16 md:flex md:justify-center px-3 ">
				<div className="py-16 md:py-1">
					<img src="Logo.png" className="pb-2" />
					<p className="text-gray font-normal text-base ">
						Design amazing digital experiences that create more happy in the
						world.
					</p>
				</div>

				<div className="md:flex md:flex-row-reverse ">
					<div className="pb-9">
						<h1 className="text-black font-semibold text-sm pb-2">
							Stay up to date
						</h1>
						<div className="flex flex-col gap-3 md:flex-row ">
							<input
								type="email"
								placeholder="Enter your email"
								className=" py-2  border border-gray-light px-3 rounded-md"
							/>
							<button
								type="submit"
								className="bg-blue text-white py-2 px-5 rounded-md "
							>
								Subscribe
							</button>
						</div>
					</div>
					<div className="flex md:gap-9 md:px-12 justify-between">
						<div className="first w-[50%] ">
							<h1 className=" text-black font-semibold  text-sm pb-2">
								Product
							</h1>
							<ul className="text-nav font-medium  text-base flex flex-col gap-2 cursor-pointer">
								<a>Overview</a>
								<a>Features</a>
								<a>
									Solutions
									<span className="bg-[#b3eed5] ml-1 text-[#027A48] rounded-lg px-2 py-1 ">
										New
									</span>
								</a>
								<a>Tutorials</a>
								<a>Pricing</a>
								<a>Releases</a>
							</ul>
						</div>
						<div className="second w-[50%]">
							<h1 className=" text-black font-semibold text-sm pb-2">
								Resources
							</h1>
							<ul className="text-nav  font-medium text-base flex flex-col gap-2  cursor-pointer">
								<a>Blog</a>
								<a>Newsletter</a>
								<a>Events</a>
								<a>Help centre</a>
								<a>Tutorials</a>
								<a>Support</a>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="md:hidden">
				<div>
					<hr className="text-gray-light my-6" />
					<div className="text-gray-light flex gap-4 py-3 justify-center">
						<p>Terms</p>
						<p>Privacy</p>
						<p>Cookies</p>
					</div>
				</div>
				<p className="text-gray-light text-center pb-36 ">
					© 2077 Untitled UI. All rights reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
