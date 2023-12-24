import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const chatsPageProps = {
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
    messages: [
        {
            type: "incoming",
            time: '22:02',
            message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
                '\n' +
                'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            isFileAttached: 'not-attached',
        },
        {
            type: "incoming",
            time: '22:05',
            message: '',
            isFileAttached: 'attached',
        },
        {
            type: "outgoing",
            time: '23:23',
            message: 'Круто!',
            isFileAttached: 'not-attached',
        },
        {
            type: "outgoing",
            time: '23:55',
            message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
                '\n' +
                'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            isFileAttached: 'not-attached',
        },
        {
            type: "incoming",
            time: '22:02',
            message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
                '\n' +
                'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            isFileAttached: 'not-attached',
        },
        {
            type: "incoming",
            time: '22:05',
            message: '',
            isFileAttached: 'attached',
        },
        {
            type: "outgoing",
            time: '23:23',
            message: 'Круто!',
            isFileAttached: 'not-attached',
        },
        {
            type: "outgoing",
            time: '23:55',
            message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
                '\n' +
                'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            isFileAttached: 'not-attached',
        },
    ],
    menuButtons: [
        {
            text: "Добавить пользователя",
            color: "green",
        },
        {
            text: "Удалить пользователя",
            color: "yellow",
        },
        {
            text: "Удалить чат",
            color: "red",
        },
    ],
    attachButtons: [
        {
            text: "Фото и видео",
            color: "white",
        },
        {
            text: "Файл",
            color: "white",
        },
        {
            text: "Локация",
            color: "white",
        },
    ]
}

const profilePageProps = {
    title: "Лиля",
    mode: 'view',
    formInputs: [
        {
            name: "email",
            label: "Почта",
            value: "pochta@yandex.ru",
            type: "email",
        },
        {
            name: "login",
            label: "Логин",
            value: "lalvolodina",
            type: "text",
        },
        {
            name: "first_name",
            label: "Имя",
            value: "Лиля",
            type: "text",
        },
        {
            name: "second_name",
            label: "Фамилия",
            value: "Володина",
            type: "text",
        },
        {
            name: "display_name",
            label: "Имя в чате",
            value: "Лиля))))00)",
            type: "text",
        },
        {
            name: "phone",
            label: "Телефон",
            value: "+7(999)999-99-99",
            type: "tel",
        },
    ],
}


const pages = {
    'login': [Pages.LoginPage, {title: 'Вход'}],
    'register': [ Pages.RegisterPage, {title: 'Регистрация'} ],
    'chats': [Pages.ChatsPage, chatsPageProps],
    'not-found-page': [Pages.NotFoundPage],
    'server-error-page': [Pages.ServerErrorPage],
    'profile': [Pages.ProfilePage, profilePageProps],
}

Object.entries(Components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);

    Handlebars.registerHelper('isEmpty', function (value) {
        return value === '';
    });
    Handlebars.registerHelper('isFileAttached', function (value) {
        return value === 'attached';
    });
    Handlebars.registerHelper('isOutgoing', function (value) {
        return value === 'outgoing';
    });
    Handlebars.registerHelper('isViewMode', function (value) {
        return value === 'view';
    });
    Handlebars.registerHelper('isEditingMode', function (value) {
        return value === 'editing';
    });
});

function navigate(page: string) {
    const [ source, context ] = pages[page];
    const container = document.getElementById('app')!;
    container.innerHTML = Handlebars.compile(source)(context);
}

// remove comments to see NotFoundPage or ServerErrorPage
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

