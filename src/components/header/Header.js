
function Header() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-xl navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="grammar-channel-logo.png" alt="Richmond Grammar Channel" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="offcanvas offcanvas-end bg-white" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" aria-hidden="true" style={{visibility: "hidden"}}>
            <div className="offcanvas-header">
              <h2 id="offcanvasNavbarLabel" className="offcanvas-title visually-hidden">Primary navigation menu
              </h2><button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end me-4 flex-grow-1">
              
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">CFR</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a className="dropdown-item" href="#">A1</a></li>
                    <li><a className="dropdown-item" href="#">A1+</a></li>
                    <li><a className="dropdown-item" href="#">A2</a></li>
                    <li><a className="dropdown-item" href="#">A2+</a></li>
                    <li><a className="dropdown-item" href="#">B1</a></li>
                    <li><a className="dropdown-item" href="#">B1+</a></li>
                    <li><a className="dropdown-item" href="#">B2</a></li>
                    <li><a className="dropdown-item" href="#">B2+</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">CAMBRIDGE</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a className="dropdown-item" href="#">Starters</a></li>
                    <li><a className="dropdown-item" href="#">Movers</a></li>
                    <li><a className="dropdown-item" href="#">Fliers</a></li>
                    <li><a className="dropdown-item" href="#">Key</a></li>
                    <li><a className="dropdown-item" href="#">Preliminary</a></li>
                    <li><a className="dropdown-item" href="#">First</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FLIPPED LEARNING</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ABOUT</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search by keyword" aria-label="Search"/>
                <button className="btn btn-danger" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
    </nav>
    
  </header>
    </>
  );
  }

export default Header;