import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Layout2 from './components/Layout2';
import Layout1 from './components/Layout1';
import Main from './components/Main';
import { CartProvider } from './components/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
	return (
		<>
			<BrowserRouter>
				<CartProvider>
					<Nav />

					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/cart" element={<Cart />} />
					</Routes>

					<Footer />
				</CartProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
