import Block from '../../utils/core/Block';

interface ISearchFieldProps {
  name: string;
  value: string;
}
export class SearchField extends Block {
  constructor(props: ISearchFieldProps) {
    super(props);
  }

  protected render(): string {
    const { name, value } = this.props;
    return (`
            <div class="search-field-containter">
                <input
                        class="search-field"
                        name='${name}'
                        id='${name}'
                        type="search"
                        value='${value}'
                >
                {{#if (isEmpty value)}}
                    <div class="search-field__placeholder">
                    <img src="assets/search-icon.svg" alt="search-icon">
                    <p>Найти</p>
                </div>
                {{/if}}
            </div>
            `);
  }
}
