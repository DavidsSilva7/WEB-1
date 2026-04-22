import "../../App.css";

function Sobre() {
  return (
    <div className="sobre-container">

      <h1>Sobre o Sistema</h1>

      <div className="sobre-card">

        <h2>Gerenciador Pro</h2>

        <p>
          Este sistema foi desenvolvido para facilitar o gerenciamento de produtos,
          permitindo o cadastro, edição, exclusão e análise de dados de forma simples
          e eficiente.
        </p>

        <div className="sobre-info">

          <div>
            <strong>Tecnologias:</strong>
            <p>React, JavaScript, CSS</p>
          </div>

          <div>
            <strong>Autor:</strong>
            <p>David Silva</p>
          </div>

        </div>

      </div>

      <div className="sobre-card">

        <h2>Funcionalidades</h2>

        <ul>
          <li>Cadastro de produtos</li>
          <li>Edição e exclusão</li>
          <li>Filtros avançados</li>
          <li>Dashboard com indicadores</li>
          <li>Relatórios com gráficos</li>
          <li>Tema claro/escuro</li>
        </ul>

      </div>

    </div>
  );
}

export default Sobre;
