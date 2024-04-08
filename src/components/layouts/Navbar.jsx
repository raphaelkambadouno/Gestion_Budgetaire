import Aside from "./Aside";
import User from 'admin-lte/dist/img/user2-160x160.jpg';

const Navbar = () => {
    return (
        <>
            <nav
                className="main-header navbar navbar-expand navbar-white navbar-light">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"
                            role="button"><i className="fas fa-bars"></i></a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                                <img width={38} src={User}
                            className="img-circle elevation-2 navbar-img" alt="User Image" />
                            <span className="info ml-2">Test name</span>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-power-off mr-2"></i>
                                Déconnexion
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#"
                            role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Bar lattéral gauche */}
            <Aside/>
        </>
    )
}

export default Navbar