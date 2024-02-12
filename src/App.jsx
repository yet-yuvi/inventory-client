import './App.css'

function App() {

  function Navbar() {
    return(
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar-menu">
          <ul>
            <li className="navbar-menu-item">Learn</li>
            <li className="navbar-menu-item">Referance</li>
            <li className="navbar-menu-item">Community</li>
            <li className="navbar-menu-item">Blog</li>
          </ul>
        </div>
      </div>
    );
  }

  function MainArea() {
    return(
      <main>
        <h1>Main Area</h1>
      </main>
    );
  }

  function FooterArea() {
    return(
      <footer>
        <h2>Footer</h2>
      </footer>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <MainArea />
      <FooterArea />  
    </div>
  )
}

export default App
