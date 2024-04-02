import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";

const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <div>
                    <meta charSet="UTF-8" />
                    <meta name="description" content={props.description} />
                    <meta name="keywords" content={props.keywords} />
                    <meta name="author" content={props.author} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </div>
                <title>{props.title}</title>
            </Helmet>
            <Header />
            <main className='contentContainer'>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: "Welcome E-Commerce",
    description: "Learn about our website",
    keywords: "mern,node,javascript,",
    author: "Neeraj Katheriya"
}

export default Layout
