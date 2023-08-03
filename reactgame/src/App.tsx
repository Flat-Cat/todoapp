import './App.css'

import Home from './pages/home'
import Lexicon from './pages/lexicon'
import Game from './pages/game'

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from './components/navbar';

function App() {

  return (

    <div>
       
    <Router>
      <Navbar title="Navbar"></Navbar>

        <Routes>

          <Route path="/home" element={<Home/>}/>
          <Route path="/lexicon" element={<Lexicon/>}/>
          <Route path="/game" element={<Game/>}/> 

        </Routes>

    </Router>
    </div>


  )
}

export default App
