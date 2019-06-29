import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { cssVar } from '../vars';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        background-color:${cssVar.color03};
    }
`;
export default GlobalStyles;
