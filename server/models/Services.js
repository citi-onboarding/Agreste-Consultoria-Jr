const keystone = require('keystone');

const { Types } = keystone.Field;

const Services = new keystone.List('Services', {label:'Serviços'});

Services.add({
  image: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
    label:'Imagem',
  },
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label:'Título',
  },
});

Services.register();