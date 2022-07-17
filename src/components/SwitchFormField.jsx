import style from 'styles/SwitchFormField.module.scss';

const SwitchFormField = ({ label, switchcases, ...props }) => {

  const { field, form } = props;
  const { name, value } = field;
  const { setFieldValue } = form;
  
  const onClickHandler = e => {
    setFieldValue(name, e.target.id);
  }

  return (
    <div className={style.switchFormField}>
      <span>{ label }</span>
      <div className={style.switch} onClick={onClickHandler}>
        { switchcases.map(switchCase => (
          <div
            key={switchCase}
            id={switchCase}
            className={`${style.switchCase} ${value === switchCase ? style.active : ''}`}>
              {switchCase}
          </div>
        )) }
      </div>
    </div>
  )
}

export default SwitchFormField;