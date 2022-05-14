import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, makeStyles } from '@material-ui/core';
import styled from "styled-components"
import React from 'react';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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
        backgroundColor: "#5ac8dd",
        border: '2px solid #1b4171',
        color: "#FFFFFF",
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        width: "50%",
        color: "black",
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
const Title = styled.h5`
    margin-right: 5px;
    font-weight: 700;
    display: flex;
    align-items: center;
    
`
const Content = styled.h5`

`
const AuctionButtons = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;

`
const AuctionBox = styled.div`
    padding-bottom: 20px;
`

const AuctionCard = ({item}) => {

  let statusText;
  let isOpen;
    if (item.auctionStatus === "OPEN") {
        statusText = "Açık";
        isOpen = 1 ;
    }
    else if (item.auctionStatus === "STARTING") {
        statusText = "Henüz Başlamadı";
        isOpen = 0;
    }
    

  const classes = useStyles();
  return (
        <Container check={isOpen}>
        <AuctionBox>
            <AuctionInfo>
                <Title><EventIcon/> Tarih:</Title>
                <Content>{item.auctionStart}</Content>
            </AuctionInfo>
            <AuctionInfo>
                <Title><AccessTimeIcon/> Saat:</Title>
                <Content>{item.auctionStart}</Content>
            </AuctionInfo>
            <AuctionInfo>
                <Title><BookmarkIcon/> Durumu:</Title>
                <Content>{statusText}</Content>
            </AuctionInfo>
        </AuctionBox>

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
            <AuctionButtons>
                <Link to = {`/auction/${item.aucId}`} style={{width: "100%", display: 'flex', justifyContent: 'center'}} >
                <Button
                    variant="contained"
                    size="large"
                    className={classes.joinButton}
                    endIcon={<AddCircleOutlineIcon />}
                >Mezata Katıl
                </Button>
                </Link>
                <Button
                    variant="contained"
                    size="large"
                    className={classes.joinButton}
                    endIcon={<CloseIcon />}
                >Mezatı Bitir
                </Button>
            </AuctionButtons>

            : <div/> }

        </Container> 
  )
}

export default AuctionCard