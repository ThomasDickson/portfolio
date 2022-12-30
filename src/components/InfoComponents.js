import styled from 'styled-components';

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    min-margin
`

export const T1 = styled.span`
    font-size: 64px;
    font-family: 'Ubuntu';
    font-weight: 700;
    color: #41E2BA;
`

export const T2 = styled.span`
    font-size: 32px;
    font-family: 'Ubuntu Mono';
    font-weight: 400;
    color: white;
`

export const T3 = styled.span`
    font-size: 24px;
    font-family: 'Ubuntu';
    font-weight: 500;
    color: white;
`

export const T4 = styled.span`
    padding-top: 10px;
    font-size: 16px;
    font-family: 'Ubuntu';
    font-weight: 300;
    color: white;
`

export const Line = styled.hr`
    margin-top: 20px;
    width: 100%;
    border: 1px inset;
    border-color: white;
`

export const Icon = styled.a`
    color: white;
    padding-top: 10px;

    &:hover {
        transition: 0.4s ease-in-out;
        color: #41E2BA;
    }
`