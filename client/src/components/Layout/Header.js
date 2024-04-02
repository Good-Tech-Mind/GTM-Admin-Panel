import React from 'react'
import { NavLink } from "react-router-dom";
import { useAuth } from '../context/Auth';
import toast from 'react-hot-toast';
const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem("auth")
        toast.success("Logout Successfully")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand" >Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/service" className="nav-link" >Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/team" className="nav-link" >Our Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link" >Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link" >Blogs</NavLink>
                            </li>
                            {!auth.user ? (<>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" >Login</NavLink>
                                </li>
                            </>) : (<>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {auth?.user?.name}
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink to=
                                            "/dashboard/user" className="dropdown-item" >Dashboard</NavLink></li>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="dropdown-item" onClick={handleLogout} >Logout</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </>)}
                            <li className="nav-item">
                                <NavLink to="/director" className="nav-link" >Director</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
