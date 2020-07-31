import styled from 'styled-components'
import Paragraph from 'components/Paragraph'
import { card } from 'utils/mixins'
import StyledAvatar from 'components/Avatar/style'
// 用于显示姓名
const Name = styled(Paragraph).attrs({ size: "large" })`
  grid-area: name;
`
// 用于显示个性签名
const Intro = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: intro;
`
const StyledContactCard = styled.div`
  /* 调用cardmixin，使用圆角卡片 */
  ${card()}
  display: grid;
  grid-template-areas:
  "avatar name"
  "avatar intro";
  grid-template-columns 62px auto;

  ${StyledAvatar}{
    grid-area: avatar;
  }
`
export default StyledContactCard
export{Name, Intro}