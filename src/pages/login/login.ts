import Block from '../../utils/core/Block';
import * as validators from '../../utils/helpers/validators';
import { InputField } from '../../components';
import { isFormValid } from '../../utils/helpers/helpers';
import router from '../../utils/core/Router';
import { ERoutes } from '../../utils/enums/routes.enum';
import { ILogin } from '../../utils/interfaces/login.interface';
import { loginUser } from '../../services/auth';

export class LoginPage extends Block {
  constructor() {
    super({
      onLogin: async (event: Event) => {
        event.preventDefault();
        const login = (this.refs.login as InputField).value();
        const password = (this.refs.password as InputField).value();

        const isValid = isFormValid();

        if (!isValid) return;

        const userData: ILogin = {
          login,
          password,
        };

        try {
          await loginUser(userData);
        } catch (error: any) {
          throw new Error(error);
        }
      },
      onLinkClick: () => {
        router.go(ERoutes.REGISTER);
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
                {{{ RedirectLink page="register" label="Нет аккаунта?" onClick=onLinkClick}}}
            </div>
          </div>
        {{/FormAuth}}
      </section>
        `);
  }
}
