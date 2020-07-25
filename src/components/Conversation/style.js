import styled, { css } from 'styled-components'
import ChatBubble from 'components/ChatBubble'
const Conversations = styled.div``
const MyChatBubble = styled(ChatBubble).attrs({type: "mine"})
const StyledConversation = styled.div``
export default StyledConversation
export {Conversations, MyChatBubble}