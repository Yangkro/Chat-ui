import styled, { css } from 'styled-components'
// circle 定义选中和未选中
const Circle = styled.span`
  line-height: 16px;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;

  ::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;

    /* 默认为未选中 将透明度变为全透明，并添加选中后有逐渐变大的效果*/
    opacity: 0;
    transform: scale(0);
    transition: 0.2s ease;
  }
`
// 单选按钮
const RadioButton = styled.input.attrs({ type: "radio" })`
  /* 将其隐藏，使用自定义的样式 */
  width: 0px;
  height: 0px;
  opacity: 0;

  /* 当被选中时，让它的邻居circle选中 */
  :checked + ${Circle}::after {
    opacity: 1;
    transform: scale(1);
  }
  /* 没有选中时 */
  :not(:checked) + ${Circle}::after {
    opacity: 0;
    transform: scale(0);
  }
`
// 单选按钮组容器
const StyledRadioGroup = styled.div`
  display: flex;
  /* 除了第一个单选按钮外其他的都添加左边距 */
  & > *:not(:first-child){
    margin-left: 24px;
  }
`
const StyledRadio = styled.label`
  position: relative;
  padding-left: 22px;
  cursor: pointer;
  display: inline-block;
  line-height: 16px;
  font-size: ${({theme}) => theme.normal};
`
export default StyledRadio
export {Circle, RadioButton, StyledRadioGroup}