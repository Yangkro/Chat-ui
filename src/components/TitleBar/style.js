import styled from 'styled-components'
import { animated } from 'react-spring'
// 昵称和在线状态
const Title = styled.div`
  display: grid;
`
// 操作按钮
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover{
    cursor: pointer;
  }
`

const StyledTitleBar = styled(animated.div)`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({theme}) => theme.gray4};
`
export default StyledTitleBar
export {Title, Actions}