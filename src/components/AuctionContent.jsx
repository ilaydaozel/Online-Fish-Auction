import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AuctionContent.css';
import PositiveNotification from './PositiveNotification';


const Container = styled.div`
    margin-top: 80px;
    margin-bottom: 300px;
    display:flex;
    align-items: center;
    flex-direction: column;
`
const HeadTitle = styled.h1`
    color: #1b4171;
    test-align: center;
`
const PickFish = styled.div`
    margin: 10px;   
`
const ContainerTitle = styled.h4`
    font-weight: 1000;
    color: #1b4171;
    display:block;
    padding-bottom:20px;
`
const UpperContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 10px;
    width: 100%;
    heigth: 400px;
`
const LowerContainer = styled.div`
    display: flex;
    align-items:space-between;
    justify-content: center;
    margin-bottom: 200px;
    width: 100%;
    heigth: 400px;
`

const AuctionFishListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #1b4171;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 40%;
    padding: 10px;
    heigth: 800px;
    background-color: #fff;
`
/*curent fish container */
const CurrentFishContainer = styled.div`
    display: flex;
    padding: 60px 25px;
    flex-direction: column;
    margin: 0 20px ;
    width: 30%;
    heigth: 100%;
    background-color: #f5fbfd;
`
const CurFishInfoTitle = styled.h5`
    color: #1b4171;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    align-items: center;
    font-weight: 900;
`
const CurFishInfo = styled.div`
    display:flex;
    width: 10%;
    width: 100%;
    `
/*LiveStream Container */
const LiveStreamContainer = styled.div`
    width: 60%;
    margin: 10px;
    border: 1px solid gray; 
`
const LivePlaceHolder = styled.iframe`
    width: 100%;
`

const FishListTable = styled.table`
    background-color: #f5fbfd; 
`
const FishList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const GivenBidsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #1b4171;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 40%;
    padding: 10px;
    heigth: 300px;
    background-color: #f5fbfd;
    margin-left: 20px;`

const Button = styled.button`
        background-color: #F76540;
        border: 2px solid #F76540;
        border-radius: 10px;
        font-weight: 700;
        font-size: 20px;
        width: 30%;
        display: 'flex';
        margin-top: 5px;
        color: #FFFFFF;
        text-align: center;
        height: 40px;
        &:hover{
            background-color: #FFFFFF;
            border: 2px solid #F76540;
            color: #000000;
        }
`
/* give bid */

const BidContainer = styled.div`
    display: flex;
    padding: 10px 25px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 150px;
    flex: 1;
    position: fixed;
    bottom:0;
    background-color: #fefae0;
`


const GiveBid = styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 10px;
    align-itmes: center;
`
const Form = styled.form`
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: center;
`
const BidInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 2px solid  #1b4171;
    border-radius: 10px;
    margin: 5px 10px;
`
const BidSelect = styled.select`
    flex: 1;
    padding: 10px;
    border: 2px solid  #1b4171;
    border-radius: 10px;
    margin: 5px 10px;
`
const Th = styled.th`
    padding: 10px;
