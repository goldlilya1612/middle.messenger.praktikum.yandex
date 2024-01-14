/* eslint-disable max-len */
import Block from '../../utils/core/Block';
import { navigate } from '../../utils/helpers/navigate';

export class RegisterPage extends Block {
  constructor() {
    super({
      title: 'Регистрация',
      onLogin: (event: Event) => {
        event.preventDefault();
        navigate('chats');
      },
      onLinkClick: () => {
        navigate('login');
      },
    });
  }

  render(): string {
    return (`
      <section class="form-container">
        {{#> FormAuth}}
          <h1 class="form__title">{{title}}</h1>
          <div class="form__wrapper">
            <div class="form__inputs">
              {{{ Input error="" label="Почта" type="email" placeholder="Почта" name="email" }}}
              {{{ Input error="" label="Логин" type="text" placeholder="Логин" name="login" }}}
              {{{ Input error="" label="Имя" type="text" placeholder="Имя" name="first_name" }}}
              {{{ Input error="" label="Фамилия" type="text" placeholder="Фамилия" name="second_name" }}}
              {{{ Input error="" label="Телефон" type="tel" placeholder="Телефон" name="phone" }}}
              {{{ Input error="" label="Пароль" type="password" placeholder="Пароль" name="password"}}}
              {{{ Input error="" label="Пароль (еще раз)" type="password" placeholder="Пароль" error="Пароли не совпадают" name="password-again"}}}
          </div>
            <div class="form__buttons">
              {{{ Button type="submit" label="Зарегистрироваться"}}}
              {{{ RedirectLink page="login" href="#" label="Войти"}}}
            </div>
          </div>
        {{/FormAuth}}
    </section>
        `);
  }
}
