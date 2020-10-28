import styled,{css} from 'styled-components'
import {circle} from "utils/mixins.js"
// 因为在线状态部分的伪元素代码类似，因此可以使用CSS函数来实现代码复用，跟SASS/LESS中的Mixins类似
const circleMixinFunc = (color, size = '8px') => css`
    content: "";
    display: block;
    position: absolute;
    ${'' /* width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: ${color}; */}
    ${circle(color, size)}
`
/**
 * 定义四个常量
 */
// 定义头像组件最外层的容器
const StyledAvatar = styled.div`
  position: relative;
`
// 在线状态
const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;
/* 制造同心圆 */
  /* 定义外层大圆圈 &表示div这个元素*/
  &::before{
    /* ${circleMixinFunc('white')} */
    ${({ size }) => {
      return circleMixinFunc('white', size)
    }}
    /* 放大为小圆圈的2倍，实现同心圆 */
    transform: scale(2);
  }
  /* 定义内层小圆圈 */
  ::after{
    /* content: "";
    background-color: ${({ theme }) => theme.green
  }; */
  /* 将主题中绿色色值传递给 circleMixinFunc函数*/
  ${({ theme, status, size }) => {
  if (status === 'online') {
    return circleMixinFunc(theme.green, size);
  } else {
    return circleMixinFunc(theme.gray, size);
    }
  }}
  }
`
// 头像的圆形蒙版
const AvatarClip = styled.div`
  width: ${({size})=>size};
  height: ${({size})=>size};
  border-radius: 50%;
  overflow: hidden
`
// 头像
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  /* 自动等比例缩放，填满整个模板 */
  object-fit: cover;
  object-position: center;
`

// 导出定义的变量
// 默认到导出为头像最外层的容器，这个随意，可以根据自己喜好
export default StyledAvatar
// 以下作为命名导出
export { StatusIcon, AvatarClip, AvatarImage };