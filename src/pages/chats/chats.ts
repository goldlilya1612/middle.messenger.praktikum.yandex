/* eslint-disable max-len */
import Block from '../../utils/classes/Block';
import { CHATS_PAGE_PROPS } from '../../utils/constants';

export class ChatsPage extends Block {
  constructor() {
    const {
      chats, menuButtons, messages, attachButtons,
    } = CHATS_PAGE_PROPS;
    super({
      chats,
      menuButtons,
      messages,
      attachButtons,
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
                        <!--        set value to hide placeholder-->
                        {{{ SearchField value="" name="search-field"}}}
                    </div>
                    <ul class="chats__list">
                        {{#each chats}}
                            {{{ ChatCard name=this.name message=this.message isIncoming=this.isIncoming time=this.time count=this.count }}}
                        {{/each}}
                    </ul>
                {{/ChatsBlock}}
                <div class="messages-block">
                    {{{ MessagesHeader name="Лиля" text=this.text color=this.color}}}
                    <div class="messages-block__wrapper">
                        <p class="messages-block__time-data">19 июня</p>
                        <ul class="messages">
                            {{#each messages}}
                                {{{ Message message=this.message isFileAttached=this.isFileAttached type=this.type time=this.time }}}
                            {{/each}}
                        </ul>
                    </div>
                    {{{ MessageField attachButtons=attachButtons}}}
                    
<!--                    {{#> ModalWindow  title="Добавить пользователя"}}-->
<!--                    <form>-->
<!--                        {{{ Input label="Логин" type="text" placeholder="Логин" name="login" error="" }}}-->
<!--                        {{{ Button type="submit" label="Добавить"}}}-->
<!--                    </form>-->
<!--                    {{/ModalWindow}}-->
                </div>
<!--                {{{ EmptyBlock text="Выберите чат, чтобы отправить сообщение"}}}-->
            </section>
            `);
  }
}
