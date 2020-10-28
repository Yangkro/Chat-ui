import React from 'react'
import PropTypes from 'prop-types'
import StyledBadge, {Count} from './style'
// 设置参数，children表示子组件，show是否显示， count表示未读数 showZero表示未读数为0时是否会显示徽章,varient表示组件的变体
function Badge({
  children,
  show = false,
  count = 0,
  showZreo = false,
  ...rest })
{
    return (
      <StyledBadge
        variant={children ? "dot" : "default"}
        show={show}
        count={count}
        showZreo={showZreo}
        {...rest}
      >
        {/* 有则显示children 没有就显示未读消息的数量 */}
        {children || <Count>{count}</Count>}
        </StyledBadge>
    )
}
Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool
}

export default Badge