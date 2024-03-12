import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: rgb(243, 243, 243);
    border-radius: 8px;
    box-shadow: rgba(34, 60, 80, 0.2) 0px 4px 9px 4px;
`;

export const Inner = styled.div`
    flex-basis: 100%;
    flex-direction: column;
    display: flex;
    gap: 16px;
`;
