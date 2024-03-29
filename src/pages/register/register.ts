import Block from '../../utils/core/Block';
import { navigate } from '../../utils/helpers/navigate';
import * as validators from '../../utils/helpers/validators';
import { InputField } from '../../components';
import { isFormValid } from '../../utils/helpers/helpers';

export class RegisterPage extends Block {
  constructor() {
    super({
      title: 'Регистрация',
      onRegister: (event: Event) => {
        event.preventDefault();
        const email = (this.refs.email as InputField).value();
        const login = (this.refs.login as InputField).value();
        const firstName = (this.refs.first_name as InputField).value();
        const secondName = (this.refs.second_name as InputField).value();
        const phone = (this.refs.phone as InputField).value();

        const password = (this.refs.password as InputField).value();
        const passwordAgain = (this.refs.password_again as InputField).value();

        console.log({
          email,
          login,
          password,
          phone,
          first_name: firstName,
          second_name: secondName,
          password_again: passwordAgain,
        });

        const isValid = isFormValid();

        if (!isValid) return;

        navigate('chats');
      },
      onLinkClick: () => {
        navigate('login');
      },
      validate: {
        login: validators.login,
        password: validators.password,
        phone: validators.phone,
        email: validators.email,
        name: validators.name,
        passwordAgain: validators.passwordAgain,
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
              {{{ InputField ref="email" validate=validate.email label="Почта" type="email" placeholder="Почта" name="email" }}}
              {{{ InputField ref="login" validate=validate.login label="Логин" type="text" placeholder="Логин" name="login" }}}
              {{{ InputField ref="first_name" validate=validate.name label="Имя" type="text" placeholder="Имя" name="first_name" }}}
              {{{ InputField ref="second_name" validate=validate.name label="Фамилия" type="text" placeholder="Фамилия" name="second_name" }}}
              {{{ InputField ref="phone" validate=validate.phone label="Телефон" type="tel" placeholder="Телефон" name="phone" }}}
              {{{ InputField ref="password" validate=validate.password label="Пароль" type="password" placeholder="Пароль" name="password"}}}
              {{{ InputField ref="password_again" validate=validate.passwordAgain label="Пароль (еще раз)" type="password" placeholder="Пароль" name="password-again"}}}
          </div>
            <div class="form__buttons">
              {{{ Button type="submit" label="Зарегистрироваться" onClick=onRegister}}}
              {{{ RedirectLink page="login" href="#" label="Войти"}}}
            </div>
          </div>
        {{/FormAuth}}
    </section>
        `);
  }
}
