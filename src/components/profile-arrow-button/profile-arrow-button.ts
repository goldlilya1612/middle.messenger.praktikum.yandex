import Block from '../../utils/core/Block';

interface IProfileArrowButtonProps {
  onClick?: () => void
}
export class ProfileArrowButton extends Block {
  constructor(props: IProfileArrowButtonProps) {
    super(props);
  }

  init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    return (`
            <button class="chats__link">
                <p class="chats__link-text">Профиль</p>
                <img class="chats__link-icon" src="assets/arrow-icon.svg" alt="arrow">
            </button>
            `);
  }
}
