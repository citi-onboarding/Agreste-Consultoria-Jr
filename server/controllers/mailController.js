
const dotenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (req, res, next) => {
  try {
    const { inputTextName, inputTextEmail, inputTextTel, inputTextAss, inputTextMsg } = req.body;

    const body = `
    Nome: ${inputTextName}
    Email: ${inputTextEmail}
    Telefone: ${inputTextTel}
    Assunto: ${inputTextAss}
    Mensagem: ${inputTextMsg}
    `;

    await mailServer({
      destinationUser: process.env.EMAIL,
      subjectText: inputTextAss,
      textOption: body,
    });

    res.status(200).send('E-mail enviado com sucesso');
  } catch (error) {
    res.status(500).send('Ops, algo deu errado, verifique a sua conexão ou tente novamente mais tarde');
    console.log(error);
  }
};

module.exports = sendMail;