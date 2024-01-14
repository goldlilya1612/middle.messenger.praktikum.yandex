/* eslint-disable max-len */
import Block from '../../utils/classes/Block';
import { PROFILE_PAGE_PROPS } from '../../utils/constants';

export class ProfilePage extends Block {
  constructor() {
    const {
      mode, formInputs, passwordInputs, title,
    } = PROFILE_PAGE_PROPS;
    super({
      mode,
      formInputs,
      passwordInputs,
      title,
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
                                {{#each formInputs}}
                                    {{{ ProfileInput name=this.name label=this.label value=this.value type=this.type }}}
                                {{/each}}
                            </div>
                            {{{ Button type="submit" label="Сохранить"}}}
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
                                {{#each passwordInputs}}
                                    {{{ ProfileInput name=this.name label=this.label value=this.value type=this.type}}}
                                {{/each}}
                            </div>
                            {{{ Button type="submit" label="Сохранить"}}}
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
