import styled from 'styled-components';
import Button from '../Button';

const StyledHeader = styled.header`
    background: var(--color-secondary);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: fit-content;
    padding: 2rem 0;
`;

const LogoContainer = styled.div`
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding-left: 3rem;

    img {
        width: 10rem;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-right: 3rem;
`;

const ButtonWrapper = styled.ul`
    gap: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none; 
`;

const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <img src="/public/assets/imgs/alura-flix.png" alt="React Logo" />
            </LogoContainer>
            <Nav>
                <ButtonWrapper>
                    <li><Button text="Home" type='home'/></li>
                    <li><Button text="Novo vídeo" type='novoVideo'/></li>
                </ButtonWrapper>
            </Nav>
        </StyledHeader>
    );
};

export default Header;
