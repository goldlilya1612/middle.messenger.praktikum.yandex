export type AppState = {
  error: string | null,
  user: User | null,
  isOpenDialogChat: boolean,
  chats: Chat[]
}

export type User = {
  id: number;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  avatar: string;
  phone: string;
  email: string;
};

export type Chat = {
  id: number,
  title: string,
  avatar: Nullable<string>,
  unreadCount: number,
  // lastMessage: LastMessage | null
  lastMessage: null
}
