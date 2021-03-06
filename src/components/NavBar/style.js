import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {activeBar} from 'utils/mixins';
import StyledAvatar from 'components/Avatar/style';
const StyleMenuItem = styled.div`
  & > a {
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${activeBar()};
    ${({ active }) => (active ? "" : `&::before, &::after {height: 0}`)}};
    
    :hover{
      /* 指示条动画 */
      ::before,
      ::after {
        height: 100%;
      }

      /* svg图标动画 */
      svg {
        transform: scale(1.2);
        opacity: 1;
      }
    }

`
// 被包裹的react组件必须接收className属性
const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => {
  if (active) {
    return 1
  } else {
    return 0.3
  }
}};
  transform: scale(1);
  transition: 0.4s;
`
// 菜单项布局
const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`
const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px;

  /* 给头像添加样式 */
  ${StyledAvatar} {
    justify-self: center;
    ::before {
      background-color: ${({theme}) => theme.darkPurple}
    }
  };
`
export default StyledNavBar
export {MenuIcon, StyleMenuItem, MenuItems}