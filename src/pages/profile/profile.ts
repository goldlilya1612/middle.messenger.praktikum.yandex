/* eslint-disable max-len */
import Block from '../../utils/core/Block';
import { PROFILE_PAGE_PROPS } from '../../utils/constants';
import { InputField } from '../../components';
import { isFormValid } from '../../utils/helpers/helpers';
import { navigate } from '../../utils/helpers/navigate';
import * as validators from '../../utils/helpers/validators';

export class ProfilePage extends Block {
  constructor() {
    const { mode, title } = PROFILE_PAGE_PROPS;
    super({
      mode,
      title,
      onEdit: (event: Event) => {
        event.preventDefault();
        const email = (this.refs.email as InputField).value();
        const login = (this.refs.login as InputField).value();
        const firstName = (this.refs.first_name as InputField).value();
        const secondName = (this.refs.second_name as InputField).value();
        const displayName = (this.refs.display_name as InputField).value();
        const phone = (this.refs.phone as InputField).value();

        console.log({
          email,
          login,
          phone,
          first_name: firstName,
          second_name: secondName,
          display_name: displayName,
        });

        const isValid = isFormValid();

        if (!isValid) return;

        navigate('chats');
      },
      onEditPassword: (event: Event) => {
        event.preventDefault();

        const password = (this.refs.password as InputField).value();
        const newPassword = (this.refs.new_password as InputField).value();
        const newPasswordAgain = (this.refs.new_password_again as InputField).value();

        console.log({
          password,
          new_password: newPassword,
          new_password_gain: newPasswordAgain,
        });

        const isValid = isFormValid();

        if (!isValid) return;

        navigate('chats');
      },
      validate: {
        password: validators.password,
        passwordAgain: validators.passwordAgain,
      },
    });
  }

  protected render(): string {
    const { title } = this.props;
    return (`
            <section class="profile-page">
                <div class="profile-page__go-back">
                    <button>
                        <img src="assets/go-back.svg" alt="go-back">
                    </button>
                </div>
                <div class="profile">
                    {{#if (isEditingMode mode)}}
                        <div>
                            <div class="profile__image-block">
                                <img class="profile__image profile__image_editing-mode" src="assets/profile.svg" alt="profile">
                                <span class="profile__image-mask">
                                <button class="profile__image-button"></button>
                            </span>
                            </div>
                        </div>
                        <form class="profile__form-wrapper">
                            <div class="profile__form">
                                {{{ ProfileInput ref="email" validate=validate.email label="Почта" type="email" value="pochta@yandex.ru" name="email" }}}
                                {{{ ProfileInput ref="login" validate=validate.login label="Логин" type="text" value="lalvolodina" name="login" }}}
                                {{{ ProfileInput ref="first_name" validate=validate.name label="Имя" type="text" value="Лиля" name="first_name" }}}
                                {{{ ProfileInput ref="second_name" validate=validate.name label="Фамилия" type="text" value="Володина" name="second_name" }}}
                                {{{ ProfileInput ref="display_name" validate=validate.name label="Имя в чате" type="text" value="Лиля)))0))0" name="display_name" }}}
                                {{{ ProfileInput ref="phone" validate=validate.phone label="Телефон" type="tel" value="999999999999999" name="phone" }}}
                            </div>
                            {{{ Button type="submit" onClick=onEdit label="Сохранить"}}}
                        </form>
<!--                        {{#> ModalWindow  title="Загрузить файл"}}-->
<!--                            &lt;!&ndash;                <p class="modal-window__file-name">pic.1</p>&ndash;&gt;-->
<!--                            <form>-->
<!--                                <div class="modal-window__form-wrapper">-->
<!--                                    <span class="modal-window__input-file-wrapper">-->
<!--                                        Выбрать файл на компьютере-->
<!--                                        <input name="avatar" id="avatar" class="modal-window__input-file" type="file" placeholder="Выбрать файл на компьютере">-->
<!--                                    </span>-->
<!--                                    <span class="modal-window__error">Нужно выбрать файл</span>-->
<!--                                </div>-->
<!--                                {{{ Button type="submit" label="Поменять"}}}-->
<!--                            </form>-->
<!--                        {{/ModalWindow}}-->
                    {{/if}}
                    
                    {{#if (isPasswordEditingMode mode)}}
                        <img class="profile__image" src="assets/profile.svg" alt="profile">
                        <form class="profile__form-wrapper">
                            <div class="profile__form">
                            {{{ ProfileInput ref="password" validate=validate.password label="Старый пароль" type="password" value="123456789L" name="password" }}}
                            {{{ ProfileInput ref="new_password" validate=validate.password label="Новый пароль" type="password" value="" name="new-password" }}}
                            {{{ ProfileInput ref="new_password_again" validate=validate.password label="Повторите новый пароль" type="password" value="" name="new-password-again" }}}
                            </div>
                            {{{ Button type="submit" onClick=onEditPassword label="Сохранить"}}}
                        </form>
                    {{/if}}
                    
                    {{#if (isViewMode mode)}}
                        <img class="profile__image" src="assets/profile.svg" alt="profile">
                        <p class="profile__title">${title}</p>
                        <div class="profile__form">
                            {{#each formInputs}}
                                {{{ ProfileInputView name=this.name label=this.label value=this.value}}}
                            {{/each}}
                        </div>
                        {{{ ProfileButtonsBlock }}}
                    {{/if}}
                </div>
            </section>
            `);
  }
}
