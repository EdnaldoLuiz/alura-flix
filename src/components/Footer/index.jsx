import styled from 'styled-components';

const StyledFooter = styled.footer`
    background: #021017;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: fit-content;
    padding: 2.5rem 0;
    border-top: var(--border);
`;

const FooterImage = styled.img`
    max-width: 7%;
    height: auto;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterImage
                src="./public/assets/imgs/alura-flix.png"
                alt="Alura Flix"
            />
        </StyledFooter>
    );
}

export default Footer;
