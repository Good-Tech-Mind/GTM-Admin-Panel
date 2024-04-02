import React from 'react'
import Layout from '../Layout/Layout'
import { useAuth } from '../context/Auth'
const HomePage = () => {
    const title = "HomePage E-Commerce"
    const description = "Learn about our website"
    const keywords = "mern,node,javascript,"
    const author = "Neeraj Katheriya"
    const [auth] = useAuth();
    return (
        <Layout
            title={title}
            description={description}
            keywords={keywords}
            author={author}
        >
            <div>
                <h1>Homepage</h1>
                <pre>{JSON.stringify(auth, null, 4)}</pre>
            </div>
        </Layout>
    )
}

export default HomePage
