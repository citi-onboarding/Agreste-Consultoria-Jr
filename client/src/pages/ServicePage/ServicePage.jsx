import React, { useEffect, useState } from 'react';
import './ServicePage.css';
import { CardService } from '../../components';
import axios from 'axios';

export default function ServicePage(){
    
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
                    {service?.map(({ image, title }) => (
                        <>
                            <CardService contentText={title} imageService={image[0].url}/>
                        </>
                    ))}
                    
                </div>
            </div>
        </>
    );
}