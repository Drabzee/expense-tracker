import { memo } from 'react';
import style from 'styles/InputFormField.module.scss';

const InputFormField = ({ field, label, type, placeholder }) => {

  return (
    <div className={style.inputFormField}>
      <label htmlFor={field.name}>{label}</label>
      <input
        type={type}
        id={field.name}
        min={0}
        placeholder={placeholder}
        { ...field } />
    </div>
  )
}

export default InputFormField;