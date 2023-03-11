import React, {useState, useEffect} from 'react';
import axios from 'axios';
import data from './genrData.json'
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'



function Projects() {
  console.log(data)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

const listProjects = data.map(project => {
  return(
  <Carousel.Item>
    <img 
    className="d-block w-100"
    src={project.src}
    alt="text"
    />
    <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
  </Carousel.Item>
  )
})

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {listProjects}
    </Carousel>
  );
}

export default Projects