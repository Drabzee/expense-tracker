import { useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import moment from 'moment';
import style from 'styles/InputFormField.module.scss';

const DateFormField = ({ label, placeholder, ...props }) => {

  const [ isDatePickerOpen, setIsDatePickerOpen ] = useState(false);

  const { field, form } = props;
  const { name, value: date } = field;
  const { setFieldValue } = form;

  const getDatePickerUI = () => {
    return (
      <div className={style.inputFormField} onClick={() => setIsDatePickerOpen(true)}>
        <label htmlFor={name}>{label}</label>
        <input
            type="text"
            name={name}
            id={name}
            disabled={true}
            readOnly={true}
            value={date ? date.format('Do MMM, YYYY') : ''}
            placeholder={placeholder}
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
        onChange={(newValue) => setFieldValue(name, newValue)}
        closeOnSelect={true}
        onClose={() => setIsDatePickerOpen(false)}
        renderInput={getDatePickerUI}
        views={['year', 'month', 'day']}
      />
  )
}

export default DateFormField