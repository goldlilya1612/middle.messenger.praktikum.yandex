import Block from '../../utils/classes/Block';

interface IMessageProps {
  message: string,
  isFileAttached: boolean,
  type: string,
  time: string,
}
export class Message extends Block {
  constructor(props: IMessageProps) {
    super(props);
  }

  protected render(): string {
    const {
      message, isFileAttached, time,
    } = this.props;

    return (`
            <div class="message message_{{this.type}} message_{{this.isFileAttached}}" >
                <p>${message}</p>
                {{#if (isFileAttached isFileAttached)}}
                    <img class="message__image" src="assets/attached-file.jpg" alt="attached-file">
                {{/if}}
                <div class="message__info">
                    {{#if (isOutgoing type)}}
                        <img src="assets/message-read.svg" alt="message-read"/>
                    {{/if}}
                    <p class="message__time_${isFileAttached} message__time">${time}</p>
                </div>
            </div>
            `);
  }
}
