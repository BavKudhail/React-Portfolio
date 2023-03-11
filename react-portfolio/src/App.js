import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Projects from './Projects';

function App() {
    return (
      <div>
      <Router>
        <div>
          <Header />
          <Routes>
          {/* Wrap Route elements in a Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects/*" element={<Projects />} />
          <Route path="/Contacts/" element={<Contact />} />
          </Routes>
        </div>
      </Router>
   

 
      
     </div>
    );
  }


export default App;
