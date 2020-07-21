import React from 'react'
import PropTypes from 'prop-types'
import StyledNavBar, { StyleMenuItem, MenuIcon, MenuItems } from './style'
import Badge from '../Badge/index';
import Avatar from 'components/Avatar';
import profileImage from 'assets/images/face-male-1.jpg';
import {faCommentDots, faCog, faEllipsisH, faStickyNote, 
  faFolder, faUser
} from "@fortawesome/free-solid-svg-icons"
import "styled-components/macro";
function NavBar({
    children,
    ...rest }) {
    return (
        <StyledNavBar {...rest}>
        <Avatar src={profileImage} status="online" />
        <MenuItems>
          <MenuItem showBadge active icon={faCommentDots} />
          <MenuItem icon={faUser} />
          <MenuItem icon={faFolder} />
          <MenuItem icon={faStickyNote} />
          <MenuItem icon={faEllipsisH} />
          <MenuItem icon={faCog} css={`align-self: end`}/>
        </MenuItems>
        </StyledNavBar>
    )
}
// 定义一个MenuItem组件,icon表示对应的图标，active表示是否激活，showBadge表示是否显示红点
function MenuItem({icon, active, showBadge, ...rest}){
  return (
    <StyleMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show = {showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </a>
    </StyleMenuItem>
  )
}
NavBar.propTypes = {
}

export default NavBar
export {MenuItem}