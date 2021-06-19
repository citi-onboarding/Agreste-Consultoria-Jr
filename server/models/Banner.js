const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner',
{map: {name: "key"},
autocreate: true,
nocreate: true,
nodelete: true,
}); 

Banner.add({
    key: { 
        type: Types.Text, 
        default: 'Banner', 
        noedit: true
        },

    image: {
        type: Types.CloudinaryImages,
        required: true,
        initial:true,
        label: "Imagem do Banner",
    },
        
    titulo: {
        type: Types.Text,
        require: true,
        initial: true,
        index: true,
        label: "Título do Banner",
        note: "Dê um título ao seu Banner"
    },
        
    descricaoBanner:{ 
        type: Types.Textarea, 
        required: true, 
        index: true, 
        initial: true,
        label: 'Descrição do Banner',
        note: 'Conte-nos sobre esse sua proposta de valor'
    },
});

Banner.register();