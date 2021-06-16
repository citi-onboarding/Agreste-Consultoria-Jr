const keystone = require('keystone');

const { Types } = keystone.Field;

const Services = new keystone.List('Services', {
  map: {name: 'key'},
  label:'Serviços'
});

Services.add({
  key:{
    type: Types.Text,
    default:'Serviços',
    noedit: true
  },
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