import { Grid } from '@mantine/core';
import Card2 from './Card2';
const Layout2 = () => {
	return (
		<div className="px-2 py-9  md:w-[80%] md:mx-auto">
			<h1 className="text-center  py-6 md:py-12 font-inter text-lg font-medium md:text-3xl">
				Fruits
			</h1>
			<Grid gutter="xs">
				<Grid.Col span={6} xs={12} sm={6} md={3}>
					<Card2 name={'apple'} price={250} image={'./f5.png'} />
				</Grid.Col>
				<Grid.Col span={6} xs={12} sm={6} md={3}>
					<Card2 name={'bananas'} price={20} image={'./f2.png'} />
				</Grid.Col>
				<Grid.Col span={6} xs={12} sm={6} md={3}>
					<Card2 name={'oranges'} price={120} image={'./f3.png'} />
				</Grid.Col>
				<Grid.Col span={6} xs={12} sm={6} md={3}>
					<Card2 name={'mangoes'} price={620} image={'./f4.png'} />
				</Grid.Col>
			</Grid>
		</div>
	);
};

export default Layout2;
