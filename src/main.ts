import Handlebars from 'handlebars';

import router from './utils/core/Router';

import * as Components from './components';

import {
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ServerErrorPage,
} from './pages';

import LoginPageWithStore from './pages/login/login';
import ChatsPageWithStore from './pages/chats/chats';

import { ERoutes } from './utils/enums/routes.enum';

import {
  isEditingMode,
  isEmpty,
  isFileAttached,
  isOutgoing,
  isPasswordEditingMode,
  isViewMode,
} from './utils/helpers/helpers';
import { registerComponent } from './utils/helpers/register-component';
import store from './utils/core/Store';
import { getUser } from './services/auth';

Handlebars.registerHelper('isEmpty', isEmpty);
Handlebars.registerHelper('isFileAttached', isFileAttached);
Handlebars.registerHelper('isOutgoing', isOutgoing);
Handlebars.registerHelper('isViewMode', isViewMode);
Handlebars.registerHelper('isEditingMode', isEditingMode);
Handlebars.registerHelper('isPasswordEditingMode', isPasswordEditingMode);

Handlebars.registerPartial('FormAuth', Components.FormAuth);
Handlebars.registerPartial('ErrorBlock', Components.ErrorBlock);
Handlebars.registerPartial('ChatsBlock', Components.ChatsBlock);
Handlebars.registerPartial('ModalWindow', Components.ModalWindow);

registerComponent('Button', Components.Button);
registerComponent('SendButton', Components.SendButton);
registerComponent('Input', Components.Input);
registerComponent('InputField', Components.InputField);
registerComponent('RedirectLink', Components.RedirectLink);
registerComponent('ErrorLink', Components.ErrorLink);
registerComponent('ErrorLine', Components.ErrorLine);
registerComponent('SearchField', Components.SearchField);
registerComponent('ChatCard', Components.ChatCard);
registerComponent('MessagesHeader', Components.MessagesHeader);
registerComponent('ButtonChip', Components.ButtonChip);
registerComponent('Message', Components.Message);
registerComponent('MessageField', Components.MessageField);
registerComponent('ProfileInput', Components.ProfileInput);
registerComponent('ProfileInputView', Components.ProfileInputView);
registerComponent('ProfileButtonsBlock', Components.ProfileButtonsBlock);
registerComponent('EmptyBlock', Components.EmptyBlock);
registerComponent('ProfileArrowButton', Components.ProfileArrowButton);

window.addEventListener('popstate', () => {
  router.start();
});

document.addEventListener('DOMContentLoaded', async () => {
  store.removeState();

  router
    .use(ERoutes.LOGIN, LoginPageWithStore)
    .use(ERoutes.REGISTER, RegisterPage)
    .use(ERoutes.PROFILE, ProfilePage)
    .use(ERoutes.CHATS, ChatsPageWithStore)
    .use(ERoutes.SERVER_ERROR_PAGE, ServerErrorPage)
    .use(ERoutes.NOT_FOUND_PAGE, NotFoundPage);

  try {
    await getUser();

    const currentPath = sessionStorage.getItem('sessionRoute');

    if (currentPath) {
      sessionStorage.removeItem('sessionRoute');
    }

    const userData = store.getState('user');
    const inAuthorized = Object.keys(userData).length && !Object.keys(userData).includes('reason');

    if (inAuthorized) {
      router.go(
        currentPath
        || ERoutes.CHATS,
      );
    } else {
      router.go(ERoutes.LOGIN);
    }
  } catch (error) {
    router.go(ERoutes.LOGIN);
    throw new Error(`Ошибка: ${error}`);
  }
});
