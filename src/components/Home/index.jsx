import { useState, useEffect } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import styled from 'styled-components';
import VideoCategory from "./VideoSection/VideoCategory";
import Banner from "./BannerSection/Banner";
import { useVideo } from '../../hooks/useVideo';

const ContainerCategorias = styled.div`
    padding: 8rem 4rem;
    flex-direction: column;
    gap: 10rem;
    align-items: center;
    margin-bottom: 5rem;
    background: #000509;
`;

const Home = () => {
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);
    const { deleteVideo } = useVideo();

    useEffect(() => {
        fetch('http://localhost:3002/videos')
            .then(response => response.json())
            .then(data => {
                const categoryNames = new Set(data.map(video => video.categoria));
                setCategorias([...categoryNames]);
                setVideos(data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <Banner />
            <ContainerCategorias>
                {categorias.map(categoria => (
                    <VideoCategory
                        key={categoria}
                        titulo={categoria}
                        color={
                            categoria === "front-end" ? "#6BD1FF" :
                            categoria === "back-end" ? "#00C86F" :
                            categoria === "mobile" ? "#FFBA05" : "#FFFFFF"
                        }
                        videos={videos.filter(video => video.categoria === categoria)}
                        onDelete={deleteVideo}
                         setVideos={setVideos}
                    />
                ))}
            </ContainerCategorias>
            <Footer />
        </>
    );
};

export default Home;
