import styled from 'styled-components';
import PropTypes from 'prop-types';
import VideoCard from './VideoCard';
import { useVideo } from '../../../hooks/useVideo';

const VideoSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1400px;
`;

const TileContainer = styled.div`
    background-color: ${({ color }) => color};
    font-size: 1.5rem;
    color: white;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    text-align: center;
    text-transform: uppercase;
    width: 18rem;
    margin: 3rem 0;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

const VideoCategory = ({ titulo, color, videos, setVideos }) => {
    const { deleteVideo, updateVideo } = useVideo();

    const handleUpdate = async (updatedVideo) => {
        updateVideo(updatedVideo).catch(error => {
            console.error('Erro:', error);
        });
    };

    return (
        <VideoSection>
            <TileContainer color={color}>
                <h3>{titulo}</h3>
            </TileContainer>
            <Cards>
                {videos.map(video => (
                    <VideoCard
                    videoId={video.id}
                    key={video.id}
                    video={video}
                    onDelete={deleteVideo}
                    onUpdate={(updatedVideo) => {
                        handleUpdate(updatedVideo);
                        setVideos(videos => videos.map(v => v.id === updatedVideo.id ? updatedVideo : v));
                    }}
                    setVideos={setVideos}
                />
                ))}
            </Cards>
        </VideoSection>
    );
};

VideoCategory.propTypes = {
    titulo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            descricao: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            categoria: PropTypes.string.isRequired,
        })
    ).isRequired,
    setVideos: PropTypes.func.isRequired,
};

export default VideoCategory;
