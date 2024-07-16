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
        --primary-dark: #000000e4;
        --color-primary: #021017;
        --color-secondary: #01080E;
        --color-tertiary: #175A70;
        --primary-glow-color: #2271D1;

        --border-radius: .7rem;
        --border-width: 0.3rem solid;
        --border-color: #175A70;
        --border: 1px solid #175A70;
        --button-background: #000000E5;

        --default-text-size: 1.3rem;
        --text-color: #F5F5F5;
        --text-color-blue: #2271D1;

        --error-color: #FF0000;
    }

    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    body {
        font-size: 1.6rem;
        background-color: #061723;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
