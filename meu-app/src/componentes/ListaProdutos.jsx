function ListaProdutos({ produtos, deletarProduto, iniciarEdicao }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mt-6">

      <table className="w-full text-left">

        <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
          <tr>
            <th className="p-4">Produto</th>
            <th className="p-4">Preço Unitário</th>
            <th className="p-4">Estoque</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Ações</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">

          {produtos?.map((p) => (
            <tr key={p.id} className="hover:bg-slate-50 transition">

              <td className="p-4 font-medium text-slate-700">
                {p.nome}
              </td>

              <td className="p-4 text-slate-600">
                R$ {Number(p.preco).toFixed(2)}
              </td>

              <td className={`p-4 font-semibold ${
                p.estoque < 5 ? "text-orange-500" : "text-slate-600"
              }`}>
                {p.estoque} un.
              </td>

              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  p.estoque < 5
                    ? "bg-orange-100 text-orange-600"
                    : "bg-green-100 text-green-600"
                }`}>
                  {p.estoque < 5 ? "Estoque Baixo" : "Em Estoque"}
                </span>
              </td>

              <td className="p-4 text-right space-x-2">

                <button
                  onClick={() => deletarProduto(p.id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Excluir
                </button>

                <button
                  onClick={() => iniciarEdicao(p.id)}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Editar
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
