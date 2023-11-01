import { render } from 'preact';
import "./index.css";
import ProductCard from './components/ProductCard';

export function App() {
	const products = [
		{
			name: "Tênis de corrida Nike preto e branco",
			price: "R$ 129,90",
			originalPrice: "R$ 159,90",
			imageUrl: "https://imgnike-a.akamaihd.net/1920x1920/012350ID.jpg"
		},
		{
			name: "Moletom Adidas bege simples",
			price: "R$ 59,90",
			originalPrice: "R$ 99,90",
			imageUrl:
				"https://www.amilesportes.com.br/lojas/00044767/prod/059839-1.jpg"
		}
	];

	return (
		<div class='bg-zinc-300 min-h-full'>
			<h1 class="pt-4 font-bold text-xl m-4">Lojinha</h1>
			<div class="flex flex-nowrap">
				{products.map((prd) => (
					<ProductCard
						imageUrl={prd.imageUrl}
						name={prd.name}
						price={prd.price}
						originalPrice={prd.originalPrice}
					/>
				))}
			</div>
		</div>
	);
};


render(<App />, document.getElementById('app'));
