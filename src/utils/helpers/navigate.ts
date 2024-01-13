import * as Pages from '../../pages/index';

interface IPages {
  [key: string]: any;
}

const pages: IPages = {
  navigation: Pages.NavigationPage,
  login: Pages.LoginPage,
  register: Pages.RegisterPage,
  chats: Pages.ChatsPage,
  'not-found-page': Pages.NotFoundPage,
  'server-error-page': Pages.ServerErrorPage,
  // profile: [Pages.ProfilePage, PROFILE_PAGE_PROPS],
};

export function navigate(page: string) {
  const app = document.getElementById('app');

  if (!app) return;

  app.innerHTML = '';

  const Component = pages[page];
  const component = new Component();
  app?.append(component.getContent()!);
}
