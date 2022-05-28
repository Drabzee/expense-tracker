import Summary from 'components/Summary';
import History from 'components/History';
import style from 'styles/App.module.scss';
import TransactionForm from 'components/TransactionForm';

function App() {
  return <div className={style.wrapper}>
    <h2>Expense Tracker</h2>
    <Summary />
    <History />
    <TransactionForm />
  </div>
}

export default App;
