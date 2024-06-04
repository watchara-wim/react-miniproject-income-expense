import PropTypes from 'prop-types'
import './Item.css'

const Item = ({title,amount}) => {
    const status =  (amount<0)? `expense`:`income`;
    const symbol =  (amount<0)? ``:`+`;

    const FormatNumber = (number) => {
        const format = {
          style: 'decimal',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        };
        return number.toLocaleString('en-US', format);
      }

    return <li className={status}>{title} <span>{symbol}{FormatNumber(amount)}</span></li>
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item