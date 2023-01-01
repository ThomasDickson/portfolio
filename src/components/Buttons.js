import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const OutlineButton = styled(Link)`
    /* Font Settings */
    font-family: 'Ubuntu';
    text-decoration: none;
    font-weight: 500;
    color: #41e2ba;

    /* Background Settings */
    background-color: transparent;
    padding: 10px;
    width: fit-content;
    
    /* Border Settings */
    border: 2px solid black;
    border-color: #41e2ba;
    border-radius: 6px;

    /* Positioning */
    margin-right: 24px;
    margin-top: auto;
    
    /* Hover Animation */
    &:hover {
        transition: all 0.4s ease-in-out;
        background: #41e2ba;
        color: #2b2d42;
    }
`

export const FilledButton = styled(Link)`
    /* Font Settings */
    font-family: 'Ubuntu';
    text-decoration: none;
    font-weight: 500;
    color: #1e1e1e;
    
    /* Background Settings */
    background-color: #41e2ba;
    padding: 10px;
    width: fit-content;
    
    /* Border Settings */
    border: 2px solid black;
    border-color: #41e2ba;
    border-radius: 6px;

    /* Positioning */
    margin-top: auto;

    /* Hover Animation */
    &:hover {
        transition: all 0.4s ease-in-out;
        background: #2b2d42;
        color: #41e2ba;
    }
`