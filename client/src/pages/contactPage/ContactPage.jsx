import React, { useEffect, useState } from 'react';
import './ContactPage.css';
import axios from 'axios';

export default function ContactPage(){

    const [inputTextName, setInputTextName] = useState('');
    const [inputTextEmail, setInputTextEmail] = useState('');
    const [inputTextTel, setInputTextTel] = useState('');
    const [inputTextAss, setInputTextAss] = useState('');
    const [inputTextMsg, setInputTextMsg] = useState('');

    const [contact, setContact] = useState([]);

    const loadContact = async () => {
        const res = await axios.get('http://localhost:3001/api/contact');
        setContact(res.data);
    };

    useEffect(() => {
        loadContact();
    }, []);

    const sendEmail = async () => {
        try {
            await axios.post('http://localhost:3001/api/contact', {inputTextName, inputTextEmail, inputTextTel, inputTextAss, inputTextMsg});
            console.log('Email enviado');
        } catch (error) {
            console.log(`Houve um erro: ${error}`);
        }
    }

    return(
        <>
            <form id="contato" className="page-container" onSubmit={sendEmail}>
                <div className="image-contact"/>
                <div className="contact-container">
                    <div className="contact-elements">
                        <div className="section-contact-title">
                            <h1>Contato</h1>
                        </div>

                        {contact?.map(({ description }) => (
                            <>
                                <p>{description}</p>
                            </>
                        ))}
                        
                        <form >
                            <div className='contact-input'>
                                    <input 
                                        type="text"
                                        name="name" 
                                        className="nome-input" 
                                        placeholder="Nome"
                                        required
                                        value={inputTextName}
                                        onChange={(e) => setInputTextName(e.target.value)}
                                    />
                                    <div className="e-mail-telefone">
                                        <input 
                                            type="e-mail" 
                                            name="e-mail"
                                            className="e-mail-input" 
                                            placeholder="E-mail"
                                            required
                                            value={inputTextEmail}
                                            onChange={(e) => setInputTextEmail(e.target.value)}
                                        /> 
                                        <input 
                                            type="tel"
                                            name="tel"
                                            className="telefone-input" 
                                            placeholder="Telefone"
                                            required
                                            value={inputTextTel}
                                            onChange={(e) => setInputTextTel(e.target.value)}
                                        />
                                    </div>
                                    <input 
                                        type="text"
                                        name="subject"
                                        className="assunto" 
                                        placeholder="Assunto"
                                        value={inputTextAss}
                                        onChange={(e) => setInputTextAss(e.target.value)}
                                    /> 
                                    <textarea 
                                        className="mensagem"
                                        name="mensage"
                                        placeholder="Mensagem"
                                        value={inputTextMsg}
                                        onChange={(e) => setInputTextMsg(e.target.value)}
                                    /> 

                                

                            </div>
                            <div className="botao-contato-web" role="button">
                                <button type='submit'className="custom-botao-web" onClick={sendEmail}> Enviar </button>
                            </div>
                            <div className="botao-contato-mobile" role="button" >
                                <button type='submit' className="custom-botao-mobile" onClick={sendEmail}> Enviar </button>
                            </div>
                        </form>
                    </div>
                </div> 
            </form> 
        </>
    );
}