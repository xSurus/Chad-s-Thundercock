import {Button, Grid, Icon, IconButton} from "@mui/material";
import {useState} from "react";
import SeekerOffers from "../components/seeker-offers";
import SeekerOrders from "../components/seeker-orders";
import CompanyVoucher from "../components/offer-card";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginForm from "../components/login-form";
import styled from "@emotion/styled";

const SeparatorBar = styled(Grid)`
  color: #696969;
  opacity: 0.5;
  margin-bottom: 0.3em;
  margin-right: 1em;
  margin-left: 1em;
`

const Seeker = () => {

    const [page, showPage] = useState(<SeekerOrders/>);
    const [whichPage, setWhichPage] = useState<number>(1);

    const HeaderM = styled(Grid)`
        background-color: #white;
        height: 3em;
        width: 100%;
        margin-bottom: 1em; 
    `
    const HeaderText = styled(Grid)`
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
        fontSize: large;
    `
    const AccountIcon = styled(IconButton)`
        float: right;
        margin-top: 0.5em;
        margin-right: 0.5em;
    `
    return (
        <Grid container>
            <Grid item container justifyContent={'center'} alignItems={'center'} style={{backgroundColor: 'darkgrey'}}>
                <Grid>
                    <Button
                        onClick={() => {
                            showPage(<SeekerOrders/>);
                            setWhichPage(1)
                        }}
                        style={{
                            color: whichPage === 1 ? 'darkred' : 'rgba(0,0,0,1)',
                            cursor: 'pointer',
                            display: 'inline',
                            fontSize: '1.5em'
                        }}>
                        Orders
                    </Button>
                </Grid>
                <SeparatorBar>
                    |
                </SeparatorBar>
                <Grid item>
                    <Button
                        onClick={() => {
                            showPage(<SeekerOffers/>);
                            setWhichPage(2)
                        }}
                        style={{
                            color: whichPage === 2 ? 'darkred' : 'rgba(0,0,0,1)',
                            cursor: 'pointer',
                            display: 'inline',
                            fontSize: '1.5em'
                        }}>
                        Offers
                    </Button>
                </Grid>
                <SeparatorBar>
                    |
                </SeparatorBar>
                <Grid item>
                    <IconButton
                        onClick={() => {
                            showPage(<LoginForm/>);
                            setWhichPage(3)
                        }}
                        style={{color: whichPage === 3 ? 'darkred' : 'rgba(0,0,0,1)', fontSize: '1.5em'}}>
                        <AccountBoxIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container style={{marginTop: whichPage === 3 ? '-3em' : 0}}>
                {page}
            </Grid>
        </Grid>
    )
}

export default Seeker;