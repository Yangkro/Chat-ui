import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './style'
// 以下参数分别表示 文本类型，字号 是否加粗
function Text({ children,
  type = "primary",
  size = "normal",
  bold,
    ...rest }) {
    return (
      <StyledText type={type} size={size} bold={bold} {...rest}>
        {children}
        </StyledText>
    )
}
Text.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["xxsmall", "xsamll", "small", "normal", "medium", "large", "xlarge", "xxlarge"]),
  bold: PropTypes.bool,
}

export default Text