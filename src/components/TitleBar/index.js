import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar, { Title, Actions } from './style'
import face4 from "assets/images/face-female-2.jpg";
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Icon from 'components/Icon'
import { ReactComponent as Call } from 'assets/icon/call.svg';
import { ReactComponent as Camera } from 'assets/icon/camera.svg';
import { ReactComponent as Options } from 'assets/icon/options.svg';
import Dropdown from 'components/Dropdown'
import { DropdownItem } from 'components/Dropdown/style'
import Seperator from 'components/Seperator'
function TitleBar({
  animeProps,
  style,
  onAvatarClick,
  onVideoClick,
    children,
    ...rest }) {
    return (
        <StyledTitleBar{...rest} style={{...style, ...animeProps}}>
        <Avatar status="offline" src={face4} onClick={onAvatarClick} />
        <Title>
          <Paragraph size="large">郭文菲</Paragraph>
          <Paragraph type="secondary">
            <Text>离线</Text>
            <Text>·最后阅读：3小时前</Text>
          </Paragraph>
        </Title>
        <Actions>
          <Icon opacity={0.3} icon={Call}/>
          <Icon icon={Camera} opacity={0.3} onClick={onVideoClick}/>
          <Dropdown content={
            <>
              <DropdownItem>
                <Paragraph>个人资料</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropdownItem>
              <Seperator />
              <DropdownItem>
                <Paragraph type="danger">屏蔽此人</Paragraph>
              </DropdownItem>
            </>
          }>
            <Icon opacity={0.3} icon={Options} />
          </Dropdown>
          
        </Actions>
        </StyledTitleBar>
    )
}
TitleBar.propTypes = {
  children:PropTypes.any
}

export default TitleBar