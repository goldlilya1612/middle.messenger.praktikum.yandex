import Handlebars from 'handlebars';

import * as Components from './components';

import { navigate } from './utils/helpers/navigate';
import { registerComponent } from './utils/helpers/register-component';

// change field "mode" in constants.ts to switch profile mode
// const pages = {
//   chats: [Pages.ChatsPage, CHATS_PAGE_PROPS],
//   profile: [Pages.ProfilePage, PROFILE_PAGE_PROPS],
// };

// Object.entries(Components).forEach(([name, component]) => {
//   Handlebars.registerPartial(name, component);
//
//   Handlebars.registerHelper('isEmpty', isEmpty);
//   Handlebars.registerHelper('isFileAttached', isFileAttached);
//   Handlebars.registerHelper('isOutgoing', isOutgoing);
//   Handlebars.registerHelper('isViewMode', isViewMode);
//   Handlebars.registerHelper('isEditingMode', isEditingMode);
//   Handlebars.registerHelper('isPasswordEditingMode', isPasswordEditingMode);
// });

Handlebars.registerPartial('FormAuth', Components.FormAuth);
Handlebars.registerPartial('ErrorBlock', Components.ErrorBlock);
Handlebars.registerPartial('ChatsBlock', Components.ChatsBlock);

registerComponent('Button', Components.Button);
registerComponent('Input', Components.Input);
registerComponent('RedirectLink', Components.RedirectLink);
registerComponent('ErrorLink', Components.ErrorLink);

document.addEventListener('DOMContentLoaded', () => navigate('navigation'));
