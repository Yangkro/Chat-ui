import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { SocialLinks, ContactSection, AlbumSection, AlbumTitle, Album, Photo,CloseIcon } from './style'
import "styled-components/macro"
import Avatar from 'components/Avatar'
import face1 from "assets/images/face-male-1.jpg"
import Paragraph from 'components/Paragraph'
import Emoji from 'components/Emoji'
import Icon from 'components/Icon'
import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Seperator from 'components/Seperator'
import Text from 'components/Text'
import photo1 from 'assets/images/photo1.jpg';
import photo2 from 'assets/images/photo2.jpg';
import photo3 from 'assets/images/photo3.jpg';
import {ReactComponent as Cross} from 'assets/icon/cross.svg';
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable jsx-a11y/accessible-emoji*/
function Profile({
  showEditBtn,
  showCloseIcon = true,
  onEdit,
  status,
    children,
    ...rest }) {
    return (
      <StyledProfile{...rest}>
        {showCloseIcon && <CloseIcon icon={Cross} />}
        <Avatar
          css={`margin: 26px 0;
          grid-area: 1/1/3/2;
          `}
          src={face1}
          size="160px"
          status={status}
          statusIconSize="25px"
        />
        {showEditBtn && (
          <Button size="52px" onClick={onEdit}
            css={`
              grid-area: 1/1/3/2;
              align-self: end;
              margin-left: 100px;
              z-index: 10
            `}
          >
            <FontAwesomeIcon 
              css={`font-size: 24px;`}
              icon={faPen}
              />
          </Button>
        )}
        <Paragraph
          size="xlarge"
          css={`margin-bottom: 12px`}
        >
          Yangkro
        </Paragraph>
        <Paragraph
          size="medium"
          type="secondary"
          css={`margin-bottom: 18px`}
        >
          河北省 秦皇岛市
        </Paragraph>
        <Paragraph
          css={`margin-bottom: 26px`}
        >
          你怎么睡的着的！你这个年纪，你睡的着觉？有点出息没有？
          <Emoji label="fire">🔥</Emoji>
        </Paragraph>
        <SocialLinks>
        <Icon.Social
            icon={faWeibo}
            bgColor="#F06767"
            href="http://www.weibo.com"
          />
          <Icon.Social icon={faGithub} bgColor="black" />
          <Icon.Social icon={faLinkedin} bgColor="#2483C0" />
        </SocialLinks>
        <Seperator css={`margin: 30px 0`} />
        <ContactSection>
          <Description label="联系电话">+18686866868</Description>
          <Description label="电子邮箱">907661446@qq.com</Description>
          <Description label="个人网站">http://yangkro.gitee.io/blog</Description>
        </ContactSection>
        <Seperator css={`margin: 30px 0`} />
        <AlbumSection>
          <AlbumTitle>
            <Text type="secondary" >相册{31}</Text>
            <a href="">查看全部</a>
          </AlbumTitle>
          <Album>
            <Photo src={photo1} />
            <Photo src={photo2} />
            <Photo src={photo3}/>
          </Album>
        </AlbumSection>
      </StyledProfile>
    )
}
// 新建一个description组件，用来描述个人信息
function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}:</Text>
      <Text>{children}</Text>
    </Paragraph>
  )
}
Profile.propTypes = {
  children:PropTypes.any,
}

export default Profile