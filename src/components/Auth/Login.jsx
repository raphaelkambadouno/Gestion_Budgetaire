import React from 'react';

const Login = () => {
    return (
        <div className='login-page'>
            <div className="login-box">
                <div className="login-logo">
                    <a href="index2.html"><b>Budget</b>Tracker</a>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="index3.html" method="post">
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
                            <div className="row">
                                

                                <div className="col-4">
                                    <button type="submit"
                                        className="btn btn-primary btn-block">Sign
                                        In</button>
                                </div>

                            </div>
                        </form>
                        
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a
                                new membership</a>
                        </p>
                    </div>

                </div>
        </div>
        </div>
    );
}

export default Login;
