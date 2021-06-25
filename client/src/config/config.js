const dotenv = require('dotenv')
dotenv.config();

const production = process.env.NODE_ENV === "production";

const URL = production ? "https://agreste-consultoria.herokuapp.com" : "http://localhost:3001";


module.exports = URL;