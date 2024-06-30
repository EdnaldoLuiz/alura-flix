import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button`
    font-family: "Source Sans 3", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    width: 180.13px;
    height: 54px;
    cursor: pointer;
`;

const ButtonNewVideo = ({ text, to }) => {
    const navigate = useNavigate();
    const handleClick = () => { navigate(to); };
    return (
        <StyledButton onClick={handleClick}>{text}</StyledButton>
    );
};

ButtonNewVideo.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default ButtonNewVideo;
