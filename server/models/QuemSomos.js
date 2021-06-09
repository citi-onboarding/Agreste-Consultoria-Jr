const keystone = require('keystone');

const { Types } = keystone.Field;

const QuemSomos = new keystone.List('QuemSomos', {
    map: {name: 'key'},
    autocreate: true,
    nocreate: true,
    nodelete: true,
})

QuemSomos.add({
    quemSomos: {
        type: Types.Textarea,
        required: true,
        initial: true,
        index: true,
        label: 'Quem Somos',
        note: 'Conte-nos sobre quem é a empresa'
    },
    missao: {
        type: Types.Textarea,
        required: true,
        initial: true,
        index: true,
        label: 'Missão',
        note: 'Conte-nos sobre a missão da empresa'
    },
    visao: {
        type: Types.Textarea,
        required: true,
        initial: true,
        index: true,
        label: 'Visão',
        note: 'Conte-nos sobre a visão da empresa'
    },
    valores: {
        type: Types.TextArray,
        required: true,
        initial: true,
        index: true,
        label: 'Visão',
        note: 'Conte-nos sobre os valores da empresa'
    }

});

QuemSomos.register()