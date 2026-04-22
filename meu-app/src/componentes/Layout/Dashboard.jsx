import "../../App.css";

function Dashboard({ produtos }) {
  const totalProdutos = produtos.length;

  const totalEstoque = produtos.reduce(
    (acc, p) => acc + Number(p.estoque || 0),
    0
  );

  const valorTotal = produtos.reduce(
    (acc, p) => acc + Number(p.preco || 0) * Number(p.estoque || 0),
    0
  );

  const produtosCarrossel = [...produtos]
    .slice(-5)
    .reverse();

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Dashboard</h1>

      <div className="kpi-container">

        <div className="kpi-card">
          <h3>Total Produtos</h3>
          <p>{totalProdutos}</p>
        </div>

        <div className="kpi-card">
          <h3>Itens em Estoque</h3>
          <p>{totalEstoque}</p>
        </div>

        <div className="kpi-card">
          <h3>Valor Total</h3>
          <p>R$ {valorTotal.toFixed(2)}</p>
        </div>

      </div>

      <div className="carrossel-secao">
        <h2>Produtos Recentes</h2>

        {produtosCarrossel.length === 0 ? (
          <p>Nenhum produto cadastrado ainda.</p>
        ) : (
          <div className="carrossel-produtos">

            {produtosCarrossel.map((produto) => (
              <div key={produto.id} className="carrossel-item">

                <img
                  src={
                    produto.imagem ||
                    "https://via.placeholder.com/300x200?text=Sem+Imagem"
                  }
                  alt={produto.nome}
                  className="carrossel-img"
                />

                <h4>{produto.nome}</h4>

                <p>R$ {Number(produto.preco).toFixed(2)}</p>

                <p>Estoque: {produto.estoque}</p>

              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
}

export default Dashboard;
