import styled from "styled-components";

export const IconContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: left;
    margin-top: 10px;
    gap: 10px;
`

export const IconCaption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    color: white;

    @media only screen and (max-width: 860px) {
        width: 100px;
    }
`

export const Icon = styled.a`
    color: white;

    /* Hover animation */
    &:hover {
        transition: 0.4s ease-in-out;
        color: #41E2BA;
    }
`