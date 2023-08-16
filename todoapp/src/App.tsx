import './App.css'

import Home from './pages/home'
import Lexicon from './pages/lexicon'
import Todo from './pages/todo'

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
          <Route path="/todo" element={<Todo/>}/> 

        </Routes>

    </Router>
    </div>


  )
}

export default App
