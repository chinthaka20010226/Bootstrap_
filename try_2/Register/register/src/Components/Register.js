import React from "react";

function Register(){
    return(
        <section className="vh-100">
            <div className="h-100">
                <div className="row h-100">
                    <div className="col">
                        <div className="card card-registration h-100">
                            <div className="row h-100">
                                <div className="col-md-5 bg-info d-flex flex-column align-items-center justify-content-center text-center py-3">
                                    <h1>Welcome Expensy</h1>
                                    <p>Effortlessly manage your finances with our intuitive expense tracker. Stay in control, track spending,
                                        and achive financial goals seamlessly. Welcome to a smart way to handle your expenses.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center h-100">
                                        <div className="row py-3">
                                            <div className="col-sm-6">
                                                <div className="d-flex justify-cotent-center py-2">
                                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <button type="submit" className="btn btn-primary">Register</button>
                                                </div>
                                            </div>
                                        </div>

                                            <h1 className="card-title py-3">Register</h1>

                                            <div className="form-outline py-3">
                                                <input type="text" placeholder="Full Name" className="form-control form-control-lg"></input>
                                            </div>

                                            <div className="form-outline py-3">
                                                <input type="email" placeholder="Email" className="form-control form-control-lg"></input>
                                            </div>

                                            <div className="form-outline py-3">
                                                <input type="password" placeholder="Password" className="form-control form-control-lg"></input>
                                            </div>

                                            <div className="form-outline py-3">
                                                <input type="password" placeholder="Confirm Password" className="form-control form-control-lg"></input>
                                            </div>

                                            <div className="py-3">
                                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                            </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;