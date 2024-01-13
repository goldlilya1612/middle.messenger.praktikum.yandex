import Block from '../../utils/classes/Block';

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
    const { type, label, page } = this.props;
    return (`
            <button class='button' type='${type}' ${page ? `page='${page}'` : ''}>
              ${label}
            </button>
            `);
  }
}
