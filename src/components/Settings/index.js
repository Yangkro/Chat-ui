import React from 'react'
import PropTypes from 'prop-types'
import StyledSettings, { StyledSettingsItems, SettingsItemControl, StyledSettingsGroup }  from './style'
import Paragraph from 'components/Paragraph'
import Switch from 'components/Switch'
import Icon from 'components/Icon'
import Seperator from 'components/Seperator'
import { ReactComponent as ArrowMenuRight } from 'assets/icon/arrowMenuRight.svg';
import "styled-components/macro"
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
// 具体页面
function Settings({
    children,
  ...rest }) {
    const animeProps = useSpring({
      opacity: 1,
      transform: "translate3d(0px, 0px, 0px)",
      from: { opacity: 0, transform: "translate3d(100px, 0px, 0px)"},
      config: {
        tension: 140,
      },
      delay: 300,
    })
    return (
      <StyledSettings{...rest}>
        <animated.div style={animeProps}>

        
        <SettingsGroup groupName="隐私设置" >
          <SettingsItem label="添加好友时需要验证" />
          <SettingsItem label="推荐通讯录好友" description="上传通讯录只用来匹配好友列表，本应用不会记录和发送任何信息给其他机构或单位" />
          <SettingsItem label="只能手机号找到我" />
        </SettingsGroup>
        <SettingsGroup groupName="通知设置" >
          <SettingsItem label="新消息通知" />
          <SettingsItem label="语音和视频通话提醒" />
          <SettingsItem label="显示通知详情" />
          <SettingsItem label="声音" />

          <Link to={'/settings/blocked'}
            css={`
            text-decoration: none;
            color: inherit;
            `}
          >
            <SettingsItem label="查看已静音好友列表" type="menu" />
          </Link>
          </SettingsGroup>
          </animated.div>
        </StyledSettings>
    )
}
// 分组组装后的组件
function SettingsGroup({ groupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Paragraph size="xxlarge" style={{ padding: "24px" }} >
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  )
}
// 详细的组件
export function SettingsItem({
  type = "switch",
  label,
  description,
  children,
  ...rest
}) {
  return (
    <StyledSettingsItems {...rest}>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {type === "switch" && <Switch />}
        {type === "menu" && <Icon icon={ArrowMenuRight} css={`:hover{cursor: pointer}`}/>}
      </SettingsItemControl>
      {description && (
        <Paragraph type="secondary" style={{ margin: "4px 0" }}>
          {description}
        </Paragraph>
      )}
      <Seperator style={{marginTop: "8px", marginBottom: "20px"}} />
    </StyledSettingsItems>
  )
}
Settings.propTypes = {
  children:PropTypes.any,
}

export default Settings