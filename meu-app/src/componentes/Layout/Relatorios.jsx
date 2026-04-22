import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from "recharts";

function Relatorios({ produtos }) {

  // ================= DADOS =================

  // Produtos por categoria
  const categorias = {};
  produtos.forEach(p => {
    categorias[p.categoria] = (categorias[p.categoria] || 0) + 1;
  });

  const dataCategoria = Object.keys(categorias).map(cat => ({
    name: cat,
    value: categorias[cat]
  }));

  // Estoque por produto
  const dataEstoque = produtos.map(p => ({
    name: p.nome,
    estoque: p.estoque
  }));

  // Valor por categoria
  const valorCategoria = {};
  produtos.forEach(p => {
    valorCategoria[p.categoria] =
      (valorCategoria[p.categoria] || 0) +
      (p.preco * p.estoque);
  });

  const dataValor = Object.keys(valorCategoria).map(cat => ({
    name: cat,
    valor: valorCategoria[cat]
  }));

  const cores = ["#2563eb", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="relatorios-container">

      <h1>Relatórios</h1>

      {produtos.length === 0 ? (
        <p>Nenhum dado disponível para gerar relatórios.</p>
      ) : (
        <div className="graficos-grid">

          {/* CATEGORIAS */}
          <div className="grafico-card">
            <h3>Produtos por Categoria</h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dataCategoria}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                >
                  {dataCategoria.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={cores[index % cores.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* ESTOQUE */}
          <div className="grafico-card">
            <h3>Estoque por Produto</h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dataEstoque}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="estoque" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* VALOR */}
          <div className="grafico-card">
            <h3>Valor por Categoria</h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dataValor}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      )}
    </div>
  );
}

export default Relatorios;
