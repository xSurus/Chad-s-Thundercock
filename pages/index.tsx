import type {NextPage} from 'next'
import Head from 'next/head'
import SupplierPage from "./SupplierPage";


const Home: NextPage= () => {
    const hello = 5;
    return (
        <div>
            <Head>
                <title>Balls</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <SupplierPage/>
        </div>
    )
}

export default Home