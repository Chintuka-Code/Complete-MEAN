import { AbstractControl, ValidatorFn } from '@angular/forms';

export const passwordValidation = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  return control.value && regularExpression.test(control.value)
    ? null
    : { notValidPassword: true };
};
