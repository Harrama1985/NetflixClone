import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,body{
        font-family:'helvetica Neue', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscal;
        background-color:black;
        color:#333;
        font-size:16px;
    }
`;
