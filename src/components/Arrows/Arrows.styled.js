import styled from '@emotion/styled';
import {BsArrowLeft} from "react-icons/bs";

export const ArrowsContainer = styled.div`
    color: white;
    display: flex;
    font-size: 30px;
    justify-content: space-between;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
`;


export const Left =  styled.div`
    height: 30px;
    width: 30px;
    margin-left: 5px;
    transform: rotate(180deg);
    &:hover{
        cursor: pointer;}
`;

export const Right =  styled.div`
    height: 30px;
    width: 30px;
    margin-right: 5px;
    &:hover{
        cursor: pointer;
    }
`;
