import styled from 'styled-components'
// Popover的内容
const Content = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 21px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
  padding: 12px 30px;
  position: absolute;
/* 设置偏移量，这里的100%指的是Popover的高度，按钮沾满整个高度，所以也是按钮的高度 */
  bottom: calc(100% + 12px);
  ${({ offset }) => offset && `transform: translate(${offset.x || 0}, ${offset.y || 0})`};
  
  ${({ visible }) => !visible && `display: none`};
    /* 通过visible的值来决定是否显示 */
`
// 指向附加组件的三角形
const Triangle = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: ${({ theme }) => theme.background} transparent transparent;
  /* 居中 */
  left: calc(50% - 6px);
  bottom: calc(100% + 12px - 5px);

  ${({ offset }) => offset && `transform: translateY(${offset.y || 0})`};
  ${({ visible }) => !visible && `display: none`};
    /* 通过visible的值来决定是否显示 */
`
// 附加组件
const Target = styled.div``

const StyledPopover = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`
export default StyledPopover
export {Content, Triangle, Target}