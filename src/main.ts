import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const chatsProps = {
    chats: [
        {
            name:  "Андрей",
            message: "Изображение",
            isIncoming: true,
            time: '10:49',
            count: 2,
        },
        {
            name:  "Киноклуб",
            message: "Круто!",
            isIncoming: false,
            time: '12:00',
        },
        {
            name:  "Илья",
            message: "Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас особенный выпуск новостей!",
            isIncoming: true,
            time: '13:23',
            count: 4,
        },
        {
            name:  "Андрей",
            message: "Изображение",
            isIncoming: true,
            time: 'Пн',
            count: 2,
        },
        {
            name:  "Киноклуб",
            message: "Круто!",
            isIncoming: false,
            time: 'Вт',
        },
        {
            name:  "Илья",
            message: "Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас особенный выпуск новостей!",
            isIncoming: true,
            time: 'Ср',
            count: 4,
        },
        {
            name:  "Андрей",
            message: "Изображение",
            isIncoming: true,
            time: 'Чт',
            count: 2,
        },
        {
            name:  "Киноклуб",
            message: "Круто!",
            isIncoming: false,
            time: 'Пт',
        },
        {
            name:  "Илья",
            message: "Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас особенный выпуск новостей!",
            isIncoming: true,
            time: 'Сб',
            count: 4,
        },
    ],
}


const pages = {
    'login': [Pages.LoginPage, {title: 'Вход'}],
    'register': [ Pages.RegisterPage, {title: 'Регистрация'} ],
    'chats': [Pages.ChatsPage, chatsProps],
    'not-found-page': [Pages.NotFoundPage],
    'server-error-page': [Pages.ServerErrorPage],
}

Object.entries(Components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);
    Handlebars.registerHelper('isEmpty', function (value) {
        console.log(value === '')
        return value === '';
    });

});

function navigate(page: string) {
    const [ source, context ] = pages[page];
    const container = document.getElementById('app')!;
    container.innerHTML = Handlebars.compile(source)(context);
}

// document.addEventListener('DOMContentLoaded', () => navigate('not-found-page'));
// document.addEventListener('DOMContentLoaded', () => navigate('server-error-page'));
document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
    //@ts-ignore
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

