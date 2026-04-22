import { useState, useEffect } from "react";
import "./App.css";
import { LayoutDashboard, Package } from "lucide-react";
import AddProduto from "./componentes/AddProdutos";
import ListaProdutos from "./componentes/ListaProdutos";
import Dashboard from "./componentes/Layout/Dashboard";
import Sidebar from "./componentes/Layout/Sidebar";
import Filtros from "./componentes/Filtros";


function Sistema() {
  const [produtos, setProdutos] = useState(() => {
    const salvos = localStorage.getItem("produtos");
    return salvos ? JSON.parse(salvos) : [];
  });

  const [filtros, setFiltros] = useState({
    busca: "",
    categoria: "todos",
    precoMin: "",
    precoMax: "",
  });

  const [abaAtual, setAbaAtual] = useState("dashboard");
  const [editarProduto, setEditarProduto] = useState(null);
  const [notificacao, setNotificacao] = useState(null);

  const categorias = ["eletrônicos", "roupas", "alimentos", "outros"];

  // NOTIFICAÇÃO
  const mostrarNotificacao = (mensagem, tipo = "sucesso") => {
    setNotificacao({ mensagem, tipo });
    setTimeout(() => setNotificacao(null), 3000);
  };

  // LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  // CREATE / UPDATE
  const handleAdd = (produto) => {
    const existe = produtos.find((p) => p.id === produto.id);

    if (existe) {
      setProdutos(produtos.map((p) => (p.id === produto.id ? produto : p)));
      mostrarNotificacao("Produto atualizado com sucesso!", "sucesso");
      return;
    }

    if (!produto.nome || !produto.preco || !produto.estoque) {
      mostrarNotificacao("Preencha todos os campos!", "erro");
      return;
    }

    setProdutos([
      ...produtos,
      {
        ...produto,
        id: Date.now(),
        categoria: produto.categoria || "outros",
      },
    ]);

    mostrarNotificacao("Produto cadastrado com sucesso!", "sucesso");
  };

  // DELETE
  const deletarProduto = (id) => {
    setProdutos(produtos.filter((p) => p.id !== id));
    mostrarNotificacao("Produto removido!", "erro");
  };

  // EDIT
  const iniciarEdicao = (id) => {
    const produto = produtos.find((p) => p.id === id);
    setEditarProduto(produto);
    setAbaAtual("produtos");
  };

  // FILTRO
  const produtosFiltrados = produtos.filter((p) => {
    const matchBusca = p.nome
      .toLowerCase()
      .includes(filtros.busca.toLowerCase());

    const matchCategoria =
      filtros.categoria === "todos" || p.categoria === filtros.categoria;

    const matchMin =
      !filtros.precoMin || Number(p.preco) >= Number(filtros.precoMin);

    const matchMax =
      !filtros.precoMax || Number(p.preco) <= Number(filtros.precoMax);

    return matchBusca && matchCategoria && matchMin && matchMax;
  });

  return (
    <div className="app-container">


      <Sidebar setAbaAtual={setAbaAtual} />

      {notificacao && (
        <div className={`alerta toast ${notificacao.tipo}`}>
          {notificacao.mensagem}
        </div>
      )}

      <main className="content">

        {abaAtual === "dashboard" && (
          <Dashboard produtos={produtos} />
        )}

        {abaAtual === "produtos" && (
          <div className="container-produtos">

            <h1>Gerenciamento de Produtos</h1>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar produto..."
                value={filtros.busca}
                onChange={(e) =>
                  setFiltros({ ...filtros, busca: e.target.value })
                }
              />
            </div>

            <AddProduto
              addProduto={handleAdd}
              editarProduto={editarProduto}
              setEditarProduto={setEditarProduto}
            />

            <Filtros
              filtros={filtros}
              setFiltros={setFiltros}
              categorias={categorias}
            />

            <ListaProdutos
              produtos={produtosFiltrados}
              deletarProduto={deletarProduto}
              iniciarEdicao={iniciarEdicao}
            />

          </div>
        )}

      </main>
    </div>
  );
}

export default Sistema;
