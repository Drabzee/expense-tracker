import style from 'styles/TransactionForm.module.scss';
import InputFormField from 'components/InputFormField';
import DateFormField from './DateFormField';

const TransactionForm = () => {
  return (
    <div className={style.container}>
      <h3>Add new transaction</h3>
      <InputFormField
        type='text'
        label='Title'
        id='title'
        placeholder='Enter title...' />
      <InputFormField
        type='number'
        label={"Amount\n(negative - expense, positive - income)"}
        id='amount'
        placeholder='Enter amount...' />
      <DateFormField label="Date of transaction" id='date' />
      <button>Add transaction</button>
    </div>
  )
}

export default TransactionForm