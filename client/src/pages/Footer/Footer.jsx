import React, {useEffect, useState} from 'react';
import './Footer.css';
import axios from 'axios';

import telefone from ".\\imagem\\tell.png"
import insta from ".\\imagem\\insta.png"
import logoCiti from ".\\imagem\\logo-citi-preta 1.png"
import logoEmpresa from ".\\imagem\\tell.png"

export default function Footer(){
    const [company, setCompany] = useState({});
    
    const loadCompany = async () => {
        const res = await axios.get('http://localhost:3001/api/company');
        setCompany(res.data);
    };

    useEffect(() => {
        loadCompany();
    }, []);

    return(
        <footer className="footer">
    
        {company?.map(({
            adress,  
            phone, 
            instagram, 
            contact
        }) => (
        <>
            <div className="footer-esquerda">
                <div className="footer-social">
                    <div className="social-icon">
                        <img src={telefone} alt=""/>
                        <img src={insta} alt=""/>
                    </div>

                    <div className="social-txt">
                        <p>{phone}</p>
                        <p>{instagram}</p>
                    </div>
                </div>
                <p className="txt-desaparecer">Nos siga no instagram!</p>
                <div className="txt-responsivo">
                    <p>{contact}</p>
                </div>
            </div>

            <div className="footer-logo"> 
                <img src={logoEmpresa} alt=""/>
            </div>

            <div className="endereco">
                <p>{adress}</p>
                <div className="footer-logo-citi">
                    <strong>Made with &#60;&#47;&#62; and &hearts; by</strong>
                    <img src={logoCiti} alt=""/>
                </div>
            </div>
        </>  
        ))}
    </footer>

    );
} 