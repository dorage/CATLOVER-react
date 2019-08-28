import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { cssVar } from '../vars';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        margin-top:${cssVar.headerH};
        overflow-x:hidden;
        background-color:${cssVar.charcoal};
        font-family: 'Oswald', sans-serif;
    }
`;
export default GlobalStyles;
