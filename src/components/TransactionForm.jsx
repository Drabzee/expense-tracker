import moment from 'moment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from 'styles/TransactionForm.module.scss';
import InputFormField from 'components/InputFormField';
import DateFormField from 'components/DateFormField';
import { add as addExpense } from 'redux/features/expensesSlice';

const TransactionForm = () => {

  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ date, setDate ] = useState(moment());
  const dispatch = useDispatch();

  const onFormSubmitHandler = () => {
    dispatch(addExpense({
      id: Date.now(),
      title,
      amount: +amount,
      date: date.toString()
    }));
    setTitle('');
    setAmount(0);
    setDate(moment());
  }

  return (
    <div className={style.container}>
      <h3>Add new transaction</h3>
      <InputFormField
        type='text'
        label='Title'
        id='title'
        value={title}
        setValue={setTitle}
        placeholder='Enter title...' />
      <InputFormField
        type='number'
        label={"Amount\n(negative - expense, positive - income)"}
        id='amount'
        value={amount}
        setValue={setAmount}
        placeholder='Enter amount...' />
      <DateFormField
        label="Date of transaction"
        id='date'
        date={date}
        setDate={setDate} />
      <button onClick={onFormSubmitHandler}>Add transaction</button>
    </div>
  )
}

export default TransactionForm