import style from 'styles/ExpenseTile.module.scss';

const ExpenseTile = ({title, amount}) => {

  const formattedAmount = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);

  return (
    <div className={`
      ${style.expenseTile}
      ${amount > 0 ? style.positive : style.negative}
    `}>
      <span>{ title }</span>
      <span>{`${amount > 0 ? '+' : ''}${formattedAmount}`}</span>
    </div>
  )
}

export default ExpenseTile