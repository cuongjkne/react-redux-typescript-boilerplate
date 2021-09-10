import { createGlobalStyle } from "styled-components";
import px2vw from "../../common/utilities/px2vw";

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        text-decoration: none;
        vertical-align: baseline;
        color: black;
        /* font-size: 100%; */
    }
    :root {
        @media (min-width: 0) {
            font-size: ${px2vw(50)};
        }
        @media (min-width: 768px) {
            font-size: ${px2vw(30)};
        }
        @media (min-width: 1024px) {
            font-size: ${px2vw(20)};
        }
        @media (min-width:1440px){
            font-size: ${px2vw(24)};
        }
    }

`;

export default Global;
