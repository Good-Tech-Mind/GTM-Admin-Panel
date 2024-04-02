import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div>
                <h1 className="text-center">Admin Pannel</h1>
                <div className="list-group ms-4 my-4 text-center">
                    <h2><Link to="/dashboard/user/create-category" className="list-group-item list-group-item-action text-dark text-center">Our Team</Link></h2>
                    <h2><Link to="/dashboard/user/create-product" className="list-group-item list-group-item-action text-dark text-center">Manage Product</Link></h2>
                    <h2> <Link to="/dashboard/user/create-service" className="list-group-item list-group-item-action text-dark text-center">Manage Service</Link></h2>
                </div>

            </div>
        </>
    )
}

export default Admin
