import style from 'styles/InputFormField.module.scss';

const InputFormField = ({ type, label, placeholder }) => {
  return (
    <div className={style.inputFormField}>
        <label htmlFor="title">{label}</label>
        <input type={type} name="title" id="title" placeholder={placeholder} />
    </div>
  )
}

export default InputFormField