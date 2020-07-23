import { css } from "styled-components"
// 圆形组件
export const circle = (color, size = '8px') => css`
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: ${color};
`
// 高亮显示条
export const activeBar = ({ barWidth= "8px", shadowWidth= "20px"} = {}) => css`
    position: relative;
    &::before, &::after {
        display: block;
        content: "";
        position: absolute;
        height: 100%;
        left: 0px;
    }
    &::before{
        width: ${barWidth};
        background: linear-gradient(180deg, 
        rgba(142, 197, 242, 1) 0%,
        rgba(79, 157, 222, 1) 100%
        );
    }
    &::after{
        width: ${barWidth};
        background: linear-gradient(270deg, 
        rgba(41, 47, 76, 1) 0%,
        rgba(142, 197, 242, 1) 100%
        );
        opacity: 0.6;
    }
`
// card函数
export const card = (radius = "6px", padding = "20px 30px") => css`
    padding: ${ padding };
    background: ${({ theme }) => theme.background};
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0. 04);
    border-radius: ${radius};
`