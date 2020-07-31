import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledVideoCall, { Minimise, Action, Self, Actions, VideoCallAlert }  from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faMicrophone, faPhoneSlash, faVolumeMute, faVideo } from '@fortawesome/free-solid-svg-icons'
// 背景图片
import videoCaller from "assets/images/video-caller.jpg"
import face4 from "assets/images/face-male-4.jpg"
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'
import "styled-components/macro"
function VideoCall({
  onHangOffClicked,
    children,
  ...rest }) {
  const [fullScreen, setFullScreen] = useState(true)
  
  // 不是全屏就返回缩小框模式
  if (!fullScreen) {
    return (
      <VideoCallAlert>
        <Avatar src={face4} css={`grid-area: avatar;margin-right: 10px;`} />
        <Paragraph size="medium" css={`grid-area: info;`}>正在跟 李明浩 进行视频通话</Paragraph>
        <Paragraph type="secondary"
          css={`
          grid-area: action;
          cursor: pointer;
          `}
          onClick = {() => setFullScreen(true)}
        >
          点击切换全屏
        </Paragraph>
        <FontAwesomeIcon icon={faVideo} 
          css={`
          grid-area: icon;
          font-size: 20px;
          justify-self: end;
          opacity: 0.3;
          `}
        />
      </VideoCallAlert>
    )
  }
  return (
      <StyledVideoCall src={videoCaller}{...rest}>
        <Minimise shape="rect" onClick={() => setFullScreen(false)}>
          <FontAwesomeIcon icon={faCompressAlt} />
        </Minimise>
        <Actions>
          <Action>
            <FontAwesomeIcon icon={faMicrophone} />
          </Action>
          <Action type="hangoff">
          <FontAwesomeIcon icon={faPhoneSlash} onClick={onHangOffClicked}/>
          </Action>
          <Action>
            <FontAwesomeIcon icon={faVolumeMute} />
          </Action>
        </Actions>

        <Self src={face4} size="140px" />
        </StyledVideoCall>
    )
}
VideoCall.propTypes = {
  children:PropTypes.any,
}

export default VideoCall