import React from "react";
import './Depoimento.css';
import Slider from "react-slick";

import { default as CardDepoiment } from "../../components/CardDepoiment";


export default function Depoimento(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: "ease",
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
          ]
        
    };

   
    
    return(
        <div className="slick-depoimentos">
            <div className="txt-Depoimento">
                <p>Nossos clientes</p>
            </div>
            <div className="cont">
                <Slider {...settings}>
                    <CardDepoiment/>
                    <CardDepoiment/>
                    <CardDepoiment/>
                    <CardDepoiment/>
                    <CardDepoiment/>
                    <CardDepoiment/>
                    <CardDepoiment/>
                    <CardDepoiment/>
                    <CardDepoiment/>
                </Slider>
            </div>
        </div>
    
    );
}

