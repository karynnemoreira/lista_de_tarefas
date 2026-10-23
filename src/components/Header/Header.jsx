import './Header.css'

function Header() {
  return (
    <header className="site-header" id="inicio">
      <div className="site-header__brand">
        <span className="site-header__eyebrow">ORGANIZAÇÃO PESSOAL</span>
        <h1>Minha lista de tarefas</h1>
        <p>Organize estudos, trabalhos e revisões em um só lugar.</p>
      </div>
      <nav className="site-header__nav" aria-label="Navegação principal">
        <a href="#tarefas">Ir para tarefas</a>
      </nav>
    </header>
  )
}

export default Header
