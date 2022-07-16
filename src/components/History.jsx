import style from 'styles/History.module.scss';
import ExpenseTile from 'components/ExpenseTile';
import { useSelector } from 'react-redux';

const History = () => {

  const expenses = useSelector(state => state.expenses);

  return (
    <div className={style.container}>
        <h3>Today's History</h3>
        { expenses.length ? expenses.map(expense => (    
            <ExpenseTile
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              type={expense.type} />
        )) : <span className={style.emptyCaption}>No expense spared today!</span> }
    </div>
  )
}

export default History