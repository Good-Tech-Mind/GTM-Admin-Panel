import React from 'react'
import Layout from '../Layout/Layout';
import Admin from '../Layout/Admin';
import { useAuth } from '../context/Auth';
const Dashboard = () => {
    const [auth] = useAuth()
    return (
        <Layout>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3">
                        <Admin />
                    </div>
                    <div className="col-md-9">
                        <div className="card p-3 w-75">
                            <h2>Admin Name : {auth?.user?.name}</h2>
                            <h2>Admin Email : {auth?.user?.email}</h2>
                            <h2>Admin Contact : {auth?.user?.phone}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
