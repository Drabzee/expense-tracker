import { useDispatch } from 'react-redux';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import style from 'styles/TransactionForm.module.scss';
import InputFormField from 'components/InputFormField';
import DateFormField from 'components/DateFormField';
import { add as addExpense } from 'redux/features/expensesSlice';
import SwitchFormField from 'components/SwitchFormField';
import { useModal } from 'contexts/ModalContext';

const TransactionForm = ({ heading, formInitialValues }) => {

  const dispatch = useDispatch();
  const showModal = useModal();

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
      date: date.format('YYYY-MM-DD')
    }));

    resetForm();
    showModal(false);
  }

  return (
    <div className={style.container}>
      <h3>{ heading }</h3>
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
          <div className={style.buttonContainer}>
            <button type='button' className={style.secondary} onClick={() => showModal(false)}>Cancel</button>
            <button type='submit' className={style.primary}>Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default TransactionForm