import ChanelLogo from './ChanelLogo';
import HeaderButton from './HeaderButton';
import DropGrades from './DropGrades';
import HeaderForm from './HeaderForm';

function Header({
  logo,
  about,
  drops,
  onClick,
  onClickForm,
  keyWords,
}) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xl navbar-light bg-white">
          <div className="container-new">
            <ChanelLogo logo={logo} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end bg-white"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              aria-hidden="true"
              style={{ visibility: "hidden" }}
            >
              <div className="offcanvas-header">
                <h2
                  id="offcanvasNavbarLabel"
                  className="offcanvas-title visually-hidden"
                >
                  Primary navigation menu
                </h2>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item nav-item-about">
                    <HeaderButton dataButton={about} />
                  </li>
                  <DropGrades drop={drops.cfr} onClick={onClick} />
                  <DropGrades drop={drops.cambridge} onClick={onClick} />
                  <li className="nav-item nav-item-search form-search">
                    <HeaderForm onClickForm={onClickForm} keyWords={keyWords} />
                  </li>
                  <li className="nav-item nav-item-flearn">
                    <a className="nav-link flearn" href="#">
                      FLIPPED LEARNING
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;