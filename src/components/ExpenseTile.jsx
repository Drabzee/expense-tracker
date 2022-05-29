import style from 'styles/ExpenseTile.module.scss';
import { RiDeleteBin5Fill } from 'react-icons/ri';

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
      <span><RiDeleteBin5Fill /></span>
      <div className={style.content}>
        <span>{ title }</span>
        <span>{`${amount > 0 ? '+' : ''}${formattedAmount}`}</span>
      </div>
    </div>
  )
}

export default ExpenseTile