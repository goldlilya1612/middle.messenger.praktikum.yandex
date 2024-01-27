import Block from '../../utils/core/Block';

interface IEmptyBlockProps {
  text: 'string',
}
export class EmptyBlock extends Block {
  constructor(props: IEmptyBlockProps) {
    super(props);
  }

  protected render(): string {
    const { text } = this.props;
    return (`
            <section class="empty-block">
                <img class="empty-block__image" src="assets/empty-state.svg" alt="empty-state">
                <p class="empty-block__text">${text}</p>
            </section>
            `);
  }
}
