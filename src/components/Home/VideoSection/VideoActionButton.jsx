import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: var(--text-color);
    display: flex;
    gap: 10px;
    cursor: pointer;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
    }

    span {
        font-size: 1.3rem;
    }
    &:hover {
        color: var(--text-color-blue);
    }
`;

const VideoSectionButton = ({ icon, text, onClick }) => {

    return (
        <StyledButton onClick={onClick}>
            <img src={icon} alt={text} />
            <span>{text}</span>
        </StyledButton>
    );
};

VideoSectionButton.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default VideoSectionButton;
