import Block from '../../utils/classes/Block';

export class NotFoundPage extends Block {
  protected render(): string {
    return (`
            {{#>ErrorBlock text="Ошибка 404" url="assets/not-found.svg"}}
                {{{ ErrorLink page="chats" text="Вернуться к чатам"}}}
            {{/ErrorBlock}}
            `);
  }
}
