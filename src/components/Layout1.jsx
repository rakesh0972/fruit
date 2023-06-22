import { Grid } from '@mantine/core';
import Card1 from './Card1';
const Layout1 = () => {
	return (
		<div className="px-2 pt-12 md:w-[80%] md:mx-auto">
			<Grid grow gutter="xs">
				<Grid.Col span={3}>
					<Card1 name={'Vegetables'} image={'./veg.png'} />
				</Grid.Col>
				<Grid.Col span={3}>
					<Card1 name={'Fruits'} image={'./f1.png'} />
				</Grid.Col>
			</Grid>
		</div>
	);
};

export default Layout1;
