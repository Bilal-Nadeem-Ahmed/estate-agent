import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
}
html,body{
    /* this is for the animation to make it work. */
    oxerflow-x:hidden;
}
`;
export default GlobalStyle;
