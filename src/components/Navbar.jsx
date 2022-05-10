import styled from 'styled-components'
import logoImage from "../images/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {mobile} from "../responsive.js"
import React from 'react';
import { Link } from "react-router-dom"

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

        '&:hover': {
            backgroundColor: "#1b4171",
            color:"white",
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

const Left= styled.div`
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
    margin-right: 30px;
    justify-content: flex-end;
    ${mobile({flexDirection:"column"})};
`
const MenuItem = styled.div`
    margin-left: 25px;
`
const PageLink =styled.a`
    color: black;
    text-decoration: none;
    font-size: 15px;
    margin: 0 10px;

`


const Navbar = () => {
    const classes = useStyles();
    return (
      <AppBar>
          <Toolbar className= {classes.toolbar}>
              <Left>
              <Link to = {`/`}>  
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
                    <PageLink href= '/login'>
                        Giriş Yap
                    </PageLink>
                </MenuItem>

                <MenuItem>
                    <PageLink href= '/'>
                        Anasayfa
                    </PageLink>
                </MenuItem>
                <MenuItem>
                    <PageLink href= '/auctionList'>
                        Mezatlar
                    </PageLink>
                </MenuItem>
                <MenuItem>
                    <PageLink href= '/addfish'>
                        Balık Ekle
                    </PageLink>
                </MenuItem>


                  <MenuItem>
                      <Button
                          variant="contained"
                          size="large"
                          className={classes.button}
                          endIcon={<AccountCircleIcon/>}
                      >
                        Hesabım
                      </Button>
                  </MenuItem>
              </Right>
          </Toolbar>
      </AppBar>
      
    )
  }

export default Navbar;