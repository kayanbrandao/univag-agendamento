import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";

export const Home = () => {
	const [date, setDate] = useState("");
	const [acting, setActing] = useState("");
	const [modalIsOpen, setModalisOpen] = useState(false);

	const validadeScheduling = (e) => {
		e.preventDefault();
		if (acting === "") {
			alert("Preencha área de atuação!");
			return;
		}
		if (date === "") {
			alert("Preencha a data do agendamento!");
			return;
		}

		setModalisOpen(true);
	};

	return (
		<div className="container m-auto">
			<div className="flex justify-between items-center">
				<p className="my-8 text-3xl">Dados para Agendamento</p>
				<Link
					to="/"
					className="bg-blue-500 px-10 hover:bg-blue-600 font-semibold py-2 rounded uppercase"
				>
					Sair
				</Link>
			</div>
			<form className="flex items-center flex-col mt-20">
				<div className="flex w-full justify-around">
					<div className="flex flex-col w-[500px]">
						<input
							type="text"
							placeholder="Nome Completo"
							className="outline-none border-b-2 mb-5 px-2 py-2"
							value="Fulana de Tal"
						/>
						<label className="flex flex-col">
							Data de Nascimento:
							<input
								type="date"
								className="outline-none border-b-2 mb-5 px-2 py-2"
							/>
						</label>
						<input
							type="email"
							placeholder="E-mail"
							className="outline-none border-b-2 mb-5 px-2 py-2"
						/>
						<input
							type="tel"
							placeholder="Telefone"
							className="outline-none border-b-2 mb-5 px-2 py-2"
						/>
						<input
							type="text"
							placeholder="CPF"
							className="outline-none border-b-2 mb-5 px-2 py-2"
							value="12345678909"
						/>
					</div>
					<div className="border-r-2 h-80"></div>
					<div className="flex flex-col w-[500px]">
						<select
							className="outline-none border mb-5 px-2 py-2"
							onChange={(e) => setActing(e.target.value)}
						>
							<option selected value="">
								{" "}
								Selecione a especialidade desejada{" "}
							</option>
							<option value="ODONTOLOGIA">ODONTOLOGIA</option>
							<option value="PEDIATRIA">PEDIATRIA</option>
						</select>

						<label className="flex flex-col">
							Data de Atendimento:
							<input
								type="date"
								className="outline-none border-b-2 mb-5 px-2 py-2"
								onChange={(e) => setDate(e.target.value)}
							/>
						</label>
					</div>
				</div>

				<button
					onClick={(e) => validadeScheduling(e)}
					className="w-56 py-4 rounded-md mt-24 bg-blue-500 hover:bg-blue-600 "
				>
					AGENDAR CONSULTA
				</button>
			</form>

			<Modal
				setModalisOpen={setModalisOpen}
				modalIsOpen={modalIsOpen}
				acting={acting}
				date={date}
			/>
		</div>
	);
};
