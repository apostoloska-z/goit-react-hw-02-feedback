import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({title, children}) => (
    <section className="section">
        <h2 className="section__name">{title}</h2>
        {children}

    </section>
)

Section.defaultProps = {
    title: '',
}

Section.propTypes = {
    title: PropTypes.string,
}

export default Section;