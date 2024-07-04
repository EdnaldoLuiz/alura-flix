import styled from 'styled-components';
import VideoSectionButton from './VideoActionButton';

const Card = styled.article`
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: var(--border-radius);
    border: var(--border);
    overflow: hidden;
    iframe {
        width: 100%;
        height: 200px;
        border: none;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: black;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
`;

const Description = styled.p`
    background-color: inherit;
    margin-bottom: 10px;
    color: #333;
`;

const VideoCard = () => {
    return (
        <Card>
            <iframe
                title="Vídeo"
                src="https://www.youtube.com/embed/2G_mWfG0DZE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <ContentContainer>
                <Description>
                    ttt.
                </Description>
                <ButtonContainer>
                    <VideoSectionButton
                        icon="./public/assets/svg/delete.svg"
                        text="Excluir"
                    />
                    <VideoSectionButton
                        icon="./public/assets/svg/edit.svg"
                        text="Editar"
                    />
                </ButtonContainer>
            </ContentContainer>
        </Card>
    )
}

export default VideoCard;
