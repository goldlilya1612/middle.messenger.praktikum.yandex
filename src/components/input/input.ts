import Block from '../../utils/core/Block';

interface IInputProps {
  name: string;
  placeholder?: string;
  type: string;
  onBlur?: () => void;
  className: string;
  value?: string
}

export class Input extends Block {
  constructor(props: IInputProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    const {
      name, placeholder, type, className, value,
    } = this.props;

    return (`
        <input
            ref="input"
            class='${className}'
            ${placeholder ? `placeholder="${placeholder}"` : ''}
            name='${name}'
            id='${name}'
            type='${type}'
            ${value ? `value="${value}"` : ''}
        />
    `);
  }
}
