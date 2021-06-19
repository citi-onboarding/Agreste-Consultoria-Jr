const keystone = require('keystone');

const { Types } = keystone.Field;

const Contact = new keystone.List('Contact',{
    map: {name: 'key'},
    autocreate: true,
    nocreate: true,
    nodelete: true,
  label: 'Chamada da seção de contato',
});

Contact.add({
    key:{
        type: Types.Text,
        default:'Seção Contato',
        noedit: true
      },
    description: {
    type: Types.Textarea,
    required: true,
    initial: true,
    label: 'Chamada formulário',
  }

});

Contact.register();