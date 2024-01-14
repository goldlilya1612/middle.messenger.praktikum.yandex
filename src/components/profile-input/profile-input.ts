/* eslint-disable max-len */
import Block from '../../utils/core/Block';

interface IProfileInputProps {
  name: string,
  label: string,
  value: string,
  type: string,
}
export class ProfileInput extends Block {
  constructor(props: IProfileInputProps) {
    super(props);
  }

  protected render(): string {
    const {
      name, label, type, value,
    } = this.props;
    return (`
            <div class="profile__input-block">
                <label for='${name}'>${label}</label>
                <input id='${name}' class="profile__input" type='${type}' name='${name}' value='${value}'>
            </div>
            `);
  }
}
