import React from 'react'

function Navbar(  ) {
    let isAuthenticated = false;
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="navbar-brand " >Authentication</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                {!isAuthenticated ? (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/register">Register</a>
                        </li>
                    </ul>
                ) : (
                    <div className='pl-5 pt-2 mr-4 display-flex container-fluid'>
                        <p className='text-white justify-content-end '>Welcome, User!</p>
                    </div>
                )}
            </ul>
            </div>
        </div>
    </nav>
    
    )
}

export default Navbar