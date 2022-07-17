import { useDispatch } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import style from 'styles/ExpenseTile.module.scss';
import { remove as removeExpense } from 'redux/features/expensesSlice';
import { useModal } from 'contexts/ModalContext';
import TransactionForm from './TransactionForm';
import { getCommaFormattedAmount } from 'utils';

const ExpenseTile = ({ id, title, amount, type }) => {

  const dispatch = useDispatch();
  const showModal = useModal();

  const onDeleteHandler = () => {
    dispatch(removeExpense({id, amount, type}));
  }

  return (
    <div className={`
      ${style.expenseTile}
      ${type === 'income' ? style.positive : style.negative}
    `}>
      <span className={style.deleteCta} onClick={onDeleteHandler}><RiDeleteBin5Fill /></span>
      <div className={style.content} onClick={() => showModal(<TransactionForm />)}>
        <span className={style.title}>{ title }</span>
        <span className={style.amount}>₹ {getCommaFormattedAmount(amount)}</span>
      </div>
    </div>
  )
}

export default ExpenseTile