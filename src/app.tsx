import RewardCard from "./components/RewardCard";

export function App() {
  const rewards = [
		{
			name: "Camisa Nike Academy",
			coins: 400,
			imageUrl: "https://static.netshoes.com.br/produtos/camisa-nike-academy-dri-fit-masculina/75/HZM-4815-775/HZM-4815-775_zoom1.jpg?ts=1626390141&ims=544x"
		},
		{
			name: "Relógio Digital Led",
			coins: 700,
			imageUrl:
				"https://images-americanas.b2w.io/produtos/5622048519/imagens/pulseira-inteligente-xiaomi-mi-smart-band-7-preto-m2129b1/5622048527_1_large.jpg"
		},
		{
			name: "Fone de Ouvido JBL Reflect",
			coins: 1200,
			imageUrl:
				"https://images-americanas.b2w.io/produtos/5526927513/imagens/fones-de-ouvido-bluetooth-s-fio-air-dots/5526927513_1_large.jpg"
		}
	];

	return (
		<div class='bg-white min-h-full'>
			<h1 class="pt-4 font-bold text-xl m-4">Lojinha</h1>
			<div class="flex flex-nowrap">
				{rewards.map(rw => 
					<RewardCard 
					name={rw.name}
					coins={rw.coins}
					imageUrl={rw.imageUrl}
				/>
				)}
					
			</div>
		</div>
	);
}
