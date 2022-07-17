import { TiPlus } from 'react-icons/ti';
import style from 'styles/FloatingActionButton.module.scss';
import { useModal } from 'contexts/ModalContext';
import TransactionForm from 'components/TransactionForm';

const FloatingActionButton = () => {

  const showModal = useModal();

  const onClickHandler = () => {
    showModal(
      <TransactionForm 
        heading='Add new transaction'
        formInitialValues={{
          title: '',
          amount: '',
          type: 'expense',
          date: ''
        }} />
    );
  }

  return (
    <div className={style.floatingActionButton} onClick={onClickHandler}>
      <TiPlus />
    </div>
  )
}

export default FloatingActionButton