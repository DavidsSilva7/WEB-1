import { useState, useEffect } from "react";
import "./App.css";
import AddProduto from "./componentes/FormProdutos";
import ListaProdutos from "./componentes/ListaProdutos";
import Dashboard from "./componentes/Layout/Dashboard";
import Sidebar from "./componentes/Layout/Sidebar";
import Footer from "./componentes/Layout/Footer";
import Filtros from "./componentes/Filtros";
import Configuracoes from "./componentes/Layout/Configurações";
import Relatorios from "./componentes/Layout/Relatorios";
import Sobre from "./componentes/Layout/Infor";

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
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [corPrimaria, setCorPrimaria] = useState("#2563eb");

  const mostrarNotificacao = (mensagem, tipo = "sucesso") => {
    setNotificacao({ mensagem, tipo });
    setTimeout(() => setNotificacao(null), 3000);
  };

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  const CadastrarPdt = (produto) => {
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

  const deletarProduto = (id) => {
    setProdutos(produtos.filter((p) => p.id !== id));
    mostrarNotificacao("Produto removido!", "erro");
  };

  const iniciarEdicao = (id) => {
    const produto = produtos.find((p) => p.id === id);
    setEditarProduto(produto);
    setAbaAtual("produtos");
  };

  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [temaEscuro]);

  const produtosFiltrados = produtos.filter((p) => {
    const Busca = p.nome.toLowerCase().includes(filtros.busca.toLowerCase());
    const Categoria = filtros.categoria === "todos" || p.categoria === filtros.categoria;
    const PrecoMin = !filtros.precoMin || Number(p.preco) >= Number(filtros.precoMin);
    const PrecoMax = !filtros.precoMax || Number(p.preco) <= Number(filtros.precoMax);

    return Busca && Categoria && PrecoMin && PrecoMax;
  });

  return (
    <div className="app-container">

      <Sidebar setAbaAtual={setAbaAtual} />

      <div className="main-content">

        <main className="content">

          {notificacao && (
            <div className={`alerta toast ${notificacao.tipo}`}>
              {notificacao.mensagem}
            </div>
          )}

          {abaAtual === "dashboard" && <Dashboard produtos={produtos} />}
          {abaAtual === "relatorios" && <Relatorios produtos={produtos} />}
          {abaAtual === "sobre" && <Sobre />}
          {abaAtual === "configuracoes" && (
            <Configuracoes
              temaEscuro={temaEscuro}
              setTemaEscuro={setTemaEscuro}
              corPrimaria={corPrimaria}
              setCorPrimaria={setCorPrimaria}
            />
          )}

          {abaAtual === "produtos" && (
            <div className="container-produtos">

              <h1>Gerenciamento de Produtos</h1>

              <input
                type="text"
                placeholder="Buscar produto..."
                value={filtros.busca}
                onChange={(e) =>
                  setFiltros({ ...filtros, busca: e.target.value })
                }
              />

              <AddProduto
                addProduto={CadastrarPdt}
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

        <Footer />

      </div>
    </div>
  );
}

export default Sistema;
