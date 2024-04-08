import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="register-page">
            <div className="register-box">
                <div className="register-logo"><b>Budget</b>Tracker</div>

                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form method="post">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full name" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Retype password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block">
                                    <NavLink to="/dashbord" className="text-white">Register</NavLink>
                                </button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <NavLink to="/login" className="mt-3">You have an account ? Login</NavLink>
                            </div>
                        </form>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;
