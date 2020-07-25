import styled,{css} from 'styled-components'
import theme from 'theme'
import Paragraph from 'components/Paragraph'
import Icon from 'components/Icon'
import Text from 'components/Text'
// 发送时间
const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`
// 小尾巴图标
const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5;
`
const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`
// 发送的消息
const MessageText = styled(Text)`
`
// 我发送的消息，定义变体typeVariants
const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({theme}) => theme.primaryColor};
    }
    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;
    }
    ${'' /* 改变小尾巴的颜色 */}
    path {
      fill: ${({theme}) => theme.primaryColor}
    }
    ${Time}{
      text-align: right;
      margin-left: 0px;
      margin-right: 24px;
    }
    ${MessageText} {
      color: white;
    }
  `
}
const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;
  /* 改变内边距问题，也可以在story.js中编写 */
  /* padding: 24px; */

  /* 根据type加载变体 */
  ${({type}) => type && typeVariants[type]};
`
export default StyledChatBubble
export {Time, Bubble, BubbleTip, MessageText}