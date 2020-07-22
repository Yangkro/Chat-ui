import styled,{css} from 'styled-components'
import theme from 'theme'
import StyledText  from 'components/Text/style';
// 可以用以下方法直接使用Test的样式
const StyledParagraph = styled(StyledText)`
  ${({ ellipsis }) => ellipsis &&
  css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `
  }
`
export default StyledParagraph