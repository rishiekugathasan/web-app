import React from 'react'
import Slider from "react-slick";

export default function ReviewCarousel() {
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,

    };
    return (
        <div className="reviewCarousel" style={{background: '#E8F7F2', padding: '5%'}}>
       
        <Slider {...settings}>
          <div>
            <p className="carouselText">My virtual  group session kept me motivated and built community - Ive lost 20lbs and stronger.</p>
          </div>
          <div>
            <p className="carouselText">I’ve tried personal training before and I can tell that the  full movement and strength programs are very specific to me - the team with  Mycure gave me the exact way to better my lifestyle to getting to my goals.</p>
          </div>
          <div>
            <p className="carouselText">The human experience is something I missed with COVID but found it with MyCure.</p>
          </div>
          <div>
            <p className="carouselText">They got the team and the knowledge to start me from scratch and now doing push ups, which was something I never thought I could, but im doing it!</p>
          </div>
        </Slider>
      </div>

    )
}
