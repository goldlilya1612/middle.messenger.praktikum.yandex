import Block from '../../utils/classes/Block';
import { CHATS_PAGE_PROPS } from '../../utils/constants';

export class ChatsPage extends Block {
  constructor() {
    super({
      chats: CHATS_PAGE_PROPS,
    });
  }

  protected render(): string {
    return (`
            <section class="chats">
                {{#> ChatsBlock}}
                    <div class="chats__header">
                        <a class="chats__link" href="#">
                            <p class="chats__link-text" page="profile">Профиль</p>
                            <img class="chats__link-icon" src="assets/arrow-icon.svg" alt="arrow">
                        </a>
                    </div>
                {{/ChatsBlock}}
            </section>
            `);
  }
}
