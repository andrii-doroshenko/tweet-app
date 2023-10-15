import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    font-weight: 500;
    color: #212121;
  }

  ul {
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0 15px;
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
