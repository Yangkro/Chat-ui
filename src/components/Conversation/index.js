import React from 'react'
import PropTypes from 'prop-types'
import StyledConversation, {Conversations, MyChatBubble} from './style'
import TitleBar from 'components/TitleBar'
import VoiceMessage from 'components/VoiceMessage'
import Footer from 'components/Footer'
import ChatBubble from 'components/ChatBubble'
import Emoji from 'components/Emoji'
/* eslint-disable jsx-a11y/accessible-emoji */
// 会话窗口的组装
function Conversation({
    children,
    ...rest }) {
    return (
      <StyledConversation{...rest}>
        <TitleBar />
        <Conversations>
          <ChatBubble time="昨天 下午14:27">Hi，在弄啥哩</ChatBubble>
          <MyChatBubble time="昨天 下午14:30">Hello，我在三亚看雪景呢</MyChatBubble>
          <ChatBubble time="昨天 下午14:40">
            <VoiceMessage time="0:42"></VoiceMessage>
          </ChatBubble>
          <MyChatBubble time="昨天 下午14:45">这么巧？你在三亚堆雪人呢？？<Emoji label="smileWithTears">🤣🤣</Emoji></MyChatBubble>
          <ChatBubble time="昨天 下午14:47">
            <VoiceMessage time="0:20"></VoiceMessage>
          </ChatBubble>
          <MyChatBubble time="昨天 下午14:45">行，等咱回去了越麻将，一亿飘十亿的那种<Emoji label="oneEyeClosed">😉😉</Emoji></MyChatBubble>
        </Conversations>
        </StyledConversation>
    )
}
Conversation.propTypes = {
  children:PropTypes.any,
}

export default Conversation