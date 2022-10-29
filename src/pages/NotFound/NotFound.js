import { Link } from "react-router-dom";
import ImageNotFound from "../../images/plano-manutencao.webp";
export const NotFound = () => {
	return (
		<main className="flex flex-col items-center justify-center py-8 min-h-not">
			<h2 className="text-center text-3xl uppercase mb-10">
				Página não encontrada
			</h2>
			<Link to="/" className="uppercase mb-10 text-blue-800 font-bold">
				clique aqui para voltar na página inicial
			</Link>
			<img
				src={ImageNotFound}
				alt="Página não encontrada"
				className="w-96"
			/>
		</main>
	);
};
