import { useSelector } from 'react-redux';
import style from 'styles/Summary.module.scss';
import { getCommaFormattedAmount } from 'utils';

const SummaryContainer = () => {

  const { totalIncome, totalExpense } = useSelector(state => state.summary);
  const total = totalIncome - totalExpense;

  const getSummaryBlockContent = (title, amount) => {
    return (
      <div className={style.content}>
        <h4>{ title }</h4>
        <p>₹ { getCommaFormattedAmount(amount) }</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h4>YOUR BALANCE</h4>
      <h1>₹ {getCommaFormattedAmount(total)}</h1>
      <div className={style.block}>
        { getSummaryBlockContent('INCOME', totalIncome) }
        { getSummaryBlockContent('EXPENSE', totalExpense) }
      </div>
    </div>
  )
}

export default SummaryContainer