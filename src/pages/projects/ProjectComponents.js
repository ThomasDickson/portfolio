import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Cards = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    grid-template-columns: 1fr 1fr 1fr;
    
    @media only screen and (max-width: 1440px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 12px;
    border-color: #41e2ba;
`
export const CardImage = styled.img`
    max-width: 100%;
    border-radius: 6px;
    margin-bottom: 20px;
`
