import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => (
    <ul>
        <li className={styles.statistics__item}>Good: {good}</li>
        <li className={styles.statistics__item}>Neutral: {neutral}</li>
        <li className={styles.statistics__item}>Bad: {bad}</li>
        <li className={styles.statistics__item}>Total: {total}</li>
        <li className={styles.statistics__item}>Positive feedback: {positiveFeedback} %</li>
        
    </ul>
)


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,    
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
}

export default Statistics;