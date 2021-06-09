const keystone = require('keystone');

const { Types } = keystone.Field;

const Conteudos = new keystone.List('Conteudos', {
    map: {name: 'key'},
    autocreate: true,
    nocreate: true,
    nodelete: true,
})

Conteudos.add({
    
    conteudo_1: {
        nomeConteudo: {
            type: Types.Text, 
            required: true, 
            index: true, 
            initial: true,
            label: 'nome do conteúdo 1',
            note: 'Adicione o nome desse conteúdo 1'
        },
            
        descricaoConteudo:{ 
            type: Types.Textarea, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Descrição do conteúdo 1',
            note: 'Conte-nos sobre esse conteúdo 1'
        },

        imagem: {
            type:Types.CloudinaryImage, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Imagem do conteúdo 1',
            note: 'Adicione uma imagem para esse conteúdo 1'
        },
        
        link: { 
            type: Types.Url, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Link do conteúdo 1',
            note: 'Adicione o link desse conteúdo 1'
        },
    },

    conteudo_2: {
        nomeConteudo: {
            type: Types.Text, 
            required: true, 
            index: true, 
            initial: true,
            label: 'nome do conteúdo 2',
            note: 'Adicione o nome desse conteúdo 2'
        },
            
        descricaoConteudo:{ 
            type: Types.Textarea, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Descrição do conteúdo 2',
            note: 'Conte-nos sobre esse conteúdo 2'
        },

        imagem: {
            type:Types.CloudinaryImage, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Imagem do conteúdo 2',
            note: 'Adicione uma imagem para esse conteúdo 2'
        },
        
        link: { 
            type: Types.Url, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Link do conteúdo 2',
            note: 'Adicione o link desse conteúdo 2'
        },
    },

    conteudo_3: {
        nomeConteudo: {
            type: Types.Text, 
            required: true, 
            index: true, 
            initial: true,
            label: 'nome do conteúdo 3',
            note: 'Adicione o nome desse conteúdo 3'
        },
            
        descricaoConteudo:{ 
            type: Types.Textarea, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Descrição do conteúdo 3',
            note: 'Conte-nos sobre esse conteúdo 3'
        },

        imagem: {
            type:Types.CloudinaryImage, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Imagem do conteúdo 3',
            note: 'Adicione uma imagem para esse conteúdo 3'
        },
        
        link: { 
            type: Types.Url, 
            required: true, 
            index: true, 
            initial: true,
            label: 'Link do conteúdo 3',
            note: 'Adicione o link desse conteúdo 3'
        },
    },
    

});

Conteudos.register()