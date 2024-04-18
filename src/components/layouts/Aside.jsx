import { NavLink } from "react-router-dom"
import Logo from "/src/assets/logo.png"
import User from 'admin-lte/dist/img/user2-160x160.jpg';

const Aside = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <a href="#" className="brand-link">
                <img src={Logo}
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-1"
                    style={{opacity: .8}} />
                <span className="brand-text font-weight-light">Budget Tracker</span>
            </a>

            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={User}
                            className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>


                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview" role="menu"
                        data-accordion="false">

                        <li className="nav-item">
                            <NavLink to="/dashbord" className="nav-link">
                                <i
                                    className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </NavLink>    
                        </li>
                        <li className="nav-item">
                            <NavLink to="/categories" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Catégories
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/depenses" className="nav-link">
                                <i className="nav-icon fas fa-dollar-sign"></i>
                                <p>
                                    Dépenses
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/objectifs" className="nav-link">
                                <i className="nav-icon fas fa-chart-line"></i>
                                <p>
                                    Objectifs
                                </p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>

        </aside>
    )
}

export default Aside