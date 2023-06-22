import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { useContext } from 'react';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';
const Nav = () => {
	const [opened, { open, close }] = useDisclosure(false);

	const { item } = useContext(CartContext);

	return (
		<div className="mb-9 flex justify-center gap-9 bg-white sticky top-0 z-20">
			<>
				<Drawer opened={opened} onClose={close} position="right" size="sm">
					{/* Drawer content */}

					<div className="flex flex-col gap-4 cursor-pointer ">
						<a className="py-2 px-4 hover:bg-black/5">Home</a>
						<a className="py-2 px-4 hover:bg-black/5">Product</a>
						<a className="py-2 px-4 hover:bg-black/5">About us</a>
						<a className="py-2 px-4 hover:bg-black/5">Blog</a>
						<a className="py-2 px-4 hover:bg-black/5">Contact us</a>
					</div>
				</Drawer>

				<div className="flex justify-between md:block md:w-[80%] md:mx-auto md:px-5 py-6 ">
					<div className="flex justify-between">
						<div className="relative hidden md:inline float-left">
							<input
								type="text"
								className="py-2 pl-8 pr-4 rounded-md border  border-gray-light focus:ring-blue-500 focus:border-blue-500"
								placeholder="Search Products"
							/>
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<AiOutlineSearch />
							</div>
						</div>
						<Link
							to="/"
							className="font-lato font-bold text-lg py-2 md:text-center md:inline align-center mr-9 "
						>
							ECOMMERCE
						</Link>
						<Link to="/cart" className="py-2 px-4 text-2xl md:ml-32  flex ">
							<span className=" text-sm pt-1">{item.length}</span>

							<BsCart />
						</Link>
					</div>

					<div className="hidden md:block text-center pt-4 font-lato cursor-pointer font-medium ">
						<a className=" px-4 hover:text-black/60 text-black/90">Home</a>
						<a className=" px-4 hover:text-black/60 text-black/90">Product</a>
						<a className=" px-4 hover:text-black/60 text-black/90">About us</a>
						<a className=" px-4 hover:text-black/60 text-black/90">Blog</a>
						<a className=" px-4 hover:text-black/60 text-black/90">
							Contact us
						</a>
					</div>
					<button onClick={open} className="text-2xl px-4 text-black md:hidden">
						<HiOutlineMenuAlt3 />
					</button>
				</div>
			</>
		</div>
	);
};

export default Nav;
