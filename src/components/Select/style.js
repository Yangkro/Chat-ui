import styled,{css} from 'styled-components'
import CaretDown from 'assets/icon/caret_down.svg';
// 在Chrome和firefox下分别使用 --webkit-appearance和--moz-apppearance来隐藏默认图标，但是包含了Autoprefixer库会自动加上前缀，所以可以直接使用
const StyledSelect = styled.select`
  appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({theme}) => theme.grayDark};

  /* IE 下设置伪元素来隐藏默认图标 */
  ::-ms-expand{
    display: none
  }
`
export default StyledSelect