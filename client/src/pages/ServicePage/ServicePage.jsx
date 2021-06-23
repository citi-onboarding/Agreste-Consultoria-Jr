import React, { useEffect, useState, Component } from 'react';
import './ServicePage.css';
import { CardService } from '../../components';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ServicePage(){
    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-5px",
        slidesToShow: 3,
        speed: 500,
        arows: true,
        dots: true,
    };

    const [service, setService] = useState([]);
    
    const loadService = async () => {
        const res = await axios.get('http://localhost:3001/api/services');
        setService(res.data);
    };

    useEffect(() => {
        loadService();
    }, []);
    

    useEffect(() => {
        console.log('Console:',service);
    }, [service]);

    return(
        <>
            <div className="service-page-container">
                <div className="service-page-title">
                    <h1>Nossos serviços</h1>
                </div>
                <div className="carrossel-service-page">
                    <Slider {...settings} className="Slider">
                        {service?.map(({ image, title, description }) => (
                            <>
                                <CardService contentText={title} imageService={image[0].url} descricptionService={description}/>
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}