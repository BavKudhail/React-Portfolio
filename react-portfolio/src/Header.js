import React from 'react';
import { NavLink } from 'react-router-dom';



function Home() {

  return (

    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand" */}
   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <NavLink 
        to="/Home"
        end
        className={({isActive}) =>
        isActive ? "nav-link active" : "nav-link" 
      }
      >
        Home<span class="sr-only">(current)</span>
        </NavLink>
        <NavLink 
        to="projects"
        className={({isActive}) => 
        isActive ? "nav-link active" : "nav-link" 
    }
        >
        Projects
        </NavLink>
        <NavLink 
        to="contact"
        className={({isActive}) => 
        isActive ? "nav-link active" : "nav-link" 
    }
        >
        Contact
        </NavLink>

        
     
    </div>
    
    {/* {<h1>React Portfolio</h1>} */}
  </div>

</nav>

    
</div>

  )
}

export default Home