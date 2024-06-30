import PropTypes from 'prop-types';
import { styled } from 'styled-components';

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

const ButtonNewVideo = ({ text }) => {
    return (
        <StyledButton>{text}</StyledButton>
    );
};

ButtonNewVideo.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ButtonNewVideo;
