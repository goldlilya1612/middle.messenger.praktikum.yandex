import Block from '../../utils/classes/Block';

interface IInputProps {
  name: string;
  placeholder: string;
  type: string;
  error: string;
  label: string;
}
export class Input extends Block {
  constructor(props: IInputProps) {
    super(props);
  }

  init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const {
      name, placeholder, type, error, label,
    } = this.props;

    return (`<div class="input__container">
                <label class="input__label" for='${name}'>${label}</label>
                <input
                    class="input__element"
                    placeholder='${placeholder}'
                    name='${name}'
                    id='${name}'
                    type='${type}'
                />
                <span class="input__error">${error}</span>
            </div>`);
  }
}
