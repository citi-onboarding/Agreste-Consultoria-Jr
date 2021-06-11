const keystone = require('keystone');

const { Types } = keystone.Field;

const Depoiments = new keystone.List('Depoiments', {label:'Depoimentos'});

Depoiments.add({
  image: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
    label: 'Imagem',
  },
  description: {
    type: Types.Textarea,
    required: true,
    initial: true,
    index: true,
    label:'Descrição',
  },
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    label:'Nome da pessoa/empresa'
  }
});

Depoiments.register();