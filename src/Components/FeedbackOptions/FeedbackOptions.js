import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, clickFn }) => (
    <div>
        {options.map(option => (
            <button
                className={styles.button}
                type="button"
                key={option}
                id={option}
                onClick={clickFn}
            >{option}
            </button>
         ))}
    </div>
)

FeedbackOptions.defaultProps = {
    options: [],
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    clickFn: PropTypes.func,
}

export default FeedbackOptions;