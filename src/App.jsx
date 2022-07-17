import Summary from 'components/Summary';
import History from 'components/History';
import style from 'styles/App.module.scss';
import TransactionForm from 'components/TransactionForm';
import ModalContext from 'contexts/ModalContext';

function App() {
  return (
    <ModalContext>
      <div className={style.wrapper}>
        <h2>Expense Tracker</h2>
        <Summary />
        <History />
        <TransactionForm />
      </div>
    </ModalContext>
  );
}

export default App;
