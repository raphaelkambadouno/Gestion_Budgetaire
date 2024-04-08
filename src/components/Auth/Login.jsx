import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className='login-page'>
            <div className="login-box">
                <div className="login-logo"><b>Budget</b>Tracker</div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control"
                                    placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control"
                                    placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block">
                                    <NavLink to="/dashbord" className="text-white">Sign In</NavLink>
                                </button>
                            </div>
                        </form>
                        
                        <div className="d-flex justify-content-center">
                            <NavLink to="/register" className="mt-3">Register a 
                                new membership</NavLink>
                        </div>
                    </div>

                </div>
        </div>
        </div>
    );
}

export default Login;
