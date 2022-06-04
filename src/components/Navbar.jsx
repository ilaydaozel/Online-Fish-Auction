import styled from 'styled-components'
import logoImage from "../images/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { mobile } from "../responsive.js"
import React, { useState } from 'react';
import { Navigate, Link } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({
    //to arrange the placement of navbar contents

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#ffffff"
    },
    button: {
        backgroundColor: "#5AC8DD",
        borderRadius: "5px",
        fontWeight: "700",
        fontSize: "13px",
        width: "100px",

        '&:hover': {
            backgroundColor: "#1b4171",
            color: "white",
        },
        /*if the screen is smaller than small screen size, then*/
        [theme.breakpoints.down("sm")]: {
            height: "30px",
            width: "160px",
            margin: "5px 0px"
        }

    },
    logoLg: {
        display: "none",
        /*if the screen is bigger than small screen size, then*/
        [theme.breakpoints.up("sm")]: {
            display: "block",
            color: "black",
        },
    },
    logoSm: {
        fontSize: "15px",
        display: "block",
        color: "black",
        //if the screen is bigger than small screen size, then
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },

}));

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`
const LogoImage = styled.img`
    max-width: 40px;
    margin-right: 10px;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`
const MenuItem = styled.div`
    display: flex;
    width: 100px;
    margin-left: 35px;
`
const PageLink = styled.a`
    color: black;
    text-decoration: none;
    font-size: 15px;
    margin: 0 10px;

`
const LogoutButton = styled.button`
    background-color: #5AC8DD;
    border-radius: 5px;
    font-weight: 700;
    font-size: 13px;
    width: 50px;
    border: none;
    height:38px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #1b4171;
        color:  "white";
    },
`

const Navbar = () => {
    const classes = useStyles();
    const [loggedOut, setLoggedOut] = useState(false);
    const handleLogOut = (e) => {
        localStorage.clear();
        setLoggedOut(true);
        console.log(loggedOut);
        window.location.reload(true);
    }


    const handleButton=() =>{
        window.location.href = '/userInfo'
    }

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Left>
                    <Link to={`/`}>
                        <LogoImage src={logoImage} ></LogoImage>
                    </Link>
                    <Typography variant="h6" className={classes.logoLg}>
                        Balıklıova Mezat
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        Balıklıova Mezat
                    </Typography>
                </Left>
                <Right>

                    <MenuItem>
                        <PageLink href='/'>
                            Anasayfa
                        </PageLink>
                    </MenuItem>
                    <MenuItem>
                        <PageLink href='/auctionList'>
                            Mezatlar
                        </PageLink>
                    </MenuItem>
                    
                    {localStorage.getItem("userRole")==="ROLE_ADMIN"?
                    <MenuItem>
                        <PageLink href='/addfish'>
                            Balık Ekle
                        </PageLink>
                    </MenuItem>: "" }
                                        
                    {localStorage.getItem("userRole")==="ROLE_ADMIN"?
                    <MenuItem>
                        <PageLink href='/sales'>
                            Satışlarım
                        </PageLink>
                    </MenuItem>: "" }

                    <MenuItem>
                        <Button onClick ={handleButton}
                            
                            variant="contained"
                            size="large"
                            className={classes.button}
                            endIcon={<AccountCircleIcon />}
                        >
                            Hesabım
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        <LogoutButton onClick={handleLogOut}>
                            <LogoutIcon style={{ color: "black" }} />
                        </LogoutButton>
                        {loggedOut ? <Navigate to="/login" /> : ""}
                    </MenuItem>
                </Right>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;