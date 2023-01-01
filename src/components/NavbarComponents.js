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
`