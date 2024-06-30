import styles from './Label.module.css';
import PropTypes from 'prop-types';

const Label = ({ text }) => {
    return (
        <div className={styles.label__wrapper}>
            <label>{text}</label>
        </div>
    );
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Label;