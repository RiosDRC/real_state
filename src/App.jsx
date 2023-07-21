import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./pages"
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/real_state/" element={<Home />}/>
        </Routes>
      </Router>
  )
}

export default App
