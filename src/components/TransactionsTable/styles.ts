import styled from "styled-components";

export const Container = styled.div`
    margin-top:  4rem;
    
    table {
        width: 100%; //ocupa toda a largura
        border-spacing: 0 .5rem; //espaço entre as linhas da tabela

        th {
            color: var(--text-body);
            font-weight: 400; 
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
                font-weight: 500;
            }

            &.deposit {
                color: var(--green);
                font-weight: 500;
            }

            &.withdraw {
                font-weight: 500;
                color: var(--red);
            }
        }
    }
`;