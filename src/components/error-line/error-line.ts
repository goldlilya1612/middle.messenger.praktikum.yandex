import Block from '../../utils/core/Block';

export class ErrorLine extends Block {
  protected render(): string {
    return (`
            <span class="input__error">{{error}}</span>
          `);
  }
}
