import React from "react"
import Layout from "../components/layout";

export default function Post({ pageContext }) {
    const { title, date, body } = pageContext;

    return (
        <Layout>
            <div>
                <h1>{ title }</h1>
                <p>{ date }</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </Layout>
    )
}
