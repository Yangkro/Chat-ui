import styled from 'styled-components'
import Button from 'components/Button'
import Avatar from 'components/Avatar'
import { card } from 'utils/mixins'
// 底部按钮容器
const Actions = styled.div`
/* 设置2/1/2/3 第二行到第三行 第一列到第三列 */
  grid-area: actions / title;
  align-self: end;
  justify-self: center;

  display: grid;
  grid-template-columns: 90px 90px 90px;
`
// 展示按钮
const Action = styled(Button).attrs({ size: "64px" })`
  font-size:32px;
  color: white;
  box-shadow: none;
  background: ${({ theme, type }) => (
  type === "hangoff" ? theme.red2 : theme.grayDark2
  )};
`
// 用于展示己方视频
const Self = styled(Avatar)`
  grid-area: self; 
  align-self: end;
  justify-self: end; 
`
// 最小化按钮
const Minimise = styled(Button)`
  grid-area: title; 
  justify-self: end;
  background-color: ${({ theme }) => theme.gray3};
  padding: 0;
  width: 62px;
  height: 62px;
  font-size: 46px;
  opacity: 0.5
`
const StyledVideoCall = styled.div`
  height: 100%;
  padding: 20px;
  padding-bottom: 40px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-areas: 
  "title title"
  "actions self";
`
const VideoCallAlert = styled.div`
  display: grid;
  grid-template-areas:
  "avatar info info"
  "avatar action icon";
  row-gap: 5px;
  align-content: center;
  width: max-content;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${({ theme }) => theme.gray4};
  z-index: 200;
  ${card()}
`
export default StyledVideoCall
export{Actions, Action, Self, Minimise, VideoCallAlert}