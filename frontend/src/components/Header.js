import logo from '../images/logo.png';
const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt="logo"/> 
            <a className="navbar-brand" href="#">DocEasy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Disabled</a>
                </li>
                </ul>
            </div>
            </nav>
    </div>
    )
}

export default Header;