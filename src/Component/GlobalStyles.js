import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { cssVar } from '../vars';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        background-color:${cssVar.bgColor04};
    }
`;
export default GlobalStyles;
