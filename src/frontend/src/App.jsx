import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Summary from 'components/Summary';
import History from 'components/History';
import style from 'styles/App.module.scss';
import ModalContext from 'contexts/ModalContext';
import FloatingActionButton from 'components/FloatingActionButton';
import { initializeState } from 'redux/actions';
import { fetchInitialState } from 'apis';
import 'nprogress/nprogress.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data: { data } } = await fetchInitialState();
      dispatch(initializeState(data));
    })();
  }, [dispatch]);

  return (
    <ModalContext>
      <div className={style.wrapper}>
        <h2>Expense Tracker</h2>
        <Summary />
        <History />
        <FloatingActionButton />
      </div>
    </ModalContext>
  );
}

export default App;
