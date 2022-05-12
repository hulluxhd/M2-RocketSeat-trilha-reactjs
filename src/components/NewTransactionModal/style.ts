import styled from "styled-components";

export const Container = styled.form`
    h2{
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: var(--text-title)
    }

    
    input{
        width: 100%;
        height: 4rem;
        padding: 0 1rem;
        font-size: 1rem;
        font-weight: 400;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        &::placeholder{
            color: var(--text-title);
        }
        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        height: 4rem;
        color: #fff;
        font-weight: 600;
        background-color: var(--green);
        border: 0;
        border-radius: 0.25rem;
        margin-top: 1.5rem;
        font-size: 1rem;
        padding: 0 1.5rem;
        transition: filter 0.1s;
        &:hover{
            filter: brightness(0.9);
        }
    }


`