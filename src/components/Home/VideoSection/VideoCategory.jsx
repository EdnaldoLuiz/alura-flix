import styled from 'styled-components'
import VideoCard from './VideoCard'
import PropTypes from 'prop-types'

const VideoSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1400px;
`

const TileContainer = styled.div`
    background-color: ${({ color }) => color};
    font-size: 24px;
    color: white;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    text-transform: uppercase;
    width: 320px;
`

const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`

const VideoCategory = ({ titulo, color }) => {
    return (
        <VideoSection>
            <TileContainer color={color}>
                <h3>{titulo}</h3>
            </TileContainer>
            <Cards>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </Cards>
        </VideoSection>
    )
}

VideoCategory.propTypes = {
    titulo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default VideoCategory