import Handlebars from 'handlebars';

import router from './utils/core/Router';

import * as Components from './components';

import {
  ChatsPage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ServerErrorPage,
} from './pages';

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

document.addEventListener('DOMContentLoaded', () => {
  router
    .use(ERoutes.LOGIN, LoginPage)
    .use(ERoutes.REGISTER, RegisterPage)
    .use(ERoutes.PROFILE, ProfilePage)
    .use(ERoutes.CHATS, ChatsPage)
    .use(ERoutes.SERVER_ERROR_PAGE, ServerErrorPage)
    .use(ERoutes.NOT_FOUND_PAGE, NotFoundPage)
    .start();
});
