import React from 'react'
import PropTypes from 'prop-types'
import StyledConversation, {Conversations, MyChatBubble} from './style'
import TitleBar from 'components/TitleBar'
import VoiceMessage from 'components/VoiceMessage'
import Footer from 'components/Footer'
import ChatBubble from 'components/ChatBubble'
import Emoji from 'components/Emoji'
import { useSpring } from 'react-spring'
/* eslint-disable jsx-a11y/accessible-emoji */
// 会话窗口的组装
function Conversation({
  onAvatarClick,
  onVideoClick,
    children,
  ...rest }) {
  // 对单一titleBr组件实现动画
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, -50px, 0px)" },
    delay: 500,
  })
// 对会话部分实现动画
  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(50px, 0px, 0px)" },
    delay: 800,
  })
  // 底部的动画
  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, 50px, 0px)" },
    delay: 950,
  })
    return (
      <StyledConversation{...rest}>
        <TitleBar
          onAvatarClick={onAvatarClick}
          onVideoClick={onVideoClick}
          animeProps = {tBarAnimeProps}
        />
        <Conversations style={convsAnimeProps}>
          <ChatBubble time="昨天 下午14:27">Hi，在弄啥哩</ChatBubble>
          <MyChatBubble time="昨天 下午14:30">Hello，我在三亚看雪景呢</MyChatBubble>
          <ChatBubble time="昨天 下午14:40">
            <VoiceMessage time="0:42"></VoiceMessage>
          </ChatBubble>
          <MyChatBubble time="昨天 下午14:45">这么巧？你在三亚堆雪人呢？？<Emoji label="smileWithTears">🤣🤣</Emoji></MyChatBubble>
          <ChatBubble time="昨天 下午14:47">
            <VoiceMessage time="0:20"></VoiceMessage>
          </ChatBubble>
          <MyChatBubble time="昨天 下午14:49">
          <VoiceMessage time="0:12" type="mine"></VoiceMessage>
          </MyChatBubble>
          <ChatBubble time="昨天 下午14:50">明天我还要去上课，如果有空的话，我在和你联系吧</ChatBubble>
          <MyChatBubble time="昨天 下午14:55">行，等咱回去了越麻将，一亿飘十亿的那种<Emoji label="oneEyeClosed">😉😉</Emoji></MyChatBubble>
        </Conversations>
        <Footer animeProps={ftAnimeProps}/>
        </StyledConversation>
    )
}
Conversation.propTypes = {
  children:PropTypes.any,
}

export default Conversation