import styled from 'styled-components';

const Card = styled.article`
    display: flex;
    flex-direction: column;
    width: 430px;
    border-radius: 16px;
    border: 5px solid #6ACEFC;
    overflow: hidden;
    iframe {
        width: 100%;
        height: 240px;
        border: none;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: black;
    button {
        background-color: transparent;
        border: none;
        color: var(--text-color);
        display: flex;
        gap: 20px;
        cursor: pointer;
        align-items: center;
    }
`

const VideoCard = () => {
    return (
        <Card>
            <iframe
                title="Vídeo"
                src="https://www.youtube.com/embed/2G_mWfG0DZE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <ButtonContainer>
                <button>
                    <img src="./src/assets/svg/delete.svg" alt="" />
                    <h3>Deletar</h3>
                </button>

                <button>
                    <img src="./src/assets/svg/edit.svg" alt="" />
                    <h3>Editar</h3>
                </button>
            </ButtonContainer>
        </Card>
    )
}

export default VideoCard;

