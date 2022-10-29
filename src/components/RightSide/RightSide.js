import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RightSide = () => {
	const navigate = useNavigate();

	const [cpf, setCpf] = useState("");
	const [password, setPassword] = useState("");

	const validadeForm = () => {
		if (cpf === "" || password === "") {
			alert("Preencha todos os campos!");
			return;
		}

		if (cpf.length < 11) {
			alert("CPF inválido!");
			return;
		}

		if (cpf !== "12345678909") {
			alert("Usuário não encontrado!");
			return;
		}

		if (password !== "123456") {
			alert("Senha invalida!");
			return;
		}

		navigate("home");
	};
	return (
		<div className="border-x-2 p-10 flex items-center flex-col bg-white w-2/5 mr-20 min-h-screen">
			<div className="border rounded-full bg-blue-700 mb-28 flex justify-center items-center p-7 ">
				AGENDAMENTO CLINIVAG
			</div>
			<p className="mb-36 center text-center text-2xl">
				Entrar na sua conta
			</p>
			<form className="flex flex-col items-center w-4/6">
				<input
					className="border-b-2 w-full mb-5 px-2 py-1 outline-none focus:border focus:border-blue-400 rounded-lg"
					type="text"
					placeholder="CPF"
					maxLength="11"
					onChange={(e) => setCpf(e.target.value)}
				/>

				<input
					className="border-b-2 mb-5 w-full px-2 py-1 outline-none focus:border focus:border-blue-400 rounded-lg"
					type="password"
					placeholder="Senha"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<input
					className="border border-solid cursor-pointer px-5 w-2/3 py-3 mb-5 rounded-lg bg-blue-400 hover:bg-blue-600"
					type="button"
					value="Entrar"
					onClick={() => validadeForm()}
				/>

				<p className="text-center">
					Ainda não tem registro ?{" "}
					<Link to="signup" className="hover:text-blue-700">
						Cadastre-se
					</Link>
				</p>
			</form>
		</div>
	);
};
