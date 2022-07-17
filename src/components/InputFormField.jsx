import style from 'styles/InputFormField.module.scss';

const InputFormField = ({ field, label, type, placeholder, form }) => {

  const {
    errors: {[field.name]: errorMsg},
    touched: {[field.name]: isTouched}
  } = form;

  const toDisplayError = isTouched && errorMsg;

  return (
    <div className={style.inputFormField}>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={toDisplayError ? style.error : ''}
        type={type}
        id={field.name}
        min={0}
        placeholder={placeholder}
        { ...field } />
        { toDisplayError && <span>*{errorMsg}</span> }
    </div>
  )
}

export default InputFormField;