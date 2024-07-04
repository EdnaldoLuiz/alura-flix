import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: "Source Sans 3", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.type === 'home' ? 'black' : 'transparent'};
    color: ${props => props.type === 'home' ? '#2271D1' : '#FFFFFF'};
    font-weight: ${props => props.type === 'home' ? 800 : 700};
    font-size: 20px;
    border: 2px solid ${props => props.type === 'home' ? '#2271D1' : '#FFFFFF'};
    border-radius: 10px;
    width: 180.13px;
    height: 54px;
    box-shadow: ${props => props.type === 'home' ? 'inset 0px 0px 12px 4px rgba(34, 113, 209, 1)' : 'none'};
    cursor: pointer;
`;

const Button = ({ text, type }) => {
    return (
        <StyledButton type={type}>{text}</StyledButton>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['home', 'novoVideo']),
    to: PropTypes.string,
};

export default Button;
