import styled from 'styled-components';

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`

export const Line = styled.hr`
    width: 100%;
    border: px inset;
    border-color: white;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Icon = styled.a`
    color: white;
    padding-top: 10px;
    margin-right: 10px;

    /* Hover animation */
    &:hover {
        transition: 0.4s ease-in-out;
        color: #41E2BA;
    }
`