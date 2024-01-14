import Block from '../../utils/core/Block';

export class ProfileButtonsBlock extends Block {
  protected render(): string {
    return (`
            <ul class="profile__block-buttons">
                <li class="profile__block-button profile__block-button_purple">Изменить данные</li>
                <li class="profile__block-button profile__block-button_purple">Изменить пароль</li>
                <li class="profile__block-button profile__block-button_red">Выйти</li>
            </ul>
            `);
  }
}
