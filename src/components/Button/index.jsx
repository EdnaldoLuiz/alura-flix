import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    --button-color-home: #2271D1;
    --button-color-novoVideo: #FFFFFF;
    --font-weight-home: 800;
    --font-weight-novoVideo: 700;
    --border-color-home: #2271D1;
    --border-color-novoVideo: #FFFFFF;
    --box-shadow-home: inset 0px 0px 8px 1px rgba(34, 113, 209, 1);
    --box-shadow-novoVideo: none;
    --hover-color-home: #1e5bac;  // Darkened home button color for hover
    --hover-color-novoVideo: #e6e6e6;  // Light gray for hover on white button

    font-family: "Source Sans 3", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-secondary);
    color: ${props => props.btntype === 1 ? 'var(--button-color-home)' : 'var(--button-color-novoVideo)'};
    font-weight: ${props => props.btntype === 1 ? 'var(--font-weight-home)' : 'var(--font-weight-novoVideo)'};
    font-size: 1.5rem;
    border: 2px solid ${props => props.btntype === 1 ? 'var(--border-color-home)' : 'var(--border-color-novoVideo)'};
    border-radius: 10px;
    width: 160.13px;
    height: 44px;
    box-shadow: ${props => props.btntype === 1 ? 'var(--box-shadow-home)' : 'var(--box-shadow-novoVideo)'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
    }
`;

const Button = ({ text, btntype }) => {
    return (
        <StyledButton btntype={btntype}>{text}</StyledButton>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    btntype: PropTypes.oneOf([1, 2]),
};

export default Button;
