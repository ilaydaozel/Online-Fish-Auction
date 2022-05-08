import './App.css';
import Home from "./pages/Home";
import AuctionList from "./pages/AuctionList";
import AuctionFishTable from './pages/AuctionFishTable';
import Auction from './pages/Auction';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
    <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/auctionList' element={< AuctionList />}></Route>
            <Route exact path='/fishList/:auctionId' element={< AuctionFishTable />}></Route>
            <Route exact path='/auction/:auctionId' element={< Auction />}></Route>
            <Route exact path= '/login' element={  <AppContainer><AccountBox /></AppContainer>}></Route>
    </Routes>
  </Router>

  );
}

export default App;
