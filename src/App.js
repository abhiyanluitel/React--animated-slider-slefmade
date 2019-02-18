import React, { Component } from 'react';

import './App.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';
const sliderImages = [
  {url: slider1, alt: "image1"},
  {url: slider2, alt: "image2"},
  {url: slider3, alt: "image3"},
];

const sliderImage = sliderImages.map((image,index)=>{
  return(
    <img
     key={index}
     src={image.url}
     alt={image.alt}
     className="sliderImage"
     >
     <button>click me!</button>
     </img>
  ) 
});

class App extends Component {
  render() {
    return (
      <div className="App" >
       <Slider autoplay={3500}  >
        {sliderImage}
       </Slider>
        
      </div>
    );
  }
}

export default App;
