import styled,{css} from 'styled-components'
import theme from 'theme'
const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;


  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")};
    ${(opacity) =>(opacity? `opacity: ${opacity}`: "")};
  }
`
export default StyledIcon