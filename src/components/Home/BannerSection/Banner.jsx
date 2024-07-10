import styled from 'styled-components';

const BannerContainer = styled.div`
    padding-top: 2rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50rem;
    background-color: #061723;
    background-size: cover;
    color: var(--text-color);
    text-align: center;
    position: relative;

    &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -44px;
        left: 0;
        width: 100%;
        height: 100px;
        background-image: url('https://www.alura.com.br/assets/img/alura2023/home/divisor-section-app.1720710817.svg');
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const BannerContent = styled.div`
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 42%;

    &:first-child {
        align-items: flex-start;
        h1 {
            background: linear-gradient(to right, #6BD1FF, #2271D1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 3.5rem;
            margin-bottom: 2rem;
            text-align: left;
        }

        h2 {
            font-size: 2.5rem;
            color: #FFFFFF;
            margin-bottom: 1rem;
            text-align: left;
        }

        p {
            font-size: 1.6rem;
            margin-bottom: 2rem;
            text-align: left;
            color: #FFFFFF;
        }
    }

    &:last-child {
        iframe {
            width: 100%;
            height: 30rem;
            box-shadow: 0 0 15px rgba(34, 113, 209, 0.7);
        }
    }
`;

const StyledIframe = styled.iframe`
    width: 100%;
    border: var(--border);
    margin: 0;
    padding: 0;
    display: block;
`;

const Banner = () => {
    return (
        <BannerContainer>
            <BannerContent>
                <h1>Front-end</h1>
                <h2>SEO Com React</h2>
                <p>
                    Conheça as melhores práticas de SEO aplicadas ao desenvolvimento de aplicações React. Aprenda como otimizar suas páginas para melhor desempenho nos mecanismos de busca.
                </p>
            </BannerContent>
            <BannerContent>
                <StyledIframe
                    src="https://www.youtube.com/embed/94yuIVdoevc?si=yKqN1EMAQg9tL71h"
                    title="YouTube video"
                    allowFullScreen
                ></StyledIframe>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;
