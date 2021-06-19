const keystone = require('keystone');

const { Types } = keystone.Field;

const Conteudos = new keystone.List('Conteudos', {
    map: {name: 'key'},
    autocreate: true,
    nocreate: true,
    nodelete: true,
})

Conteudos.add({
    key: { 
        type: Types.Text, 
        default: 'Conteúdo', 
        noedit: true 
        },
        
    nomeConteudo: {
        type: Types.Text, 
        required: true, 
        index: true, 
        initial: true,
        label: 'Nome do conteúdo',
        note: 'Adicione o nome desse conteúdo'        
    },
            
    descricaoConteudo:{ 
        type: Types.Textarea, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Descrição do conteúdo',
            note: 'Conte-nos sobre esse conteúdo'
    },

    imagem: {
        type:Types.CloudinaryImage, 
        required: true, 
        index: true, 
        initial: true,
        label: 'Imagem do conteúdo',
        note: 'Adicione uma imagem para esse conteúdo'        
    },
        
link: { 
    type: Types.Url, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Link do conteúdo',
            note: 'Adicione o link desse conteúdo'        
    },
});

Conteudos.register()