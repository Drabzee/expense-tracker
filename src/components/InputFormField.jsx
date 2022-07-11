import style from 'styles/InputFormField.module.scss';

const InputFormField = ({ type, label, id, placeholder }) => {
  return (
    <div className={style.inputFormField}>
        <label htmlFor={id}>{label}</label>
        <input type={type} name={id} id={id} placeholder={placeholder} />
    </div>
  )
}

export default InputFormField