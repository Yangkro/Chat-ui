import React from 'react'
import PropTypes from 'prop-types'
import face1 from 'assets/images/face-male-1.jpg'
import StyledAvatar, { AvatarClip, StatusIcon, AvatarImage } from './style'
// 因为不同的图片的路径，大小，在线状态，在线状态图像尺寸不同，所以对头像Avatar设置几个参数
// 当status的值为false，即不显示在线状态图标，为true时，需要将状态和大小传递给状态图标
function Avatar({
    src,
    size = '48px',
    status,
    statusIconSize = '8px',
    ...rest }) {
    return (
        <StyledAvatar{...rest}>
            {status && (
                <StatusIcon status={status} size={statusIconSize}>
                </StatusIcon>
            )}
            <AvatarClip size={size}>
               <AvatarImage src = {src} alt = ""/>
           </AvatarClip>
        </StyledAvatar>
    )
}
// proTypes定义组件规范
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['online', 'offline']),
    statusIconSize: PropTypes.string.isRequired
}

export default Avatar

