import styled, { css } from 'styled-components'
// 用于布局导航组件
const Nav = styled.nav`
/* 禁止缩小 */
  flex-shrink: 0;

  position: relative;
  z-index: 100;
`
// 用于布局侧边栏列表
const Sidebar = styled.aside`
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.gredianGray};
  position: relative;
  z-index: 50;
  > div {
    /* 告诉浏览器开启GPU加速，提升性能 */
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`
// 用于布局内容区域
const Content = styled.main`
  flex: 2;
  position: relative;
`
// 用于布局滑动抽屉
const Drawer = styled.div`
  max-width: 310px;
  width: 0px;

  transform: translateX(200px);
  transition: transform 0.4s;
  will-change: width, transform;

  ${({ show }) => (
  show && 
  css`
    width: initial;
    transform: translateX(0px);
  `
)};
/* ${({ show }) => (
  !show && 
  css`
    width: 0;
    transform: translateX(200px);
  `
)}; */
  

  /* 判断showDrawer的状态 */
  ${({show}) =>(show && css`width: 310px;`)}
`

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`
export default StyledChatApp
export {Nav, Sidebar, Content, Drawer}