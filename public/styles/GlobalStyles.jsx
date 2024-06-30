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
        --color-secondary: #333;
        --color-tertiary: #f4f4f4;
        --primary-glow-color: #2271D1;

        --border-radius: 0.5rem;
        --border-width: 0.3rem solid;
        --border-color: #2271D1;
        --button-background: #000000E5;

        --text-color: #F5F5F5;
    }
`;

export default GlobalStyles;
