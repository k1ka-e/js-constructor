import image from './assets/image.png'

export const model = [
    {type: 'title', value: 'Конструктор сайтов на чистом JavaScript',
    options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1rem',
            'text-align': 'center'
        }
    }
    },
    {type: 'image', value: image,
    options: {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '600px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }
    },
    {type: 'columns', value: [
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнать как работает принципы SOLID и ООП и JavaScript за один курс',
        'JavaScript - это простоб интересно. Научись создавать любые UI своими руками'
    ], options: {
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold'
        }
    }},
    {type: 'text',  value: '',
    options: {
        background: 'linear-gradient(to right, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold'
    }}
    

    
]