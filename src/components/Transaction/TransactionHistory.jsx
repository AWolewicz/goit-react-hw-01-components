import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
    <table className={css.transactionHistory}>
        <thead>
            <tr className={css.header}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={css.columns}>
                    <td className={css.type}>{type}</td>
                    <td className={css.amount}>{amount}</td>
                    <td className={css.currency}>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};