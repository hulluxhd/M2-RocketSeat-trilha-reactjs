import styled from "styled-components";

export const Container = styled.div`
margin-top:4rem;

  table {
    width: 100%;
    border-spacing: 0rem 0.5rem;

    th{
        color: var(--text-body);
        padding: 1rem 2rem;
        text-align: left;
        font-weight: 400;
        line-height: 1.5rem
    }

    tr{
        border-radius: 1rem;
        background: var(--shape);
    }
    
    td{
        border: 0;
        color: var(--text-body);
        border-radius: 1rem;
        padding: 1rem 2rem;
        
        &:first-child{
            color: var(--text-title);
        }

        &.deposit{
            color: var(--green);
        }
        &.withdrawal{
            color: var(--red);
        }
    }

  }
`;
