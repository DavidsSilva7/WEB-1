import { useState, useEffect } from "react";

function AddProduto({ addProduto, editarProduto, setEditarProduto }) {
  const [aberto, setAberto] = useState(false);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [categoria, setCategoria] = useState("eletrônicos");
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editarProduto) {
      setNome(editarProduto.nome);
      setPreco(editarProduto.preco);
      setEstoque(editarProduto.estoque);
      setCategoria(editarProduto.categoria);
      setImagem(editarProduto.imagem);
      setPreview(editarProduto.imagem);
      setAberto(true);
    }
  }, [editarProduto]);

  const handleImagem = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagem(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduto({
      id: editarProduto?.id,
      nome,
      preco: Number(preco),
      estoque: Number(estoque),
      categoria,
      imagem,
    });

    setNome("");
    setPreco("");
    setEstoque("");
    setCategoria("eletrônicos");
    setImagem(null);
    setPreview(null);
    setEditarProduto(null);
    setAberto(false);
  };

  return (
    <div className="card">

      <button onClick={() => setAberto(!aberto)}>
        {aberto ? "Fechar formulário" : "Cadastrar novo produto"}
      </button>

      {aberto && (
        <form onSubmit={handleSubmit} className="form">

          <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="number" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} />
          <input type="number" placeholder="Estoque" value={estoque} onChange={(e) => setEstoque(e.target.value)} />

          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option>eletrônicos</option>
            <option>roupas</option>
            <option>alimentos</option>
            <option>outros</option>
          </select>

          <input type="file" accept="image/*" onChange={handleImagem} />

          {preview && (
            <img src={preview} className="preview-img" />
          )}

          <button type="submit">
            {editarProduto ? "Atualizar" : "Salvar"}
          </button>

        </form>
      )}
    </div>
  );
}

export default AddProduto;
