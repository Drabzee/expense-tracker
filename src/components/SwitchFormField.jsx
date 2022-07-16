import style from 'styles/SwitchFormField.module.scss';

const SwitchFormField = ({ value, setValue }) => {

  const switchCases = ['expense', 'income'];
  
  const onClickHandler = e => {
    setValue(e.target.id);
  }


  return (
    <div className={style.switchFormField}>
      <span>Type</span>
      <div className={style.switch} onClick={onClickHandler}>
        { switchCases.map(switchCase => (
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

export default SwitchFormField