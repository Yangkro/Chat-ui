import styled from 'styled-components'
const StyledLabelContainer = styled.label`
/* 让label和text上下排列 */
  display: flex;
  flex-direction: column;
  font-size: ${({theme}) => theme.normal};
`
export default StyledLabelContainer