import React from 'react'
import PropTypes from 'prop-types'
import StyledParagraph from './style'
// ellipsis 表示超长段落是否显示省略号 可以使用as将其渲染为p标签
function Paragraph({
  children,
  ellipsis,
    ...rest }) {
    return (
      <StyledParagraph ellipsis={ellipsis} as = "p" {...rest}>
        {children}
        </StyledParagraph>
    )
}
Paragraph.propTypes = {
  children: PropTypes.any,
  ellipsis: PropTypes.bool,
  // 以下同Test的类型检查
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["xxsmall", "xsamll", "small", "normal", "medium", "large", "xlarge", "xxlarge"]),
  bold: PropTypes.bool,
}

export default Paragraph