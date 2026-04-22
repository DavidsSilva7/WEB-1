import {Pencil,Trash} from "lucide-react";
function ListaProdutos({ produtos, deletarProduto, iniciarEdicao }) {
  return (
    <div className="tabela-container">

      <table>

        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço Unitário</th>
            <th>Estoque</th>
            <th>Status</th>
            <th className="acoes">Ações</th>
          </tr>
        </thead>

        <tbody>
          {produtos?.map((p) => (
            <tr key={p.id}>

              <td className="nome-produto">
                {p.nome}
              </td>

              <td>
                R$ {Number(p.preco).toFixed(2)}
              </td>

              <td className={p.estoque < 5 ? "estoque-baixo" : ""}>
                {p.estoque} un.
              </td>

              <td>
                <span
                  className={
                    p.estoque === 0
                      ? "status-badge status-out"
                      : p.estoque < 5
                      ? "status-badge status-low"
                      : "status-badge status-ok"
                  }
                >
                  {p.estoque === 0 
                  ? "Estoque Esgotado" 
                  :p.estoque < 5 
                  ? "Estoque Baixo" 
                  : "Em Estoque"}
                </span>
              </td>

              <td className="acoes">

                <button
                  onClick={() => deletarProduto(p.id)}
                  className="btn-excluir"
                >
                  <Trash size={16} />
                  
                </button>

                <button
                  onClick={() => iniciarEdicao(p.id)}
                  className="btn-editar"
                >
                  <Pencil size={16} />
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ListaProdutos;
