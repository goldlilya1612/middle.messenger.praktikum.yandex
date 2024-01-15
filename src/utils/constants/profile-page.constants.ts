export const PROFILE_PAGE_PROPS = {
  title: 'Лиля',
  // mode options - view/editing/passwordEditing
  mode: 'passwordEditing',

  passwordInputs: [
    {
      name: 'oldPassword',
      label: 'Старый пароль',
      value: '+-+-+-',
      type: 'password',
    },
    {
      name: 'newPassword',
      label: 'Новый пароль',
      value: '+-+-+-',
      type: 'password',
    },
    {
      name: 'newPasswordAgain',
      label: 'Повторите новый пароль',
      value: '+-+-+-',
      type: 'password',
    },
  ],
};
