import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const StyledButton = styled.button`
    font-family: "Source Sans 3", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: #2271D1;
    font-weight: 800;
    font-size: 20px;
    border: 2px solid #2271D1;
    border-radius: 10px;
    width: 180.13px;
    height: 54px;
    box-shadow: inset 0px 0px 12px 4px rgba(34, 113, 209, 1);
    cursor: pointer;
`;

const ButtonHome = ({ text }) => {
    return (
        <StyledButton>{text}</StyledButton>
    );
};

ButtonHome.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ButtonHome;
