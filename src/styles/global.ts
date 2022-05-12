import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --green: #33CC95;
    --red: #E52E40;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363f5f;
    --text-body: #969CB2;
    --shape: #FFFFFF
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

html{
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
}

button{
    cursor:pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}


body, input, textarea, button{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

h1, h2, h3,h4,h5,h6, strong{
    font-weight: 600;
}


.react-modal-overlay{
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content:center;
}

.react-modal-content{
    background: var(--background);
    width: 100%;
    max-width: 576px;
    position: relative;
    border-radius: 0.25rem;
    padding: 4rem;
}

.react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;

    &:hover{
        filter: brightness(0.9)
    }
}



`;
