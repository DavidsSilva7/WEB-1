import {LayoutDashboard, Package, Cog, FileChartLine, Info} from "lucide-react";

import "../../App.css";

function Sidebar({ setAbaAtual, abaAtual }) {
  return (
    <div className="sidebar">

      <h2 className="logo">Gerenciador Pro</h2>
      <p className="subtitle">Seu gerenciador de produtos</p>

      <button
        className={abaAtual === "dashboard" ? "ativo" : ""}
        onClick={() => setAbaAtual("dashboard")}
      >
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </button>

      <button
        className={abaAtual === "produtos" ? "ativo" : ""}
        onClick={() => setAbaAtual("produtos")}
      >
        <Package size={18} />
        <span>Produtos</span>
      </button>

      <button
        className={abaAtual === "relatorios" ? "ativo" : ""}
        onClick={() => setAbaAtual("relatorios")}
      >
        <FileChartLine size={18} />
        <span>Relatórios</span>
      </button>

      <button
        className={abaAtual === "configuracoes" ? "ativo" : ""}
        onClick={() => setAbaAtual("configuracoes")}
      >
        <Cog size={18} />
        <span>Configurações</span>
      </button>

      <button
        className={abaAtual === "sobre" ? "ativo" : ""}
        onClick={() => setAbaAtual("sobre")}
      >
        <Info size={18} />
        <span>Sobre</span>
      </button>

    </div>
  );
}

export default Sidebar;
