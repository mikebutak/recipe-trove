import React from 'react';
import './Header.css';

const header = () => {

    return (
        <nav className="navbar bg-dark w-100">
        <div className="container-fluid">
            <div className="navbar-header nav-wide">
                <div className="row justify-content-end">
                    <div className="col">
                        <a className="navbar-brand" href="https://www.myupside.com/">
                            <img src="https://cdn1.iconfinder.com/data/icons/food-drinks-1-1/128/silverware-512.png" alt="Chef's Hat" className="header-logo"/>
                        </a>
                    </div>
                    <div className="col search-style">
                        <form>
                            <div className="form-group form-adj">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default header;