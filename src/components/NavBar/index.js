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
import { Link, useLocation, matchPath } from 'react-router-dom';
function NavBar({
    children,
    ...rest }) {
    return (
        <StyledNavBar {...rest}>
        <Avatar src={profileImage} status="online" />
        <MenuItems>
          <MenuItem to = "/" showBadge icon={faCommentDots} />
          <MenuItem to = "/contacts" icon={faUser} />
          <MenuItem to = "/files" icon={faFolder} />
          <MenuItem to = "/notes" icon={faStickyNote} />
          <MenuItem icon={faEllipsisH} />
          <MenuItem to = "/settings" icon={faCog} css={`align-self: end`}/>
        </MenuItems>
        </StyledNavBar>
    )
}
// 定义一个MenuItem组件,icon表示对应的图标，active表示是否激活，showBadge表示是否显示红点
function MenuItem({ to, icon, showBadge, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(loc.pathname, {
    path: to,
    exact: to === "/",
  })
  return (
    <StyleMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show = {showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </Link>
    </StyleMenuItem>
  )
}
NavBar.propTypes = {
  children: PropTypes.any,
}

export default NavBar
export {MenuItem}