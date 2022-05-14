import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, makeStyles } from '@material-ui/core';
import styled from "styled-components"
import React from 'react';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#FFFFFF",
        border: '2px solid #F76540',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        width: "50%",
        display: 'flex',

        '&:hover': {
            backgroundColor: "#F76540",
            border: '2px solid #F76540',
            color:"white",
        }
    },

    joinButton: {
        backgroundColor: "#1b4171",
        border: '2px solid #1b4171',
        color: "#FFFFFF",
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        width: "50%",
        /*display: ({open}) => open? "flex": "none", */
        marginTop: "10px",
        

        '&:hover': {
            backgroundColor: "#5ac8dd",
            border: '2px solid #1b4171',
            
            
        }
    },
}))


const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: ${(props) => props.check? "800px": "400px"};
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.check? "#fff3b0": "#f5fbfd"}; ;
    position: relative;
    padding: 10px;
`
const AuctionInfo = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 5px 0;
`
const Title = styled.h4`
    margin-right: 5px;
`
const Content = styled.h5`

`

const AuctionCard = ({item}) => {

  let statusText;
  let isOpen;
    if (item.status === "OPEN") {
        statusText = "Açık";
        isOpen = 1 ;
    }
    else {
        statusText = "Kapalı";
        isOpen = 0;
    }
    

  const classes = useStyles();
  return (
        <Container check={isOpen}>
            <AuctionInfo>
                <Title>Gerçekleşme Tarihi:</Title>
                <Content>{item.date}</Content>
            </AuctionInfo>

            <AuctionInfo>
                <Title>Durumu:</Title>
                <Content>{statusText}</Content>
            </AuctionInfo>
      
            <Link to = {`/fishList/${item.aucId}`} style={{width: "100%", display: 'flex', justifyContent: 'center'}} >
            <Button
                variant="contained"
                size="large"
                className={classes.button}
                endIcon={<VisibilityIcon />}
            >
            Deniz Ürünleri
            </Button>
            </Link>

            {isOpen? 
            <Link to = {`/auction/${item.aucId}`} style={{width: "100%", display: 'flex', justifyContent: 'center'}} >
            <Button
                variant="contained"
                size="large"
                className={classes.joinButton}
                endIcon={<AddCircleOutlineIcon />}
            >Mezata Katıl
            </Button>
            </Link>
            : <div/> }

        </Container> 
  )
}

export default AuctionCard