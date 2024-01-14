/* eslint-disable max-len */
import Block from '../../utils/core/Block';
import { navigate } from '../../utils/helpers/navigate';

export class LoginPage extends Block {
  constructor() {
    super({
      onLogin: (event: Event) => {
        event.preventDefault();
        navigate('chats');
      },
      onLinkClick: () => {
        navigate('register');
      },
    });
  }

  render(): string {
    return (`
      <section class="form-container">
        {{#> FormAuth}}
          <h1 class="form__title">Вход</h1>
          <div class="form__wrapper">
            <div class="form__inputs">
                {{{ Input label="Логин" type="text" placeholder="Логин" name="login" error="" }}}
                {{{ Input label="Пароль" type="password" placeholder="Пароль" error="Неверный логин Неверный логин Неверный логин Неверный логин Неверный логин Неверный логинНеверный логин Неверный логин Неверный логин" name="password"}}}
            </div>
            <div class="form__buttons">
                {{{ Button type="submit" page="chats" label="Авторизоваться" onClick=onLogin}}}
                {{{ RedirectLink page="register" href="#" label="Нет аккаунта?" onClick=onLinkClick}}}
            </div>
          </div>
        {{/FormAuth}}
      </section>
        `);
  }
}
