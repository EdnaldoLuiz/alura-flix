import Header from "../Header";
import Footer from "../Footer";
import styled from 'styled-components'
import Categoria from "./VideoSection/VideoCategory";
import Banner from "./BannerSection/Banner";

const ContainerCategorias = styled.div`
    padding: 8rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    align-items: center;
    margin-bottom: 5rem;
`

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
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