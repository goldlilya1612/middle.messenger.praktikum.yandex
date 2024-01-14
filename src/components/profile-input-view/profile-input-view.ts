import Block from '../../utils/core/Block';

interface IProfileInputViewProps {
  name: string,
  label: string,
  value: string
}
export class ProfileInputView extends Block {
  constructor(props: IProfileInputViewProps) {
    super(props);
  }

  protected render(): string {
    const { name, label, value } = this.props;
    return (`
            <div class="profile__input-block">
                <label for='${name}'>${label}</label>
                <p class="profile__input">${value}</p>
            </div>
            `);
  }
}
