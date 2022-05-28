import style from 'styles/History.module.scss';
import ExpenseTile from 'components/ExpenseTile';

const History = () => {

  const expenses = [
      {id: 1, title: 'Salary', amount: 80000},
      {id: 2, title: 'Groceries', amount: -2000}
  ];

  return (
    <div className={style.container}>
        <h3>History</h3>
        { expenses.map(expense => (    
            <ExpenseTile
              key={expense.id}
              title={expense.title}
              amount={expense.amount} />
        )) }
    </div>
  )
}

export default History