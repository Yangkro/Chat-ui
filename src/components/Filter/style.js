import styled, { css } from 'styled-components'
import StyledText from 'components/Text/style'
// 用来包裹过滤选项下拉菜单和label
const Filters = styled.div``
// 包裹动作按钮和label
const Action = styled.div`
  justify-self: end;
  ${StyledText}{
    padding-right: 1rem;
  }
`

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`
export default StyledFilter
export {Filters, Action}