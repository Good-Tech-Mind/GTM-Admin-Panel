import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from "react-router-dom";
import "../styles/pageNotFound.css"
const PageNotFound = () => {
    const title = "Page Not Found"
    const description = "Learn about our website"
    const keywords = "mern,node,javascript,"
    const author = "Neeraj Katheriya"
    return (
        <Layout
            title={title}
            description={description}
            keywords={keywords}
            author={author}
        >
            <div>
                <div className="pageNotFound">
                    <h1>404</h1>
                    <h2>Oops! Page Not Found</h2>
                    <Link to="/">Go Back</Link>
                </div>
            </div>
        </Layout>
    )
}

export default PageNotFound
