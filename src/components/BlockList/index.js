import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockList, {SettingsMenu, CloseableAvatar, BlockedAvatar, BlockedName, CloseIcon, FriendList}  from './style'
import Icon from 'components/Icon'
import Text from 'components/Text'
import { ReactComponent as ArrowMenuLeft } from 'assets/icon/arrowMenuLeft.svg';
import {ReactComponent as closeCircle} from 'assets/icon/closeCircle.svg'
import "styled-components/macro"
import face1 from "assets/images/face-male-1.jpg"
import face2 from "assets/images/face-male-2.jpg"
import face3 from "assets/images/face-male-3.jpg"
import face4 from "assets/images/face-male-4.jpg"
function BlockList({
    children,
    ...rest }) {
    return (
        <StyledBlockList{...rest}>
        <SettingsMenu>
          <Icon
            icon={ArrowMenuLeft}
            css={`cursor: pointer`}
          />
          <Text size="xxlarge">已屏蔽的好友</Text>
        </SettingsMenu>
        <FriendList>
          {new Array(8).fill(0).map((_, i) => {
            return (
              <CloseableAvatar key={i}>
                <BlockedAvatar size="105px" src={face2} />
                <CloseIcon width={46} height={51} icon={closeCircle} />
                <BlockedName>李明浩</BlockedName>
              </CloseableAvatar>
            )
          })}
        </FriendList>
        </StyledBlockList>
    )
}
BlockList.propTypes = {
  children:PropTypes.any,
}

export default BlockList