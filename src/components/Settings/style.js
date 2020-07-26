import styled from 'styled-components'
// 整体的容器
const StyledSettingsItems = styled.div``

// 用来布局label和开关
const SettingsItemControl = styled.div`
  display: flex;
  justify-content: space-between;
`
// 设置组
const StyledSettingsGroup = styled.div`

`
const StyledSettings = styled.div`
  padding: 72px;
`
export default StyledSettings
export {StyledSettingsItems, SettingsItemControl, StyledSettingsGroup}