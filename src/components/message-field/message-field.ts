import Block from '../../utils/core/Block';
import { CHATS_PAGE_PROPS } from '../../utils/constants';
import * as validators from '../../utils/helpers/validators';
import { isFormValid } from '../../utils/helpers/helpers';
import { navigate } from '../../utils/helpers/navigate';

export class MessageField extends Block {
  constructor() {
    const { attachButtons } = CHATS_PAGE_PROPS;
    super({
      attachButtons,
      onBlur: () => this.validate(),
      onSend: (event: Event) => {
        event.stopPropagation();
        this.validate();

        const message = (this.refs?.input?.element as HTMLInputElement).value;
        console.log(message);

        const isValid = isFormValid();

        if (!isValid) return;

        navigate('login');
      },
      validate: validators.message,
    });
  }

  public value() {
    this.validate();

    return (this?.refs?.input?.element as HTMLInputElement).value;
  }

  private validate() {
    const { value } = this.refs.input.element as HTMLInputElement;

    const error = this.props.validate?.(value);

    if (error) {
      this.refs.errorLine.setProps({ error });
      return false;
    }
    this.refs.errorLine.setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    return (`
            <div class="message-field-wrapper">
                <button>
                    <img src="assets/paperclip.svg" alt="paper-clip">
                </button>
                <div class="message-field">
                    <div>
                         {{{ Input
                              name="message"
                              placeholder="Введите сообщение"
                              type="text"
                              ref="input"
                              onBlur=onBlur
                              className="message-field__input"
                         }}}
                         {{{SendButton onClick=onSend}}}
                    </div>
                    {{{ ErrorLine error=error ref="errorLine"}}}
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
