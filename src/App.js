import './App.css';
import Home from "./pages/Home";
import AuctionList from "./pages/AuctionList";
import AuctionFishTable from './pages/AuctionFishTable';
import Auction from './pages/Auction';
import AddFish from './pages/Addfish';
import Login from "./pages/Login";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/auctionList' element={< AuctionList />}></Route>
        <Route exact path='/fishList/:auctionId' element={< AuctionFishTable />}></Route>
        <Route exact path='/auction/:auctionId' element={< Auction />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/addFish' element={< AddFish />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
