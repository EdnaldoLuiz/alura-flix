import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        font-size: 62.5%;
        font-family: 'Roboto';
        --primary-dark: #000000E5;
        --color-primary: #2271D1;
        --color-secondary: #01080E;
        --color-tertiary: #f4f4f4;
        --primary-glow-color: #2271D1;

        --border-radius: 1.5rem;
        --border-width: 0.3rem solid;
        --border-color: #2271D1;
        --border: 1px solid #175A70;
        --button-background: #000000E5;

        --text-color: #F5F5F5;
    }

    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    body {
        font-size: 1.6rem;
        background-color: #000509;
    }
`;

export default GlobalStyles;
