const keystone = require('keystone');

const { Types } = keystone.Field;

const Company = new keystone.List('Company',{
  autocreate: true,
  nocreate: true,
  nodelete: true,
  label: 'Informações da empresa',
});

Company.add({
  adress: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label:'Endereço',
  },
  phone: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: 'Telefone',
  },
  instagram: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label:'Instagram',
  },
  contact: {
    type: Types.Text,
    required: true,
    initial: true,
    label: 'Contato',
  }

});

Company.register();