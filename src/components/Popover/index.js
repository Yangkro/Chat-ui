import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledPopover, { Content, Triangle, Target } from './style'
// content表示内容 offset表示内容的偏移量 x(正数向右，负数向左）和y（正数向下，负数向上）onHide和onVisible是回调函数，用于隐藏和显示时的具体操作
function Popover({
  children,
  content,
  offset = {},
  onVisible,
  onHide,
  ...rest }) {
  // 实现点击显示或者隐藏
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    if (visible) {
      setVisible(false)
      onHide && onHide()
    } else {
      setVisible(true)
      onVisible && onVisible()
    }
  }
    // console.log(visible)
    return (
      <StyledPopover onClick={handleClick} {...rest}>
        <Content offset={offset} visible={visible}>{content}</Content>
        <Triangle offset={offset} visible={visible}/>
        <Target>
              {children}
        </Target>
        </StyledPopover>
    )
}
Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
}

export default Popover