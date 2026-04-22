function Configuracoes({
  temaEscuro,
  setTemaEscuro,
  corPrimaria,
}) {

  const salvarConfig = () => {
    const config = {
      temaEscuro,
      corPrimaria
    };

    localStorage.setItem("config", JSON.stringify(config));
    alert("Configurações salvas!");
  };

  return (
    <div className="config-container">

      <h1>Configurações</h1>

      <div className="config-card">
        <label>Tema</label>

        <div className="config-toggle">
          <span>Claro</span>

          <input
            type="checkbox"
            checked={temaEscuro}
            onChange={() => setTemaEscuro(!temaEscuro)}
          />

          <span>Escuro</span>
        </div>
      </div>

      <button className="btn-salvar" onClick={salvarConfig}>
        Salvar
      </button>

    </div>
  );
}

export default Configuracoes;
