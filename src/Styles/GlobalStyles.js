import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset";
//styled-components의 최신방식으로 만드는 global styles
export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    }
`;
