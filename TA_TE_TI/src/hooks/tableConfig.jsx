import { useState, useEffect } from "react";

export function useConfig() {
	let initialIcon =
		"https://indiehoy.com/wp-content/uploads/2022/05/naruto.jpg";
	let iconA = "https://i.postimg.cc/DZHHPP1w/Mangeky-Sharingan-Itachi.png";
	let iconB =
		"https://i.postimg.cc/hPyxyZfs/Madara-Photo-Room-png-Photo-Room.png";

	const initialValoresTablero = [
		initialIcon,
		initialIcon,
		initialIcon,
		initialIcon,
		initialIcon,
		initialIcon,
		initialIcon,
		initialIcon,
		initialIcon,
	];
	const [valoresTablero, setValoresTablero] = useState(initialValoresTablero);

	const [turno, setTurno] = useState(iconA);

	const [ganador, setGanador] = useState();

	function validar() {
		for (let index = 0; index < 3; index++) {
			let sum = 3;
			if (
				valoresTablero[0 + sum * index] === iconA &&
				valoresTablero[1 + sum * index] === iconA &&
				valoresTablero[2 + sum * index] === iconA
			) {
				return iconA;
			} else if (
				valoresTablero[0 + index] === iconA &&
				valoresTablero[3 + index] === iconA &&
				valoresTablero[6 + index] === iconA
			) {
				return iconA;
			}
		}
		if (
			(valoresTablero[0] === iconA &&
				valoresTablero[4] === iconA &&
				valoresTablero[8] === iconA) ||
			(valoresTablero[2] === iconA &&
				valoresTablero[4] === iconA &&
				valoresTablero[6] === iconA)
		) {
			return iconA;
		}
		//-------------------------------------
		for (let index = 0; index < 3; index++) {
			let sum = 3;
			if (
				valoresTablero[0 + sum * index] === iconB &&
				valoresTablero[1 + sum * index] === iconB &&
				valoresTablero[2 + sum * index] === iconB
			) {
				return iconB;
			} else if (
				valoresTablero[0 + index] === iconB &&
				valoresTablero[3 + index] === iconB &&
				valoresTablero[6 + index] === iconB
			) {
				return iconB;
			}
		}
		if (
			(valoresTablero[0] === iconB &&
				valoresTablero[4] === iconB &&
				valoresTablero[8] === iconB) ||
			(valoresTablero[2] === iconB &&
				valoresTablero[4] === iconB &&
				valoresTablero[6] === iconB)
		) {
			return iconB;
		}

		for (let i in valoresTablero) {
			if (valoresTablero[i] === initialValoresTablero[0]) {
				return;
			}
		}
		return "Empate";
	}

	useEffect(() => {
		if (!ganador) setGanador(validar());
	}, [valoresTablero]);

	return {
		valoresTablero,
		setValoresTablero,
		turno,
		setTurno,
		iconA,
		iconB,
		initialIcon,
		ganador,
	};
}
