import { useState } from "react";

function Filtros({ filtros, setFiltros, categorias }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border mt-4">

      <button
        onClick={() => setAberto(!aberto)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {aberto ? "Ocultar filtros" : "Filtrar produtos"}
      </button>

      {aberto && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">

          {/* BUSCA */}
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={filtros.busca}
            onChange={(e) =>
              setFiltros({ ...filtros, busca: e.target.value })
            }
            className="border p-2 rounded-md"
          />

          {/* CATEGORIA */}
          <select
            value={filtros.categoria}
            onChange={(e) =>
              setFiltros({ ...filtros, categoria: e.target.value })
            }
            className="border p-2 rounded-md"
          >
            <option value="todos">Todas categorias</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Preço mínimo"
            value={filtros.precoMin}
            onChange={(e) =>
              setFiltros({ ...filtros, precoMin: e.target.value })
            }
            className="border p-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Preço máximo"
            value={filtros.precoMax}
            onChange={(e) =>
              setFiltros({ ...filtros, precoMax: e.target.value })
            }
            className="border p-2 rounded-md"
          />

        </div>
      )}

    </div>
  );
}

export default Filtros;
