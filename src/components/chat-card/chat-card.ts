/* eslint-disable max-len */
import Block from '../../utils/classes/Block';

interface IChatCardProps {
  name: string,
  message: string,
  isIncoming: boolean,
  time: string,
  count: number
}
export class ChatCard extends Block {
  constructor(props: IChatCardProps) {
    super(props);
  }

  protected render(): string {
    const {
      name, message, isIncoming, time, count,
    } = this.props;

    return (`
            <li class="chat-card">
                <div class="chat-card__left-side">
                    <img src="assets/profile.svg" alt="profile">
                    <div class="chat-card__message-info">
                        <p class="chat-card__user-name">${name}</p>
            
                        {{#if ${isIncoming}}}
                            <p class="chat-card__text">${message}</p>
                        {{else}}
                            <p class="chat-card__text"><span class="chat-card__text_black">Вы: </span>${message}</p>
                        {{/if}}
                    </div>
                </div>
                <div class="chat-card__right-side">
                    <p class="chat-card__text chat-card__text_small">
                        ${time}
                    </p>
                    {{#if ${count}}}
                        <p class="chat-card__chip">
                            ${count}
                        </p>
                    {{/if}}
                </div>
            </li>
            `);
  }
}
