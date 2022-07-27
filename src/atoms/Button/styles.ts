import styled from "styled-components";

export const Container = styled.button
`
    width: 130px;    
    height: 42px;
    border: 1px #17A4D0 solid;
    color: #17A4D0;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 25px; 
    box-shadow: 0 0 17px -8px transparent;
    transmition: all 0.35s ease-out; 
    

    &:hover{
        color: #fff;
        background-color: #17A4D0;
        box-shadow: 0 0 17px -0px #17A4D0;
    }
`