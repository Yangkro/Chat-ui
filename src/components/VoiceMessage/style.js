import styled, { css } from 'styled-components'
import StyledButton from 'components/Button/style'
import StyledIcon from 'components/Icon/style';
import StyledText from 'components/Text/style';
// 定义type变体
const typeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;
      ${'' /* 设置播放按钮图标为蓝色 */}
      ${StyledIcon} path {
      fill: ${({theme}) => theme.primaryColor};
    }
    }
    & > ${StyledIcon} path {
      fill: white;
    }
    ${'' /* 设置文字颜色为白色 */}
    & > ${StyledText} {
      color: white;
    }
  `
}
const StyledVoiceMessage = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child{
    /* 禁止缩放 */
    flex-shrink: 0;
  }

  & > *:not(:first-child) {
    /* 其他组件距离左边16px */
    margin-left: 16px;
  }
  ${({type}) => type && typeVariants[type]};
`
export default StyledVoiceMessage