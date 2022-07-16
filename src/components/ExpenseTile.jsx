import { useDispatch } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import style from 'styles/ExpenseTile.module.scss';
import { remove as removeExpense } from 'redux/features/expensesSlice';

const ExpenseTile = ({id, title, amount}) => {

  const dispatch = useDispatch();

  const formattedAmount = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);

  const onDeleteHandler = () => {
    dispatch(removeExpense(id));
  }

  return (
    <div className={`
      ${style.expenseTile}
      ${amount > 0 ? style.positive : style.negative}
    `}>
      <span className={style.deleteCta} onClick={onDeleteHandler}><RiDeleteBin5Fill /></span>
      <div className={style.content}>
        <span className={style.title}>{ title }</span>
        <span className={style.amount}>{`${amount > 0 ? '+' : ''}${formattedAmount}`}</span>
      </div>
    </div>
  )
}

export default ExpenseTile