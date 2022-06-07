import ChanelLogo from './ChanelLogo';
import HeaderButton from './HeaderButton';
import DropGrades from './DropGrades';
import HeaderForm from './HeaderForm';

function Header({
  logo,
  flipped,
  about,
  drops,
  onClick,
  onChangeForm,
  inputValue,
}) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xl navbar-light bg-white">
          <div className="container">
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
                <ul className="navbar-nav justify-content-end me-4 flex-grow-1">
                  <DropGrades drop={drops.cfr} onClick={onClick} />
                  <DropGrades drop={drops.cambridge} onClick={onClick} />

                  <li className="nav-item">
                    <HeaderButton dataButton={flipped} />
                  </li>
                  <li className="nav-item">
                    <HeaderButton dataButton={about} />
                  </li>
                </ul>
                <HeaderForm onChangeForm={onChangeForm} inputValue={inputValue}/>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;