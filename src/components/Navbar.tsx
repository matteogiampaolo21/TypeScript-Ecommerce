
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand hover-color pt-2" href="/"><h2>Charon</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link hover-color" href="/"><h5 className='nav-pages'>Home</h5></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link hover-color" href="/products"><h5 className='nav-pages'>Products </h5></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link hover-color" href="/cart"><h5 className='nav-pages'>Cart </h5></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link hover-color" href="/about"><h5 className='nav-pages'>About Us </h5></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button onClick={()=>{navigate("/cart")}} className="btn btn-outline-success my-2 my-sm-0" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;