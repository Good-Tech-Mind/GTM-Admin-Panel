import React from 'react'
import Layout from '../Layout/Layout'

const Policy = () => {
    const title = "Policy E-Commerce"
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
                <h1>Privacy Policy</h1>
            </div>
        </Layout>
    )
}

export default Policy
