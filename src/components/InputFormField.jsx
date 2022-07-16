import { memo } from 'react';
import style from 'styles/InputFormField.module.scss';

const InputFormField = ({ type, label, id, placeholder, value, setValue }) => {
  
  const onChangeHandler = e => {
    setValue(e.target.value);
  }

  return (
    <div className={style.inputFormField}>
        <label htmlFor={id}>{label}</label>
        <input
          value={value}
          onChange={onChangeHandler}
          type={type}
          name={id}
          id={id}
          min={0}
          placeholder={placeholder} />
    </div>
  )
}

export default memo(InputFormField);