`
const AuctionContent = () => {

    const auction_id = useParams();
    const url = 'http://localhost:8080/auction/getFishPackage/' + auction_id.auctionId;

    //const { data: fishPackage, error, isPending } = useFetch(url);
    const [fishPackage, setFishPackage] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setFishPackage(result);
                    setBidList(currentFish.bids)
                })
    });



    const [currentFish, setCurrentFish] = useState({});
    const [bidList, setBidList] = useState([]);

    const [newBidValue, setNewBidValue] = useState(0);
    const [sortedBidList, setSortedBidList] = useState([]);


    const [currentFishId, setCurrentFishId] = useState('');
    const [maxBid, setMaxBid] = useState(0);
    const [sold, setSold]=useState(false);

    const handleClickPickFish = (e) => {
        e.preventDefault();

        const url = 'http://localhost:8080/auction/getCurrentFish/' + currentFishId;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                setCurrentFish(data);

                if (data.bids.length > 0) {
                    setMaxBid(data.bids[0].bid);
                } else {
                    setMaxBid(data.basePrice)
                }
            });
    }

    const handleClickSellFish = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/auctionManager/sellPackage/' + currentFish.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },

        }).then((response) => {
            response.json()
            if(response.ok === true){
                setSold(true)
            }
           this.render();

        }
        )
        .then((result) => {
                console.log("res", result);
            })
    }

    const handleNewBid = (e) => {
        e.preventDefault();

        if (newBidValue > maxBid) {
            fetch('http://localhost:8080/auctionManager/bid', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    bidderId: localStorage.getItem('currentUser'),
                    bid: newBidValue
                })
            })
            setMaxBid(newBidValue);
        } else {
            alert("En yüksek tekliften ya da taban fiyatından daha yüksek teklif vermelisiniz!");
        }
    }

    return (
        <Container>
            <UpperContainer>
                <LiveStreamContainer>
                    <LivePlaceHolder
                        overflow="hidden"
                        width="100%"
                        height="360"
                        src="https://www.youtube.com/watch?v=PEA1R0FMctM"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </LiveStreamContainer>


                <CurrentFishContainer>
                    <ContainerTitle>Şu anda satılan deniz ürünü</ContainerTitle>
                    
                    <CurFishInfo><CurFishInfoTitle>Tür </CurFishInfoTitle> {currentFish.fishType}</CurFishInfo>
                    <CurFishInfo><CurFishInfoTitle>Kilo </CurFishInfoTitle> {currentFish.fishAmount}</CurFishInfo>
                    <CurFishInfo><CurFishInfoTitle>Açılış Fiyatı </CurFishInfoTitle> {currentFish.basePrice}</CurFishInfo>
                    <CurFishInfo style={{border: "2px solid #1b4171", backgroundColor:"#fff", padding: "10px 5px ", margin:"10px 0 15px"}}><CurFishInfoTitle style={{color: "#F76540"}}>En yüksek Teklif </CurFishInfoTitle> {maxBid}</CurFishInfo>
                    {(localStorage.getItem("userRole") === "ROLE_ADMIN") ?
                        <Button style={{ width: "70%" }} onClick={handleClickSellFish}>Deniz Ürününü Sat</Button> : ""}
                    {console.log("sold",sold)}    
                    {sold? <PositiveNotification  trigger={sold} setTrigger={setSold}  message="Deniz Ürünü Satıldı" />: ""}    
                </CurrentFishContainer>

            </UpperContainer>
            <LowerContainer>
                <AuctionFishListContainer>
                    <ContainerTitle>Mezattaki Balıklar</ContainerTitle>
                    <FishList >

                        {fishPackage && (
                            <FishListTable>
                                <tr>
                                    <Th>Numara</Th>
                                    <Th>Balık Türü</Th>
                                    <Th>Kilosu</Th>
                                    <Th>Başlangıç Fiyatı</Th>
                                    <Th>Satıcı</Th>

                                </tr>
                                {fishPackage.map(fish => (fish.status === "UNSOLD" ?
                                    (<tr key={fish.id} >
                                        <td>{fish.turn} </td>
                                        <td>{fish.fishType} </td>
                                        <td>{fish.fishAmount} </td>
                                        <td>{fish.basePrice} </td>
                                        <td> {fish.sellerName} </td>

                                    </tr>) : ""
                                ))}
                            </FishListTable>
                        )}
                    </FishList>
                    {
                        (localStorage.getItem("userRole") === "ROLE_ADMIN") && (fishPackage && (
                            <PickFish>
                                <h5>Satılacak balığı seçin:</h5>
                                <Form onSubmit={handleClickPickFish}>

                                    <BidSelect onChange={(e) => setCurrentFishId(e.target.value)}>
                                        {fishPackage.map(fish => (fish.status === "UNSOLD" &&
                                            (<option key={fish.id} value={fish.id}>Numara: {fish.turn} Tür: {fish.fishType}</option>)
                                        ))}
                                    
                                    </BidSelect>

                                    <Button type="submit" >Seç</Button>

                                </Form>
                            </PickFish>
                        ))}

                </AuctionFishListContainer>


                <GivenBidsContainer>
                    <ContainerTitle>{currentFish.fishAmount} kilo {currentFish.fishType} için teklifler</ContainerTitle>

                    <div className="table" >
                        {bidList && (
                            <table>
                                <tr>
                                    <th>Teklifler</th>
                                    <th>Teklifi Veren Kullanıcı</th>
                                </tr>
                                {bidList.reverse().map(bid => (
                                    <tr key={bid.id} >
                                        <td>{bid.bid} </td>
                                        <td>{bid.bidderId} </td>
                                    </tr>
                                ))}

                            </table>
                        )
                        }
                    </div >

                </GivenBidsContainer>

            </LowerContainer>

            <BidContainer>
                <ContainerTitle>{currentFish.fishAmount} kilo {currentFish.fishType} için teklif ver</ContainerTitle>
                <GiveBid>
                    <Form onSubmit={handleNewBid}>
                        <BidInput
                            type="number"
                            placeholder="Teklif"
                            required
                            value={newBidValue}
                            onChange={(e) => setNewBidValue(e.target.value)} />
                        <Button type="submit" >Teklif Ver</Button>


                    </Form>
                </GiveBid>
            </BidContainer>


        </Container>
    )
}

export default AuctionContent;