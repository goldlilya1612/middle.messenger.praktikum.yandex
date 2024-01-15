import Block from '../../utils/core/Block';

interface IInputFieldProps {
  error: string;
  label: string;
  name: string
  placeholder: string
  type: string
}
export class InputField extends Block {
  constructor(props: IInputFieldProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  public value() {
    this.validate();

    return (this?.refs?.input?.element as HTMLInputElement).value;
  }

  private validate() {
    const { value } = this.refs.input.element as HTMLInputElement;
    const error = this.props.validate?.(value);

    if (error) {
      this.refs.errorLine.setProps({ error });
      return false;
    }
    this.refs.errorLine.setProps({ error: undefined });
    return true;
  }

  init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const {
      name, placeholder, type, label,
    } = this.props;

    return (`<div class="input__container">
                <label class="input__label" for='${name}'>${label}</label>
                {{{ Input
                    name="${name}"
                    placeholder="${placeholder}"
                    type="${type}"
                    ref="input"
                    onBlur=onBlur
                }}}
                {{{ ErrorLine error=error ref="errorLine"}}}
            </div>`);
  }
}
