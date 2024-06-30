import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from 'styled-components'
import HomeBanner from "./BannerSection/BannerSection";
import Categoria from "./VideoSection/VideoCategory";

const ContainerCategorias = styled.div`
    padding: 80px;
    background-color: #262626;
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
`

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <ContainerCategorias>
                <Categoria titulo="Front-End" color="#6BD1FF" />
                <Categoria titulo="Back-End" color="#00C86F" />
                <Categoria titulo="Mobile" color="#FFBA05" />
            </ContainerCategorias>
            <Footer />

        </>
    );
};

export default Home;