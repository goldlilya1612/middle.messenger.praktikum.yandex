import {
  CORRECT_EMAIL, CORRECT_NAME, CORRECT_PASSWORD, CORRECT_PHONE, LOGIN_CORRECT_SYMBOLS, ONLY_NUMBERS,
} from '../constants/regex';

export const login = (value: string) => {
  if (value.length === 0) {
    return 'Поле не может быть пустым';
  }
  if (value.length < 3 || value.length > 20) {
    return 'Недопустимая длина. Необходимо от 3 до 20 символов';
  }
  if (!LOGIN_CORRECT_SYMBOLS.test(value)) {
    return 'Недопустимые символы';
  }
  if (ONLY_NUMBERS.test(value)) {
    return 'Недопустимо использовать только числа';
  }
  return '';
};

export const password = (value: string) => {
  if (value.length === 0) {
    return 'Поле не может быть пустым';
  }
  if (value.length < 8 || value.length > 40) {
    return 'Недопустимая длина. Необходимо от 8 до 40 символов';
  }
  if (!CORRECT_PASSWORD.test(value)) {
    return 'Используйте латиницу, обязательно хотя бы одна заглавная буква и цифра';
  }
  return '';
};

export const email = (value: string) => {
  if (value.length === 0) {
    return 'Поле не может быть пустым';
  }
  if (!CORRECT_EMAIL.test(value)) {
    return 'Некорректная почта. Используйте латиницу, обязательно "@" и название домена';
  }
  return '';
};
export const name = (value: string) => {
  if (value.length === 0) {
    return 'Поле не может быть пустым';
  }
  if (!CORRECT_NAME.test(value)) {
    return 'Используйте латиницу/кириллицу, первая буква - заглавная. Допустим дефис';
  }
  return '';
};
export const phone = (value: string) => {
  if (value.length === 0) {
    return 'Поле не может быть пустым';
  }
  if (value.length < 10 || value.length > 15) {
    return 'Недопустимая длина. Необходимо от 10 до 15 символов';
  }

  if (!CORRECT_PHONE.test(value)) {
    return 'Некорректный номер. Используйте числа и "+" (опционально)';
  }
  return '';
};
export const passwordAgain = (value: string) => {
  const passwordValue: string = (document.getElementById('password') as HTMLInputElement).value;

  if (value.length === 0) {
    return 'Поле не может быть пустым';
  }
  if (value !== passwordValue) {
    return 'Пароли не совпадают';
  }
  if (value.length < 8 || value.length > 40) {
    return 'Недопустимая длина. Необходимо от 8 до 40 символов';
  }
  if (!CORRECT_PASSWORD.test(value)) {
    return 'Используйте латиницу, обязательно хотя бы одна заглавная буква и цифра';
  }
  return '';
};
