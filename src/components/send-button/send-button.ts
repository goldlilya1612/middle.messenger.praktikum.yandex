import Block from '../../utils/core/Block';

export class SendButton extends Block {
  init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    return (`
            <button class="message-field__input-button">
                <img src="assets/paper-plane.svg" alt="paper-plane">
            </button>
            `);
  }
}
