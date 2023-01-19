import styled from 'styled-components';

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    height: 50vh;
`

export const Line = styled.hr`
    width: 100%;
    border: px inset;
    border-color: white;
`

export const Portrait = styled.img`
    border-radius: 50%;
    height: 280px;
    margin-left: 50px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`