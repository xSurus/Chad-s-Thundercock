import { Grid } from '@mui/material';
import type {NextPage} from 'next'
import Head from 'next/head'
import LoginForm from "../components/login-form";
import CompanyVoucher from '../components/voucher-company';
const Home: NextPage = () => {
    return (
        <Grid container>
            <Head>  
                <title>Balls</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LoginForm/>
        </Grid>
    )
}

export default Home