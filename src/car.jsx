import bg from './assets/denis-pavlovic-NVu_zR3-aQQ-unsplash.webp'
import react from './assets/science.webp'
import figma from './assets/figma.webp'
import './car.css'
export default function car(){
    return(
        <div>
        <div className="slideshow-container">
 
<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={bg}/>
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src={react}/>
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src={figma}/>
  <div className="text">Caption Three</div>
</div>

<a className="prev" onclick="plusSlides(-1)">&#10094;</a>
<a className="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br/>

<div>
  <span className="dot" onclick="currentSlide(1)"></span> 
  <span className="dot" onclick="currentSlide(2)"></span> 
  <span className="dot" onclick="currentSlide(3)"></span> 
</div>
</div>
    )
}