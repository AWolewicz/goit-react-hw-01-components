import PropTypes from 'prop-types'
import css from './Statistics.module.css'

    // if(prop.title ? {prop.title} : "")
    
export const Statistics = ({ title, data }) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
            {data.map(stat => (
                <li className={css.item} key={stat.id}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    );
};


Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
};