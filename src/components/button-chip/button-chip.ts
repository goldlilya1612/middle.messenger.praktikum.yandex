import Block from '../../utils/core/Block';

interface IButtonChipProps {
  color: string,
  text: string
}
export class ButtonChip extends Block {
  constructor(props: IButtonChipProps) {
    super(props);
  }

  protected render(): string {
    const { color, text } = this.props;
    return (`
            <button class="button-chip button-chip_${color}">
                ${text}
            </button>
            `);
  }
}
