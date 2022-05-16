import image from './assets/image.png'
import {TextBlock, ImageBlock, ColumnsBlock, TitleBlock} from './classes/blocks'

const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1rem',
            'text-align': 'center'
        } 
    }),
    new ImageBlock( image, {
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
    }),
    new ColumnsBlock( ['Приложение на чистом JavaScript, без использования библиотек',
    'Узнать как работает принципы SOLID и ООП и JavaScript за один курс',
    'JavaScript - это простоб интересно. Научись создавать любые UI своими руками'], {
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold'
        }
    }),
    new TextBlock( text, {
        background: 'linear-gradient(to right, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold'
    })
    

    
]