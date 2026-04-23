import "../../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <h3>Sistema de Produtos</h3>
          <p>Gerenciamento inteligente de produtos com React</p>
        </div>

        <div className="footer-center">
          <p>Cadastro e controle de produtos</p>
          <p>Dashboard com indicadores</p>
          <p>Filtros e busca avançada</p>
        </div>

        <div className="footer-right">
          <p>Desenvolvido por:</p>
          <strong>David Silva</strong>
          <p>IF Baiano - Senhor do Bonfim</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
