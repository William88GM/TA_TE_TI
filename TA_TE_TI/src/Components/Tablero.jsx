import "../App.css";
import { useConfig } from "../hooks/tableConfig.jsx";

export function Tablero() {
	const {
		valoresTablero,
		setValoresTablero,
		turno,
		setTurno,
		iconA,
		iconB,
		initialIcon,
		ganador,
	} = useConfig();
	function handleClick(i) {
		if (valoresTablero[i] === initialIcon) {
			let nuevo = valoresTablero.with(i, turno);
			setValoresTablero(() => nuevo);
			setTurno((p) => (p === iconA ? iconB : iconA));
		}
	}

	return (
		<section className="tablero">
			{valoresTablero.map((e, i) => {
				return (
					<div key={i} className="casilla" onClick={() => handleClick(i)}>
						<img src={e} alt="" />
					</div>
				);
			})}

			{ganador === "Empate" ? "Empate" : ganador ? "El ganador es:" : ""}
			{(ganador !== undefined) & (ganador !== "Empate") ? (
				<img src={ganador} />
			) : (
				""
			)}
		</section>
	);
}
