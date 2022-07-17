import { useDispatch } from 'react-redux';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import style from 'styles/TransactionForm.module.scss';
import InputFormField from 'components/InputFormField';
import DateFormField from 'components/DateFormField';
import { add as addExpense } from 'redux/features/expensesSlice';
import SwitchFormField from 'components/SwitchFormField';

const TransactionForm = () => {

  const dispatch = useDispatch();
  const formInitialValues = {
    title: '',
    amount: '',
    type: 'expense',
    date: ''
  }
  const validationSchema = Yup.object({
    title: Yup.string().min(5, 'Title should have minimum 5 characters').required('Title is required'),
    amount: Yup.number().min(1, 'Amount should be greater than 0').required('Amount is required'),
    date: Yup.string().required('Date is required'),
    type: Yup.string().oneOf(['expense', 'income']).required()
  });

  const onFormSubmitHandler = ({ title, type, amount, date }, { resetForm }) => {
    dispatch(addExpense({
      id: Date.now(),
      title,
      type,
      amount: +amount,
      date: date.toString()
    }));

    resetForm();
  }

  return (
    <div className={style.container}>
      <h3>Add new transaction</h3>
      <Formik initialValues={formInitialValues} onSubmit={onFormSubmitHandler} validationSchema={validationSchema}>
        <Form>
          <FastField
            type='text'
            name='title'
            label='Title'
            component={InputFormField}
            placeholder='Enter title' />
          <FastField
            type='number'
            name='amount'
            label='Amount'
            component={InputFormField}
            placeholder='Enter amount' />
          <FastField
            name='type'
            label='Type'
            switchcases={['expense', 'income']}
            component={SwitchFormField} />
          <FastField
            name='date'
            label='Date of transaction'
            component={DateFormField}
            placeholder='Select date of transaction' />
          <button type='submit'>Add transaction</button>
        </Form>
      </Formik>
    </div>
  )
}

export default TransactionForm