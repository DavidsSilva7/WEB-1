function Topbar({ filtros, setFiltros, setAbaAtual, onNovoProduto }) {
  return (
    <div className="topbar">


      <div className="topbar-left">
        <h2>Sistema de Produtos</h2>
      </div>

      <div className="topbar-search">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={filtros.busca}
          onChange={(e) =>
            setFiltros({ ...filtros, busca: e.target.value })
          }
        />
      </div>

      <div className="topbar-actions">

        <button
          className="btn-novo"
          onClick={onNovoProduto}
        >
          + Novo Produto
        </button>

        <span className="icon">🔔</span>
        <span className="icon">👤</span>

      </div>

    </div>
  );
}

export default Topbar;
