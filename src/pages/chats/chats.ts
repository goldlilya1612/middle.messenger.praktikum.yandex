import Block from '../../utils/core/Block';
import router from '../../utils/core/Router';
import { CHATS_PAGE_PROPS } from '../../utils/constants';
import { ERoutes } from '../../utils/enums/routes.enum';
import { logout } from '../../services/auth';
import { connect } from '../../utils/helpers/connect';

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
      onArrowButtonClick: () => {
        router.go(ERoutes.PROFILE);
      },
      onLinkClick: async () => {
        try {
          await logout();
        } catch (error: any) {
          throw new Error(error);
        }
      },
    });
  }

  protected render(): string {
    return (`
            <section class="chats">
                {{#> ChatsBlock}}
                    <div class="chats__header">
                        <div class="chats__header-wrapper">                  
                            {{{ RedirectLink page="register" label="Выйти" onClick=onLinkClick}}}
                            {{{ProfileArrowButton onClick=onArrowButtonClick}}}
                        </div>
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
<!--                        {{{ InputField label="Логин" type="text" placeholder="Логин" name="login" error="" }}}-->
<!--                        {{{ Button type="submit" label="Добавить"}}}-->
<!--                    </form>-->
<!--                    {{/ModalWindow}}-->
                </div>
<!--                {{{ EmptyBlock text="Выберите чат, чтобы отправить сообщение"}}}-->
            </section>
            `);
  }
}

export default connect(ChatsPage);
