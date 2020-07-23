import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar, { Title, Actions } from './style'
import face1 from "assets/images/face-male-1.jpg"
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Icon from 'components/Icon'
import { ReactComponent as Call } from 'assets/icon/call.svg';
import { ReactComponent as Camera } from 'assets/icon/camera.svg';
import { ReactComponent as Options } from 'assets/icon/options.svg';
// 此篇代码有bug，无法设置透明度
function TitleBar({
    children,
    ...rest }) {
    return (
        <StyledTitleBar{...rest}>
        <Avatar status="offline" src={face1} />
        <Title>
          <Paragraph size="large">Yangkro</Paragraph>
          <Paragraph type="secondary">
            <Text>离线</Text>
            <Text>·最后阅读：3小时前</Text>
          </Paragraph>
        </Title>
        <Actions>
          <Icon opacity={0.3} icon={Call}/>
          <Icon icon={Camera} opacity={0.3}/>
          <Icon opacity={0.3} icon={Options} />
        </Actions>
        </StyledTitleBar>
    )
}
TitleBar.propTypes = {
  children:PropTypes.any
}

export default TitleBar