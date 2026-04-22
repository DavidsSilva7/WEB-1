import { LayoutDashboard, Package } from "lucide-react";
import "../../App.css";

function Sidebar({ setAbaAtual, abaAtual }) {
  return (
    <div className="sidebar">

      <h2 className="logo">Gerenciador Pro</h2>
      <p>Seu gerenciador de Produtos</p>

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

    </div>
  );
}

export default Sidebar;
