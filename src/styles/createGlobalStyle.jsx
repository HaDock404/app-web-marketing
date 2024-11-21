import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overscroll-behavior: none;
    }    
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle
