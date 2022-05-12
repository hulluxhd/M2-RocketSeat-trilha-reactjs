import styled from "styled-components"

export const Container = styled.header`
    background: var(--blue)
`

export const Content = styled.div`
    padding: 2rem 1rem 12rem;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        border: none;
        padding: 1rem 2rem;
        border-radius: 0.25rem;
        background-color: var(--blue-light);
        color: #fff;
        transition: filter 0.1s ease-in-out;
        font-weight: 600;

        &:hover{
            filter: brightness(0.9);
        }
    }
`

