import styled from '@emotion/styled';
import {BsArrowLeft,BsArrowRight} from "react-icons/bs";

export const ArrowsContainer = styled.div`
    color: black;
    display: flex;
    font-size: 30px;
    justify-content: space-between;
    height: 100%;
    position: absolute;
    top: 30%;
    width: 100%;
    z-index: 1;
`;


export const Left =  styled(BsArrowLeft)`
    height: 30px;
    width: 30px;
    margin-left: 5px;
    &:hover{
        cursor: pointer;}
`;

export const Right =  styled(BsArrowRight)`
    height: 30px;
    width: 30px;
    margin-right: 5px;
    &:hover{
        cursor: pointer;
    }
`;
