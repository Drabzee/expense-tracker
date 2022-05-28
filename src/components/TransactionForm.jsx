import style from 'styles/TransactionForm.module.scss';
import InputFormField from 'components/InputFormField';

const TransactionForm = () => {
  return (
    <div className={style.container}>
      <h3>Add new transaction</h3>
      <InputFormField
        type='text'
        label='Title'
        placeholder='Enter title...' />
      <InputFormField
        type='number'
        label={"Amount\n(negative - expense, positive - income)"}
        placeholder='Enter amount...' />
      <button>Add transaction</button>
    </div>
  )
}

export default TransactionForm