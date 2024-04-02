import React from 'react'
import Layout from '../../Layout/Layout'
import Admin from '../../Layout/Admin'
import { Link } from 'react-router-dom'
const CreateTeam = () => {
    return (
        <Layout>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3">
                        <Admin />
                    </div>
                    <div className="col-md-9">
                        <div className="card p-3 w-85">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-center">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link active" aria-current="page" href="#">Add a Member</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link active" aria-current="page" href="#">Add a Category</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link active" aria-current="page" href="#">Add a Sub Category</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateTeam
