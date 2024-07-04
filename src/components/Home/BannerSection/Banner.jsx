import styled from 'styled-components'

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: #f8f9fa;
    color: var(--text-color);
    text-align: center;
    h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <h1>Seja bem-vindo(a)!</h1>
      <p>Conheça os melhores cursos de programação do mercado.</p>
    </BannerContainer>
  );
};

export default Banner;