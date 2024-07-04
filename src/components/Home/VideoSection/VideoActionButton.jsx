import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: var(--text-color);
    display: flex;
    gap: 20px;
    cursor: pointer;
    align-items: center;
`;

const VideoSectionButton = ({ img, text }) => {
    return (
        <StyledButton>
            <img src={img} alt={text} />
            <span>{text}</span>
        </StyledButton>
    );
}

VideoSectionButton.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default VideoSectionButton;