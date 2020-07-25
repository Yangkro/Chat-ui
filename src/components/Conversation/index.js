import React from 'react'
import PropTypes from 'prop-types'
import StyledConversation, {Conversations, MyChatBubble} from './style'
import TitleBar from 'components/TitleBar'
import VoiceMessage from 'components/VoiceMessage'
// 会话窗口的组装
function Conversation({
    children,
    ...rest }) {
    return (
      <StyledConversation{...rest}>
        <TitleBar />
        <Conversations>
          <MyChatBubble time="昨天 下午14:24">Hi 你在忙啥呢？</MyChatBubble>
          <MyChatBubble time="昨天 下午14:26">Hello, 我在三亚看雪呢</MyChatBubble>
          <MyChatBubble time="昨天 下午14:26">
            <VoiceMessage time="昨天 下午14:30" />
          </MyChatBubble>
          <MyChatBubble time="昨天 下午14:26">
            这么巧？你竟然在三亚堆雪人？？"\u2714"
            <VoiceMessage time="昨天 下午14:30" />
          </MyChatBubble>
        </Conversations>
        </StyledConversation>
    )
}
Conversation.propTypes = {
  children:PropTypes.any,
}

export default Conversation