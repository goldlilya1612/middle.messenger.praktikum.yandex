import Block from '../../utils/core/Block';

interface IErrorLineProps {
  error: string
}
export class ErrorLine extends Block {
  constructor(props: IErrorLineProps) {
    super(props);
  }

  protected render(): string {
    return (`
            <span class="input__error">{{error}}</span>
          `);
  }
}
