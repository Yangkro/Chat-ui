import styled,{css} from 'styled-components'
import theme from 'theme'
import Paragraph from 'components/Paragraph'
import Icon from 'components/Icon'
import Text from 'components/Text'
// 发送时间
const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`

`
// 小尾巴图标
const BubbleTip = styled(Icon)`

`
const Bubble = styled.div`

`
// 发送的消息
const MessageText = styled(Text)`

`
const StyledChatBubble = styled.div``
export default StyledChatBubble
export {Time, Bubble, BubbleTip, MessageText}