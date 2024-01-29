import Block from '../../utils/core/Block';

interface IHrefProps {
  href: string,
  label: string,
  onLinkClick?: () => void
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
    const { page, label } = this.props;
    return (`<button class="redirect-link" ${page ? `page='${page}'` : ''}>
                ${label}
            </button>`);
  }
}
