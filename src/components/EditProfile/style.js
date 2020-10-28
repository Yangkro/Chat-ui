import styled from 'styled-components'
import Text from 'components/Text'
// 标题 基本信息
const GroupTitle = styled(Text).attrs({ size: "large" })`
  align-self: end;
`
// 性别地区容器
const GenderAndRegion = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: space-between;
`
// 地区容器
const SelectGrop = styled.div`
  > * {
    margin: 0 4px;
  }
  margin: 0 -4px;
`
// 社交图标输入容器
const StyledIconInput = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: end;
`
const StyledEditProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px;
  max-height: 100vh;
  overflow-y: auto;
`
export default StyledEditProfile
export {GroupTitle, GenderAndRegion, SelectGrop, StyledIconInput}