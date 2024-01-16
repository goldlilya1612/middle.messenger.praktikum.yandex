export const isEmpty = (value: string): boolean => value === '';
export const isFileAttached = (value: string): boolean => value === 'attached';
export const isOutgoing = (value: string): boolean => value === 'outgoing';
export const isViewMode = (value: string): boolean => value === 'view';
export const isEditingMode = (value: string): boolean => value === 'editing';
export const isPasswordEditingMode = (value: string): boolean => value === 'passwordEditing';

export const isFormValid = () => {
  const errorsArray: Array<any> = Array.from(document.querySelectorAll('.input__error'));
  return !errorsArray?.some((item) => item.textContent !== '');
};
