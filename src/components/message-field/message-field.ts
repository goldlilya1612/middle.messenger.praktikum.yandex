/* eslint-disable max-len */
import Block from '../../utils/classes/Block';
import { CHATS_PAGE_PROPS } from '../../utils/constants';

export class MessageField extends Block {
  constructor() {
    const { attachButtons } = CHATS_PAGE_PROPS;
    super({
      attachButtons,
    });
  }

  protected render(): string {
    return (`
            <div class="message-field-wrapper">
                <button>
                    <img src="assets/paperclip.svg" alt="paper-clip">
                </button>
                <div class="message-field">
                    <input name="message" id="message" class="message-field__input" placeholder="Введите сообщение">
                    <button class="message-field__input-button">
                        <img src="assets/paper-plane.svg" alt="paper-plane">
                    </button>
                </div>
                
<!--                <div class="messages-block__attach-buttons">-->
<!--                    {{#each attachButtons}}-->
<!--                        {{{ ButtonChip color=this.color text=this.text }}}-->
<!--                    {{/each}}-->
<!--                </div>-->
            </div>
            `);
  }
}
