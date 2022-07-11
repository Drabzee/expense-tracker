import { useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import moment from 'moment';
import style from 'styles/InputFormField.module.scss';

const DateFormField = ({label, id}) => {
  
  const [ date, setDate ] = useState(moment());
  const [ isDatePickerOpen, setIsDatePickerOpen ] = useState(false);

  const onClickHandler = () => {
    setIsDatePickerOpen(true);
  }

  const getDatePickerUI = () => {
    return (
      <div className={style.inputFormField} onClick={onClickHandler}>
        <label htmlFor={id}>{label}</label>
        <input
            type="text"
            name={id}
            id={id}
            disabled={true}
            readOnly={true}
            value={date.format('Do MMM, YYYY')}
          />
      </div>
    )
  }

  return (
    <MobileDatePicker
        label="Basic example"
        value={date}
        maxDate={moment()}
        showDaysOutsideCurrentMonth={true}
        open={isDatePickerOpen}
        showToolbar={false}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        closeOnSelect={true}
        onClose={() => setIsDatePickerOpen(false)}
        renderInput={ () => getDatePickerUI() }
        views={['year', 'month', 'day']}
      />
  )
}

export default DateFormField