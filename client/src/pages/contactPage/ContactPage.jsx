import React, { useEffect, useRef, useState } from 'react';
import './ContactPage.css';
import axios from 'axios';

export default function ContactPage(){

    const [inputTextName, setInputTextName] = useState('');
    const [inputTextEmail, setInputTextEmail] = useState('');
    const [inputTextTel, setInputTextTel] = useState('');
    const [inputTextAss, setInputTextAss] = useState('');
    const [inputTextMsg, setInputTextMsg] = useState('');

    const [contact, setContact] = useState([]);

    const inputRef = useRef();

    const loadContact = async () => {
        const res = await axios.get('http://localhost:3002/api/contact');
        setContact(res.data);
    };

    useEffect(() => {
        loadContact();
    }, []);

    useEffect(() => {
        inputRef.current.focus();
      }, []);

    return(
        <>
            <div className="page-container">
                <div className="image-contact"/>
                <div className="contact-container">
                    <div className="contact-elements">
                        <h1>Contato</h1>
                        {contact?.map(({ description }) => (
                            <>
                                <p>{description}</p>
                            </>
                        ))}
                        
                        <div className='contact-input'>
                                <input 
                                    type="text" 
                                    className="nome" 
                                    placeholder="Nome"
                                    ref={inputRef}
                                    value={inputTextName}
                                    onChange={(e) => setInputTextName(e.target.value)}
                                />
                                <div className="e-mail-telefone">
                                    <input 
                                        type="e-mail" 
                                        className="e-mail" 
                                        placeholder="E-mail"
                                        ref={inputRef}
                                        value={inputTextEmail}
                                        onChange={(e) => setInputTextEmail(e.target.value)}
                                    /> 
                                    <input 
                                        type="tel"
                                        className="telefone" 
                                        placeholder="Telefone"
                                        ref={inputRef}
                                        value={inputTextTel}
                                        onChange={(e) => setInputTextTel(e.target.value)}
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    className="assunto" 
                                    placeholder="Assunto"
                                    ref={inputRef}
                                    value={inputTextAss}
                                    onChange={(e) => setInputTextAss(e.target.value)}
                                /> 
                                <textarea 
                                    className="mensagem" 
                                    placeholder="Mensagem"
                                    ref={inputRef}
                                    value={inputTextMsg}
                                    onChange={(e) => setInputTextMsg(e.target.value)}
                                /> 
                        </div>
                        <div className='botao'>
                            <button> enviar </button>
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    );
}