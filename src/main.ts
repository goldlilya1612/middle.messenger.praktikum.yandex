import Handlebars from 'handlebars';

import * as Components from './components';
import * as Pages from './pages';

import {PROFILE_PAGE_PROPS, CHATS_PAGE_PROPS} from "./utils/constants";


const pages = {
    'login': [Pages.LoginPage, {title: 'Вход'}],
    'register': [ Pages.RegisterPage, {title: 'Регистрация'} ],
    'chats': [Pages.ChatsPage, CHATS_PAGE_PROPS],
    'not-found-page': [Pages.NotFoundPage],
    'server-error-page': [Pages.ServerErrorPage],
    'profile': [Pages.ProfilePage, PROFILE_PAGE_PROPS],
}

Object.entries(Components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);

    Handlebars.registerHelper("isEmpty", function (value) {
        return value === "";
    });
    Handlebars.registerHelper("isFileAttached", function (value) {
        return value === "attached";
    });
    Handlebars.registerHelper("isOutgoing", function (value) {
        return value === "outgoing";
    });
    Handlebars.registerHelper("isViewMode", function (value) {
        return value === "view";
    });
    Handlebars.registerHelper("isEditingMode", function (value) {
        return value === "editing";
    });
    Handlebars.registerHelper("isPasswordEditingMode", function (value) {
        return value === "passwordEditing";
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

