import Handlebars from 'handlebars';

import * as Components from './components';

import { navigate } from './utils/helpers/navigate';
import { registerComponent } from './utils/helpers/register-component';
import {
  isEditingMode,
  isEmpty,
  isFileAttached,
  isOutgoing,
  isPasswordEditingMode,
  isViewMode,
} from './utils/helpers/helpers';

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

document.addEventListener('DOMContentLoaded', () => navigate('navigation'));
