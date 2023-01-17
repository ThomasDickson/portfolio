import styled from "styled-components";

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    gap: 10px;
`

export const Icon = styled.a`
    color: white;

    /* Hover animation */
    &:hover {
        transition: 0.4s ease-in-out;
        color: #41E2BA;
    }
`