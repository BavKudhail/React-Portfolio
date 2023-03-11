import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Project from './Project';
import Contact from './Contact';

function App() {
    return (
      <div>
      <Router>
        <div>
          <Header />
          <Routes>
          {/* Wrap Route elements in a Routes component */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contacts/*" element={<Contact />} />
          </Routes>
        </div>
      </Router>
 
      
     </div>
    );
  }


export default App;
