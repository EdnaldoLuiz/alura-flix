import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VideoSectionButton from './VideoActionButton';
import VideoEdit from './VideoEdit';
import { useVideo } from '../../../hooks/useVideo';

const Card = styled.article`
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    width: 27rem;
    border-radius: var(--border-radius);
    border: var(--border);
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: var(--primary-dark);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background: inherit;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    flex-grow: 1;
`;

const Title = styled.h2`
    font-size: 1.3rem;
    margin: 10px 0;
    color: var(--text-color-blue);
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: var(--text-color);
    flex-grow: 1;
    max-height: 60px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 1rem;
`;

const StyledIframe = styled.iframe`
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
    display: block;
`;

const VideoCard = ({ videoId, video, onDelete, onUpdate }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const { deleteVideo, updateVideo } = useVideo();

    const handleDelete = async (id) => {
        deleteVideo(id)
            .then(() => {
                setIsVisible(false);
                onDelete(id);
            })
            .catch(error => {
                console.error('Failed to delete video:', error);
            });
    };

    const handleUpdate = async (updatedVideo) => {
        updateVideo(updatedVideo)
            .then(updated => {
                setIsEditVisible(false); 
                onUpdate(updated); 
            })
            .catch(error => {
                console.error('Failed to update video:', error);
            });
    };

    return (
        <Card isVisible={isVisible}>
            <StyledIframe title={video.titulo} src={video.link.replace('watch?v=', 'embed/')} allowFullScreen />
            <ContentContainer>
                <Title>{video.titulo}</Title>
                <Description>{video.descricao}</Description>
                <ButtonContainer>
                    <VideoSectionButton icon="./public/assets/svg/delete.svg" text="Excluir" onClick={() => handleDelete(videoId)}/>
                    <VideoSectionButton icon="./public/assets/svg/edit.svg" text="Editar" onClick={() => setIsEditVisible(true)}/>
            {isEditVisible && <VideoEdit video={video} onClose={() => setIsEditVisible(false)} onUpdate={handleUpdate}/>}
                </ButtonContainer>
            </ContentContainer>
        </Card>
    );
};

VideoCard.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    videoId: PropTypes.string.isRequired,
};

export default VideoCard;
