const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');
const Banner = keystone.list('Banner');
const Conteudos = keystone.list('Conteudos');
const QuemSomos = keystone.list('QuemSomos');
const Services = keystone.list('Services');
const Depoiments = keystone.list('Depoiments');
const Company = keystone.list('Company');
const Contact = keystone.list('Contact');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/Banner', (req, res) => {
    Banner.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });
  
  app.get('/api/services', (req, res) => {
    Services.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/Conteudos', (req, res) => {
    Conteudos.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });
      
      
  app.get('/api/depoiments', (req, res) => {
    Depoiments.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });


  app.get('/api/QuemSomos', (req, res) => {
    QuemSomos.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/company', (req, res) => {
    Company.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/contact', (req, res) => {
    Contact.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};