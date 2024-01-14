import { navigate } from '../../utils/helpers/navigate';
import Block from '../../utils/core/Block';

export class NavigationPage extends Block {
  constructor() {
    super({
      type: 'button',

      buttons: [
        {
          label: 'LoginPage',
          onClick: () => {
            navigate('login');
          },
        },
        {
          label: 'RegisterPage',
          onClick: () => {
            navigate('register');
          },
        },
        {
          label: 'ChatsPage',
          onClick: () => {
            navigate('chats');
          },
        },
        {
          label: 'NotFoundPage',
          onClick: () => {
            navigate('not-found-page');
          },
        },
        {
          label: 'ServerErrorPage',
          onClick: () => {
            navigate('server-error-page');
          },
        },
        {
          label: 'ProfilePage',
          onClick: () => {
            navigate('profile');
          },
        },
      ],
    });
  }

  render(): string {
    return (`
      <nav>
        <ul class='navigation'>
              {{#each buttons}}
                  {{{Button label=this.label type=../type onClick=this.onClick}}}
              {{/each}}  
        </ul>
      </nav>
        `);
  }
}
