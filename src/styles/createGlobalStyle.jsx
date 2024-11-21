import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overscroll-behavior: none;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        ont-style: normal;
    }    
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle
