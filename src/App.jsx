import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { About, Contact, Gallery, Home, Landing, Team } from "./pages"

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/real_state/" element={<Home />}/>
          <Route path="/real_state/landing" element={<Landing />}/>
          <Route path="/real_state/about" element={<About />}/>
          <Route path="/real_state/team" element={<Team />}/>
          <Route path="/real_state/gallery" element={<Gallery />}/>
          <Route path="/real_state/contact" element={<Contact />}/>
        </Routes>
      </Router>
  )
}

export default App;