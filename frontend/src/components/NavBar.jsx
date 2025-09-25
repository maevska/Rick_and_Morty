import "../styles/NavBar.css"
import logo from "../assets/logo-black.svg"

const NavBar = () => {
    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={logo} alt="rick_and_morty" />
                </div>
                <div className="nav-list">
                    <ul>
                        <li>Charapters</li>
                        <li>Locations</li>
                        <li>Episodes</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;