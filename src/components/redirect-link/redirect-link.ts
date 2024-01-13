import Block from '../../utils/classes/Block';

interface IHrefProps {
  href: string,
  label: string,
}
export class RedirectLink extends Block {
  constructor(props: IHrefProps) {
    super(props);
  }

  init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { href, page, label } = this.props;
    return (`<a class="redirect-link" href='${href}' ${page ? `page='${page}'` : ''}>
                ${label}
            </a>`);
  }
}
