import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { customStyles, defaultCustomStyles } from "./style";

export const Modal = ({ setModalisOpen, modalIsOpen, acting, date }) => {
	const navigate = useNavigate();

	const widthWindown = window.innerWidth;

	const eventSelected = (e) => {
		const hours = document.querySelectorAll(".hour");
		hours.forEach((item) => {
			item.classList.remove("selected");
		});

		e.classList.add("selected");
	};

	return (
		<ReactModal
			isOpen={modalIsOpen}
			onRequestClose={() => setModalisOpen(false)}
			style={widthWindown > 1024 ? customStyles : defaultCustomStyles}
		>
			<div className="flex items-center justify-end">
				<button
					onClick={() => setModalisOpen(false)}
					className="font-bold text-2xl mb-8 w"
				>
					X
				</button>
			</div>
			<div className="flex flex-col justify-between min-h-modal">
				<div className="flex flex-col">
					<div className="flex mb-5">
						<p className="font-bold mr-5">{acting}</p>
						<p className="font-bold mr-5">{date}</p>
					</div>
					<div className="flex justify-between flex-wrap">
						<button
							className="bg-blue-400 py-3 px-4 rounded-md text-white cursor-pointer hour"
							onClick={(e) => eventSelected(e.target)}
						>
							08:00 - 08:30
						</button>
						<button
							className="bg-blue-400 py-3 px-4 rounded-md text-white cursor-pointer hour"
							onClick={(e) => eventSelected(e.target)}
						>
							08:30 - 09:00
						</button>
						<button
							className="bg-blue-400 py-3 px-4 rounded-md text-white cursor-pointer hour"
							onClick={(e) => eventSelected(e.target)}
						>
							09:00 - 09:30
						</button>
						<button
							className="bg-blue-400 py-3 px-4 rounded-md text-white cursor-pointer hour"
							onClick={(e) => eventSelected(e.target)}
						>
							09:30 - 10:00
						</button>
						<button
							className="bg-blue-400 py-3 px-4 rounded-md text-white cursor-pointer hour"
							onClick={(e) => eventSelected(e.target)}
						>
							10:00 - 10:30
						</button>
						<button
							className="bg-blue-400 py-3 px-4 rounded-md text-white cursor-pointer hour"
							onClick={(e) => eventSelected(e.target)}
						>
							10:30 - 11:00
						</button>
					</div>
				</div>

				<div className="h-12">
					<button
						className="bg-green-600 px-6 py-2 outline-none rounded font-semibold hover:bg-green-500 mr-2 text-lg"
						onClick={() => navigate("/")}
					>
						Confirmar
					</button>
					<button
						className="bg-red-400 px-6 py-2 outline-none rounded font-semibold hover:bg-red-300 mr-2 text-lg"
						onClick={() => setModalisOpen(false)}
					>
						Cancelar
					</button>
				</div>
			</div>
		</ReactModal>
	);
};
