import styled, {css} from 'styled-components';
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
background: #565656;
border-radius: 22px;
position : relative;

color: #FFFFFF;
padding: 2px 12px;
min-width: 120px;
width: 100%;

&:hover{
    cursor: pointer;
    background-color: rgb(228, 16, 93);
}

${({variant}) => variant !== "primary" && css`
    max-width: 140px;
    height: 33px;

    background: #E4105D;

    &:hover{
        box-shadow: rgb(228 16 93) 0px 0px 48px 0px;
    }

    &::after {
        content: '';
        position: absolute;
        border: 1px solid #E4105D;
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }
`}
`