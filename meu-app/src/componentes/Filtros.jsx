import { useState } from "react";

function Filtros({ filtros, setFiltros, categorias }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="filtros-container">

      <button
        onClick={() => setAberto(!aberto)}
        className="btn-filtro"
      >
        {aberto ? "Ocultar filtros" : "Filtrar produtos"}
      </button>

      {aberto && (
        <div className="filtros-grid">

          <input
            type="text"
            placeholder="Buscar por nome..."
            value={filtros.busca}
            onChange={(e) =>
              setFiltros({ ...filtros, busca: e.target.value })
            }
          />

          <select
            value={filtros.categoria}
            onChange={(e) =>
              setFiltros({ ...filtros, categoria: e.target.value })
            }
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
          />

          <input
            type="number"
            placeholder="Preço máximo"
            value={filtros.precoMax}
            onChange={(e) =>
              setFiltros({ ...filtros, precoMax: e.target.value })
            }
          />

        </div>
      )}
    </div>
  );
}

export default Filtros;
