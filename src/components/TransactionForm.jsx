import moment from 'moment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from 'styles/TransactionForm.module.scss';
import InputFormField from 'components/InputFormField';
import DateFormField from 'components/DateFormField';
import { add as addExpense } from 'redux/features/expensesSlice';
import SwitchFormField from 'components/SwitchFormField';

const TransactionForm = () => {

  const formInitialValues = {
    title: '',
    amount: '',
    type: 'expense'
  }

  const [ title, setTitle ] = useState(formInitialValues.title);
  const [ amount, setAmount ] = useState(formInitialValues.amount);
  const [ date, setDate ] = useState(moment());
  const [ type, setType ] = useState(formInitialValues.type);
  const dispatch = useDispatch();

  const onFormSubmitHandler = () => {
    dispatch(addExpense({
      id: Date.now(),
      title,
      type,
      amount: +amount,
      date: date.toString()
    }));
    setTitle(formInitialValues.title);
    setAmount(formInitialValues.amount);
    setDate(moment());
    setType(formInitialValues.type);
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
        label='Amount'
        id='amount'
        value={amount}
        setValue={setAmount}
        placeholder='Enter amount...' />
      <SwitchFormField
        value={type}
        setValue={setType} />
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