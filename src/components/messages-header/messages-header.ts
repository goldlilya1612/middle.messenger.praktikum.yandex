import Block from '../../utils/core/Block';
import { CHATS_PAGE_PROPS } from '../../utils/constants';

interface IMessageHeaderProps {
  name: string
}
export class MessagesHeader extends Block {
  constructor(props: IMessageHeaderProps) {
    const { menuButtons } = CHATS_PAGE_PROPS;
    super({
      ...props,
      menuButtons,
    });
  }

  protected render(): string {
    const { name } = this.props;
    return (`
            <div class="messages-block__header">
                <div class="messages-block__header-info">
                    <img src="assets/profile.svg" alt="profile">
                    <p class="messages-block__header-name">${name}</p>
                </div>
                <img class="messages-block__header-menu" src="assets/menu.svg" alt="menu">
<!--                 <div class="messages-block__menu-buttons">-->
<!--                    {{#each menuButtons}}-->
<!--                        {{{ ButtonChip color=this.color text=this.text }}}-->
<!--                    {{/each}}-->
<!--                 </div>-->
            </div>
            `);
  }
}
