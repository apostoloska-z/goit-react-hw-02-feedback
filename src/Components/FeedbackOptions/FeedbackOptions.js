import PropTypes from 'prop-types';
import "./FeedbackOptions.scss"

const FeedbackOptions = ({ options, clickFn }) => (
    <div className="options">
        {options.map(option => (
            <button
                className="options__button"
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