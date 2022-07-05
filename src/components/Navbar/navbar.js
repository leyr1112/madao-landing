import './navbar.css'
import logo from "../../assets/logo.png"
function Navbar() {
    return (
        <div className='container'>
            <nav className="navbar navbar-dark  navbar-expand-md p-0" style={{ zIndex: "1", top: "0" }}>
                <div className="container-fluid pl-5 pr-5 pt-3 pb-3">
                    <a className="navbar-brand" href="#">
                        <img src={logo} />
                    </a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav mt-2  mt-lg-0  justify-content-end">
                            <li className="nav-item ">
                                <a className="nav-link " href="#home">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#roadmap">Roadmap</a>
                            </li>
                            {/* <li className="nav-item ">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li> */}
                        </ul>
                        <div className='btn-sea'>
                            <a href="https://app.mysticaliens.com/#/nft-mint"><button>Mint Now</button> </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;