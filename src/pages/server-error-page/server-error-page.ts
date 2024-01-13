import Block from '../../utils/classes/Block';

export class ServerErrorPage extends Block {
  protected render(): string {
    return (`
            {{#>ErrorBlock text="Ошибка 505" url="assets/server-error.svg"}}
                 {{{ ErrorLink page="chats" text="Вернуться к чатам" }}}
            {{/ErrorBlock}}
            `);
  }
}
