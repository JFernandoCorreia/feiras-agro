import { useEffect, useState } from "react";
import axios from "axios";

function Feiras() {
  const [feiras, setFeiras] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/feiras").then((res) => setFeiras(res.data));
  }, []);

  <><input
    type="text"
    placeholder="Buscar feira por nome"
    className="border p-2 w-full max-w-sm"
    onChange={(e) => setFiltro(e.target.value)} /><ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {feiras
        .filter((feira) => feira.nome.toLowerCase().includes(filtro.toLowerCase()))
        .map((feira) => (
          <li key={feira.id} className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold">{feira.nome}</h3>
            <p>{feira.localizacao}</p>
            <p>{feira.diasFuncionamento}</p>
          </li>
        ))}
    </ul></>


  return (
    <div>
      <h1>Feiras Disponíveis</h1>
      <ul>
        {feiras.map((feira) => (
          <li key={feira.id}>{feira.nome} - {feira.localizacao}</li>
        ))}
      </ul>
    </div>
  );
}

export default Feiras;
