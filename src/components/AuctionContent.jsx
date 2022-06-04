import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";
import './AuctionContent.css';


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

`
const AuctionButton=styled.button`
    background: #F76540;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    width: 100px;
    &:hover{

        background-color: #ddd;

    }

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
    align-items:center;
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
const CurFishInfoTitle =styled.h5`
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

/*.pickFish input,
.pickFish select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
}
*/
const FishListTable= styled.table`
    border: 2px solid forestgreen;
`
const FishList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const GivenBidsContainer= styled.div`
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
    background-color: gray;`

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
const BidInput= styled.input`
    flex: 1;
    padding: 10px;
    border: 2px solid  #1b4171;
    border-radius: 10px;
    margin: 5px 10px;
`

const GiveBid =styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 10px;
    align-itmes: center;
`

const AuctionContent = (role) => {

    const auction_id = useParams();
    const url = 'http://localhost:8080/auction/getFishPackage/' + auction_id.auctionId;

    const { data: fishPackage, error, isPending } = useFetch(url);

    const [currentFish, setCurrentFish] = useState({});
    const [bidList, setBidList] = useState([]);
    const [tempFish, setTempFish] = useState("");

    useEffect(() => {
        if (fishPackage) {
            setCurrentFish(fishPackage[0]);
        }
    }, [fishPackage]);

    
    const handleClick = (e) => {
        console.log("submitted");

        e.preventDefault();
        setCurrentFish(fishPackage.find( ( selectedFish ) => selectedFish.id === tempFish));
        /*setCurrentFish(fishPackage.find( ( selectedFish ) => selectedFish.id === tempFish));*/
        console.log("currentfish assigned", currentFish)
    }

    const giveBid =(e)=>{
        
    }
    return (
        <Container>
            <UpperContainer>
                <LiveStreamContainer>
                    <LivePlaceHolder
                        overflow= "hidden"
                            width="100%"
                             height="360"
                            src= "https://www.youtube.com/watch?v=PEA1R0FMctM"
                            frameBorder="0"
                            allowFullScreen= ""
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </LiveStreamContainer>

                
                    <CurrentFishContainer>
                            <ContainerTitle>Şu anda satılan deniz ürünü</ContainerTitle>
                            <CurFishInfo><CurFishInfoTitle>Tür </CurFishInfoTitle> {currentFish.fishType}</CurFishInfo>
                            <CurFishInfo><CurFishInfoTitle>Kilo </CurFishInfoTitle> {currentFish.fishAmount}</CurFishInfo>
                            <CurFishInfo><CurFishInfoTitle>Açılış Fiyatı </CurFishInfoTitle> {currentFish.basePrice}</CurFishInfo>
                            <CurFishInfo><CurFishInfoTitle>Son Fiyat </CurFishInfoTitle> {currentFish.soldPrice}</CurFishInfo>
                            <CurFishInfo><CurFishInfoTitle>Satıcı </CurFishInfoTitle> {currentFish.sellerName} {currentFish.sellerSurname}</CurFishInfo>
                            {(localStorage.getItem("userRole") === "ROLE_ADMIN") ?
                                <Button style={{width:"70%"}} onClick={() => {
                                    const url = 'http://localhost:8080/auction/fishPackage/' + currentFish.id;
                                    fetch(url, {
                                        method: 'PUT',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json'
                                        }
                                    }).then(res => res.json())
                                        .then(data => {
                                            console.log(data)
                                        })
                                }}>Deniz Ürününü Sat</Button>: ""}
                        </CurrentFishContainer>

            </UpperContainer>
              <LowerContainer>
              <AuctionFishListContainer>
                    <ContainerTitle>Mezattaki Balıklar</ContainerTitle>
                    <FishList >
                        {isPending && <div>Loading...</div>}
                        {error && <div>Error!</div>}
                        {fishPackage && (
                            <FishListTable>
                                <tr>
                                    <th>Numara</th>
                                    <th>Balık Türü</th>
                                    <th>Kilosu</th>
                                    <th>Başlangıç Fiyatı</th>
                                    <th>Satıcı</th>
                                </tr>
                                {fishPackage.map(fish => (fish.status === "UNSOLD" &&
                                    (<tr key={fish.id} >
                                        <td>{fish.turn} </td>
                                        <td>{fish.fishType} </td>
                                        <td>{fish.fishAmount} </td>
                                        <td>{fish.basePrice} </td>
                                        <td>{fish.sellerName} </td>
                                    </tr>)
                                ))}
                            </FishListTable>
                        )}
                    </FishList>
                    {
                        (localStorage.getItem("userRole") === "ROLE_ADMIN") && (fishPackage && (
                            <PickFish>
                            <form onSubmit= {handleClick}>
                                <h5>Satılacak balığı seçin:</h5>
                                <select name="fish" placeholder='Deniz Ürünü' value={tempFish} onChange={(e) => setTempFish(e.target.value)}  >
                            {fishPackage.map((item) => (
                                
                                <option value={item.id}>{item.id}</option>
                                
                                ))}
                              
                                </select>
                                {console.log("tempfish",tempFish)}
                                <Button type="submit" >Submit</Button>

                            </form>
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
                                    {bidList.map(bid => (
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
                    <BidInput type="number" placeholder="Teklifiniz"  />
                    <Button type="submit" onClick={giveBid}>Teklif Ver</Button>
                </GiveBid>
            </BidContainer>


        </Container>
    )
}

export default AuctionContent;



