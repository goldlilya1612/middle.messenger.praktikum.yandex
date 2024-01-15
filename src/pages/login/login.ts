/* eslint-disable max-len */
import Block from '../../utils/core/Block';
import { navigate } from '../../utils/helpers/navigate';
import * as validators from '../../utils/helpers/validators';
import { InputField } from '../../components';
import { isFormValid } from '../../utils/helpers/helpers';

export class LoginPage extends Block {
  constructor() {
    super({
      onLogin: (event: Event) => {
        event.preventDefault();
        const login = (this.refs.login as InputField).value();
        const password = (this.refs.password as InputField).value();

        console.log({ login, password });

        const isValid = isFormValid();

        if (!isValid) return;

        navigate('chats');
      },
      onLinkClick: () => {
        navigate('register');
      },
      validate: {
        login: validators.login,
        password: validators.password,
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
                {{{ InputField ref="login" validate=validate.login label="Логин" type="text" placeholder="Логин" name="login"}}}
                {{{ InputField ref="password" validate=validate.password label="Пароль" type="password" placeholder="Пароль" name="password"}}}
            </div>
            <div class="form__buttons">
                {{{ Button type="submit" label="Авторизоваться" onClick=onLogin}}}
                {{{ RedirectLink page="register" href="#" label="Нет аккаунта?" onClick=onLinkClick}}}
            </div>
          </div>
        {{/FormAuth}}
      </section>
        `);
  }
}
