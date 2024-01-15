import Block from '../../utils/core/Block';

interface IButtonProps {
  type: 'submit',
  label: string,
  onClick?: () => void
}
export class Button extends Block {
  constructor(props: IButtonProps) {
    super(props);
  }

  init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { type, label } = this.props;
    return (`
            <button class='button' type='${type}'>
              ${label}
            </button>
            `);
  }
}
