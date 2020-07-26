import React from 'react'
import PropTypes from 'prop-types'
import StyledIcon  from './style'
import SocialIcon from './SocialIcon'
function Icon({
  icon: IconComponent,
  height = 24,
  width = 24,
  color,
  opacity,
    ...rest }) {
    return (
      <StyledIcon color={color} opacity={opacity} {...rest}>
        {/* 只有传递了图标组件，才能显示 */}
        {IconComponent && <IconComponent height={height} width={width}/>}
        </StyledIcon>
    )
}
Icon.Social = SocialIcon
Icon.propTypes = {
  icon: PropTypes.any,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  opacity: PropTypes.number,
}

export default Icon