import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled(Link)`
    font-size: 30px;
    text-decoration: none;
    font-weight: bold;
    color: #41e2ba;
    margin-left: 24px;
`

export const OutlineButton = styled(Link)`
    font-family: 'Ubuntu';
    text-decoration: none;
    font-weight: 500;
    background-color: transparent;
    padding: 10px;
    color: #41e2ba;
    border: 2px solid black;
    border-color: #41e2ba;
    border-radius: 5px;
    margin-right: 24px;

    /* hover animation */
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #41e2ba;
        color: #2b2d42;
    }
`

export const FilledButton = styled(Link)`
    font-family: 'Ubuntu';
    text-decoration: none;
    font-weight: 500;
    background-color: #41e2ba;
    padding: 10px;
    color: #1e1e1e;
    border: 2px solid black;
    border-color: #41e2ba;
    border-radius: 5px;
    margin-right: 24px;

    /* hover animation */
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #2b2d42;
        color: #41e2ba;
    }
`