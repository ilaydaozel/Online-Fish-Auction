import './App.css';
import Home from "./pages/Home";
import AuctionList from "./pages/AuctionList";
import AuctionFishTable from './pages/AuctionFishTable';
import Auction from './pages/Auction';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/auctionList' element={< AuctionList />}></Route>
            <Route exact path='/fishList/:auctionId' element={< AuctionFishTable />}></Route>
            <Route exact path='/auction/:auctionId' element={< Auction />}></Route>
    </Routes>
  </Router>

  );
}

export default App;
