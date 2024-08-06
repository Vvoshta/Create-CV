import styled from 'styled-components';

export const Job = styled.div`
    background: rgb(238, 244, 255);
    padding: 10px;

    p:nth-child(1) {
        font-size: 18px;
        font-weight: 500;
    }

    p:nth-child(2) {
        font-weight: 500;
    }
`;

export const WorkPeriod = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`;

export const WorkDescription = styled.div`
    margin-top: 10px;
    width: 100%;
    margin-bottom: 20px;
`;
