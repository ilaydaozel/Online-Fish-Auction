import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, makeStyles } from '@material-ui/core';
import styled from "styled-components"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';




const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#F76540",
        border: '2px solid #F76540',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        width: "60%",
        display: 'flex',
        marginTop: "5px",
        color: "#FFFFFF",

        '&:hover': {
            backgroundColor: "#FFFFFF",
            border: '2px solid #F76540',
            color: "#000000",
        }
    },

    joinButton: {
        backgroundColor: "#1b4171",
        border: '2px solid #1b4171',
        color: "#FFFFFF",
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        width: "60%",
        marginTop: "5px",
        '&:hover': {
            backgroundColor: "#FFFFFF",
            border: '2px solid #1b4171',
            color: "#000",
        }
    },
    cancelButton: {
        backgroundColor: "black",
        border: '2px solid black',
        color: "#FFFFFF",
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        width: "60%",
        marginTop: "5px",
        '&:hover': {
            backgroundColor: "#FFFFFF",
            border: '2px solid black',
            color: "#000",
        }
    }
}))

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    `

const CardContainer = styled.div`
    margin: 15px 5px ;
    min-width: ${(props) => props.check ? "800px" : "400px"};
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.check ? "#fefae0" : "#f5fbfd"}; ;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1);;
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

const AuctionCard = ({ item }) => {

    let statusText;
    let isOpen;
    if (item.auctionStatus === "OPEN") {
        statusText = "Açık";
        isOpen = 1;
    }
    else if (item.auctionStatus === "STARTING") {
        statusText = "Henüz Başlamadı";
        isOpen = 0;
    }
    const [packageList, setPackageList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/package/allUnsoldPackages')
            .then(res => res.json())
            .then(
                (result) => {
                    setPackageList(result);
                })
    });

    const startAuction = (e) => {
        fetch(`http://localhost:8080/auction/start/${item.id}`, {
            method: 'PUT',
        }).then((response) => {
            response.json()
            e.preventDefault();
        })
            .then((result) => {
                console.log("başladı", result);
            })
    }


    const endAuction = (e) => {
        fetch(`http://localhost:8080/auction/end/${item.id}`, {
            method: 'PUT',
        }).then((response) => {
            response.json()
            e.preventDefault();
        })
            .then((result) => {
                console.log("değişti", result);
            })
    }

    const cancelAuction = (e) => {
        fetch(`http://localhost:8080/auction/cancel/${item.id}`, {
            method: 'PUT',
        }).then((response) => {
            response.json()
            e.preventDefault();
        })
            .then((result) => {
                console.log("iptal oldu", result);
            })
    }



    const classes = useStyles();
    return (
        <Container>
            <CardContainer check={isOpen}>
                <AuctionBox>
                    <AuctionInfo>
                        <Title><EventIcon /> Tarih:</Title>
                        <Content>{item.auctionStart.split('T')[0]}</Content>
                    </AuctionInfo>
                    <AuctionInfo>
                        <Title><AccessTimeIcon /> Saat:</Title>
                        <Content>{item.auctionStart.split('T')[1]}</Content>
                    </AuctionInfo>
                    <AuctionInfo>
                        <Title><BookmarkIcon /> Durumu:</Title>
                        <Content>{statusText}</Content>
                    </AuctionInfo>
                </AuctionBox>

                <Link to={`/fishList/${item.id}`} style={{ width: "100%", display: 'flex', justifyContent: 'center' }} >
                    <Button
                        variant="contained"
                        size="large"
                        className={classes.button}
                        endIcon={<VisibilityIcon />}
                    >
                        Deniz Ürünleri
                    </Button>
                </Link>

                {isOpen ?
                    <AuctionButtons>
                        <Link to={`/auction/${item.id}`} style={{ width: "100%", display: 'flex', justifyContent: 'center' }} >
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.joinButton}
                                endIcon={<AddCircleOutlineIcon />}
                            >Mezata Katıl
                            </Button>
                        </Link>

                        {localStorage.getItem("userRole")==="ROLE_ADMIN"?
                        <Button onClick={endAuction}
                            variant="contained"
                            size="large"
                            className={classes.joinButton}
                            endIcon={<CloseIcon />}
                        >Mezatı Bitir
                        </Button>: ""}

                    </AuctionButtons>


                    :

                    (localStorage.getItem("userRole")==="ROLE_ADMIN")?
                    <AuctionButtons>
                        <Button onClick={startAuction}
                            variant="contained"
                            size="large"
                            className={classes.joinButton}
                            endIcon={<CheckIcon />}
                        >Mezatı Başlat
                        </Button>
                    </AuctionButtons>: ""
                }
                
                {(localStorage.getItem("userRole")==="ROLE_ADMIN")?
                    <AuctionButtons>
                        <Button onClick={cancelAuction}
                            variant="contained"
                            size="large"
                            className={classes.cancelButton}
                            endIcon={<DeleteForeverIcon />}
                        >Mezatı İptal Et
                        </Button>
                    </AuctionButtons>: ""}

            </CardContainer>
        </Container>
    )
}

export default AuctionCard