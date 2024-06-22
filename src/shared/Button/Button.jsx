import PropTypes from 'prop-types';
import './Button.module.css';
import styles from './Button.module.css';

const Button = ({ text }) => {
    return (
      <div className={styles.button__wrapper}>
          <button>{text}</button>
      </div>
    );
  };

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;