import styled from "styled-components"; 

export const StyledUl = styled.ul `
    list-style:none;
    text-align:center;
    font-size: 22px;
    padding:0;    
`


export const StyledLi = styled.li `
font-weight: 600;
    line-height: 1.5em; 
    &:nth-child(1){
        color:rgba(64, 181, 105, 1);
    }
    &:nth-child(2){
        color:rgba(209, 186, 35, 1);
    }
    &:nth-child(3){
        color:rgba(180, 65, 65, 1);
    }
`


