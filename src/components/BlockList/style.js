import styled from 'styled-components'
import StyledText from 'components/Text/style'
import Avatar from 'components/Avatar'
import Text from 'components/Text'
import Icon from 'components/Icon'
const BlockedAvatar = styled(Avatar)`
  grid-area: avatar;
`
const BlockedName = styled(Text).attrs({ size: "xlarge" })`
  grid-area: name;
  margin-top: 20px;
`
const CloseIcon = styled(Icon)`
/* 占2-5的行， 3-4的列 */
  grid-area: 2/3/5/4;
  z-index: 10;
  margin-top: 10px;
`
const CloseableAvatar = styled.div`
  display: grid;
  grid-template-areas:
  "avatar avatar avatar"
  "avatar avatar avatar"
  "avatar avatar avatar"
  "name name name";
  justify-items: center;
`
const SettingsMenu = styled.div`
  height: 148px;
  display: grid;
  /* 两列 第一列10px 第二列显示标题 */
  grid-template-columns: 10px 1fr;
  align-items: center;

  ${StyledText}{
    /* 占满整列,包括返回按钮的宽度 */
    grid-column: span 1/-1;
    justify-self: center;
  }
`
const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  justify-items:center;
`
const StyledBlockList = styled.div`
  padding: 2vh 4vw;
`
export default StyledBlockList
export {SettingsMenu,BlockedAvatar,BlockedName, CloseIcon, CloseableAvatar, FriendList}