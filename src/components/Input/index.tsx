import React, { ChangeEvent } from 'react';

import { IInput } from '../../interfaces';

import { InputContainer } from './styles';

/**
 * @export
 * @component
 * @name Input
 *
 * @description
 * Input
 */
function Input({ id, value, setValue, label }: IInput) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <InputContainer
      onClick={() => {
        document.getElementById(id)?.focus();
      }}
    >
      <input id={id} type="text" value={value} onChange={handleOnChange} />

      <label htmlFor={id}>{label}</label>
    </InputContainer>
  );
}

export default Input;
