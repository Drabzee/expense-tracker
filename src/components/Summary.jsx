import style from 'styles/Summary.module.scss';

const SummaryContainer = () => {

  const getSummaryBlockContent = (title, amount) => {
    return (
      <div className={style.content}>
        <h4>{ title }</h4>
        <p>₹ { amount.toFixed(2) }</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h4>YOUR BALANCE</h4>
      <h1>₹ 0.00</h1>
      <div className={style.block}>
        { getSummaryBlockContent('INCOME', 0) }
        { getSummaryBlockContent('EXPENSE', 0) }
      </div>
    </div>
  )
}

export default SummaryContainer