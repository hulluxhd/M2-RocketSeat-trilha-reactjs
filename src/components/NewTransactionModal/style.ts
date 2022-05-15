import { darken, transparentize } from "polished";
import styled from "styled-components";

export const ContainerForm = styled.form`
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

export const IncomeOutcomeButtonsContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;
    height: 4rem;
    gap: 0.5rem;

`

interface IncomeOutcomeButtonProps{
    isActive: boolean,
    activeColor: "red" | "green"
}

const colors={
    red: "#e52e4d",
    green: "#33cc95"
}

export const IncomeOutcomeButton = styled.button<IncomeOutcomeButtonProps>`

    background: ${({isActive, activeColor}) => isActive ? transparentize(0.9, colors[activeColor]): "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    transition: border-color 0.1s;

    
    img{
        display: inline-block;
        margin-left: 1rem;
        height: 20px;
        width: 20px;
    }

    span{
        font-size: 1rem;
        color: var(--text-title);
    }

    &:hover{
        border-color: ${darken(0.1, "#d7d7d7")}
    }


`