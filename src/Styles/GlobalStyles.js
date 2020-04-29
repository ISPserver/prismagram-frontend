import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset";
//styled-components의 최신방식으로 만드는 global styles

export default createGlobalStyle`
    ${reset};
    @import url('https:fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Camtarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;        
    }
    input:focus{
        outline:none;
    }
`;
