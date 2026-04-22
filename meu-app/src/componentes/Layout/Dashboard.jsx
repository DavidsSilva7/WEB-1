import "../../App.css";
import {BadgeDollarSign,Boxes,PackageOpen}from "lucide-react";

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

  const produtosCarrossel = [...produtos].slice(-5).reverse();

  return (
    <div className="dashboard-container">

      {/* TÍTULO */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Visão geral do sistema</p>
      </div>

      {/* KPIs */}
      <div className="kpi-container">

        <div className="kpi-card">
          <Boxes size={24} color="#ebc325" />
          <h3>Total de Produtos</h3>
          <p>{totalProdutos}</p>
        </div>

        <div className="kpi-card">
          <PackageOpen size={24} color="#2563eb" />
          <h3>Total em Estoque</h3>
          <p>{totalEstoque}</p>
        </div>

        <div className="kpi-card destaque">
          <BadgeDollarSign size={24} color="#25eb35" />
          <h3>Valor Total</h3>
          <p>R$ {valorTotal.toFixed(2)}</p>
        </div>

      </div>

      
      <div className="carrossel-secao">
        <h2 calssName="pt">Produtos Recentes</h2>

        {produtosCarrossel.length === 0 ? (
          <p className="sem-produtos">
            Nenhum produto cadastrado ainda.
          </p>
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

                <div className="info-produto">
                  <h4>{produto.nome}</h4>

                  <p className="preco">
                    R$ {Number(produto.preco).toFixed(2)}
                  </p>

                  <p className="estoque">
                    Estoque: {produto.estoque}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
}

export default Dashboard;
