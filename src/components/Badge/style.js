import styled,{css} from 'styled-components'
import {circle} from "utils/mixins.js"
// 定义变体，用对象表示,key是变体的名称 值为变体的css样式
const variants = {
  // dot表示不显示未读数的变体
  dot: css`
  position: relative;
  padding: 5px;
  ${'' /* 红点用after伪元素来表示 */}

  &::after{
    content: "";
    display: ${({ show }) => (show ? "bloack" : "none")};
    position: absolute;
    right: 0;
    top: 0;
    ${({theme}) => circle(theme.red, "6px")}
  }
  `,
  // default 显示未读数的默认变体
  default: css`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px, 18px, 40px, 0px, rgba(0,0,0,0.04),
  0px, 6px, 12px, 0px, rgba(0,0,0,0.08);
  ${({ theme }) => circle(theme.red, "26px")};
  ${({ showZero, count }) =>  !showZero && count === 0 && `visbility: hidden`}
  `,
}

const Count = styled.div`
  font-size: ${({theme}) => theme.nomal};
  color: white;
`
const StyledBadge = styled.div`
  display: inline-block;
  ${({variant}) => variants[variant]}
`
export default StyledBadge
export {Count}