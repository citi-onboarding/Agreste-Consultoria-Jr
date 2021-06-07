const keystone = require('keystone');

const { Types } = keystone.Field;

const Service = new keystone.List('Service');

Service.add({
  titulo: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  descrição: {
    type: Types.TextArea,
    required: true,
    initial: true,
    index: true,
  },
  foto: {
    type: Types.CloudinaryImages,
    require: true,
  },
});

Service.register();