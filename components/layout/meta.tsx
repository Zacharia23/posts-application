import Head from "next/head";

Meta.defaultProps = {
    title: 'Devto', 
    keywords: "Nextjs, Charkra-UI, React",
    description: "Dev.to Clone built by Zacharia"
}
const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

export default Meta
