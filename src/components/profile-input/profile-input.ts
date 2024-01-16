import Block from '../../utils/core/Block';

interface IProfileInputProps {
  name: string,
  label: string,
  value: string,
  type: string,
}
export class ProfileInput extends Block {
  constructor(props: IProfileInputProps) {
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

  protected render(): string {
    const {
      name, label, type, value,
    } = this.props;
    return (`
            <div class="profile__input-block-wrapper">
                <div class="profile__input-block">
                    <label for='${name}'>${label}</label>
                    {{{ Input
                        name="${name}"
                        value="${value}"
                        type="${type}"
                        ref="input"
                        onBlur=onBlur
                        className="profile__input"
                    }}}
                </div>
                {{{ ErrorLine error=error ref="errorLine"}}}
            </div>
            `);
  }
}
