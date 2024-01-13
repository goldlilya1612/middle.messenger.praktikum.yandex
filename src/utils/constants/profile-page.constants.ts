export const PROFILE_PAGE_PROPS = {
  title: 'Лиля',
  // mode options - view/editing/passwordEditing
  mode: 'view',
  formInputs: [
    {
      name: 'email',
      label: 'Почта',
      value: 'pochta@yandex.ru',
      type: 'email',
    },
    {
      name: 'login',
      label: 'Логин',
      value: 'lalvolodina',
      type: 'text',
    },
    {
      name: 'first_name',
      label: 'Имя',
      value: 'Лиля',
      type: 'text',
    },
    {
      name: 'second_name',
      label: 'Фамилия',
      value: 'Володина',
      type: 'text',
    },
    {
      name: 'display_name',
      label: 'Имя в чате',
      value: 'Лиля))))00)',
      type: 'text',
    },
    {
      name: 'phone',
      label: 'Телефон',
      value: '+7(999)999-99-99',
      type: 'tel',
    },
  ],
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
