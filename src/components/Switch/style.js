import styled from 'styled-components'
// 滑动按钮
const Slider = styled.span`
  /* 滑动槽 */
  position: absolute;
  /* 占满整个容器 */
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.gray4};
  border-radius: 16px;
  transition: 0.4s;

  ::before{
    content: "";
    display: block;
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05),0px 2px 2px rgba(0, 0, 0, 0.1),0px 3px 1px rgba(0, 0, 0, 0.05);
    top: 1px;
    left: 1px;
    background-color: white;
    transition: 0.4s;
    cursor: pointer;
  }
`
//实际控制开关的组件
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  opacity: 0;
  :checked + ${Slider} {
    background-color: ${({ theme }) => theme.primaryColor};
    ::before {
      transform: translateX(20px);
    }
  }
`

const StyledSwitch = styled.label`
  width: 51px;
  height: 31px;
  position: relative;
  display: inline-block;
`
export default StyledSwitch
export {Slider, Checkbox}