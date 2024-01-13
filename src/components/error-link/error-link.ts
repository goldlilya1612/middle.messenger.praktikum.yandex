import Block from '../../utils/classes/Block';

interface ErrorLinkProps {
  text: string;
}
export class ErrorLink extends Block {
  constructor(props: ErrorLinkProps) {
    super(props);
  }

  init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { text, page } = this.props;
    return (`
            <a class="error-block__link" ${page ? `page='${page}'` : ''}>
                ${text}
            </a>
            `);
  }
}
