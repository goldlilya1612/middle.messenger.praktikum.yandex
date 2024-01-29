export type TApiError = {
  reason: string;
};

export type TSignUpResponse = {
  id: number
}

export type TUserDTO = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: string;
  phone: string;
  email: string;
};
