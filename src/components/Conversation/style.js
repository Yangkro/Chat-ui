import styled, { css } from 'styled-components'
import ChatBubble from 'components/ChatBubble'
const Conversations = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  /* 所有元素向上对齐 */
  align-items: flex-start;
  width: 100%;
  /* 自动显示垂直滚动条 */
  overflow-y: auto;
  flex: 1;
/* 为气泡设置外边距 */
  & > *{
    margin: 10px 0px;
  }
`
const MyChatBubble = styled(ChatBubble).attrs({ type: "mine" })`
  align-self: flex-end;
`
const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.gray4};
  
  & > *:last-child {
    align-self: end;
  }
`
export default StyledConversation
export {Conversations, MyChatBubble}