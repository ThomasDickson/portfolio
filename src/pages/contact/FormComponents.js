import styled, {css} from "styled-components";
import { OutlineButton } from "../../components/Buttons";

const Field = css`
    /* border */
    font-family: 'Ubuntu';
    border: 2px solid black;
    border-radius: 12px;
    border-color: #41e2ba;

    /* misc */
    color: white;
    background-color: rgb(0, 0, 0, 0);
    padding: 16px;
    outline: 0;
    font-size: 16px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`

export const Input = styled.input`
    ${Field}
`

export const TextArea = styled.textarea`
    ${Field}

    resize: vertical;
    height: 100px;
`

export const Submit = styled.input`
    cursor: pointer;

    /* Font Settings */
    font-family: 'Ubuntu';
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: #1e1e1e;

    /* Background Settings */
    background-color: #41e2ba;
    padding: 16px;
    width: fit-content;

    /* Border Settings */
    border: 2px solid black;
    border-color: #41e2ba;
    border-radius: 6px;

    /* Positioning */
    margin-top: 24px;

    /* Hover Animation */
    &:hover {
        transition: all 0.4s ease-in-out;
        background: #2b2d42;
        color: #41e2ba;
    }
`