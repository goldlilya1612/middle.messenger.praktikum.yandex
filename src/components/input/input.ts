import Block from '../../utils/core/Block';

interface IInputProps {
  name: string;
  placeholder: string;
  type: string;
  onBlur?: () => void
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
      name, placeholder, type,
    } = this.props;

    return (`
        <input
            ref="input"
            class="input__element"
            placeholder='${placeholder}'
            name='${name}'
            id='${name}'
            type='${type}'
        />
    `);
  }
}
