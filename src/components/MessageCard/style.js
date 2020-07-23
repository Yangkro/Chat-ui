import styled, { css } from 'styled-components'
import Badge from 'components/Badge'
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';
import { card, activeBar } from 'utils/mixins';
import StyledAvatar from 'components/Avatar/style';
// 可以直接使用Test的样式，并通过attrs来传递参数
const Name = styled(Text).attrs({ size: "large" })`
  grid-area: name;
`
const Time = styled(Text).attrs({ size: "medium", type: "secondary" })`
  grid-area: time;
  justify-self: end;
`
const Status = styled(Text).attrs({ type: "secondary" })`
  grid-area: status;
`
const Message = styled.div`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;
  /* 如果是已回复的状态新加一列 */
  ${({ replied }) =>
  replied && css`
    grid-template-columns: 24px 1fr 30px;
    `
  }
`
const MessageText = styled(Paragraph).attrs({ ellipsis: true })`

`
const UnreadBadge = styled(Badge)`
  justify-self: end;
`
const StyledMessageCard = styled.div`
  ${card()};
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  background: ${({ theme }) => theme.background};
  transition: 0.4s;
  :hover{
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }

  ${StyledAvatar}{
    grid-area: avatar;
  }
/* 激活（选中）状态是改变样式 */
  ${({ active }) => active && css`
    background-color: ${({theme}) => theme.darkPurple};
    ${Name}, ${Status}, ${Time}, ${MessageText}{
      color: white;
    }
    ${Status}, ${Time} {
      opacity: 0.4;
    }
    ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}
    ${'' /* 超出部分进行隐藏 */}
    overflow: hidden;
  `}
`
export default StyledMessageCard
export {Name, Time, Status, Message, MessageText, UnreadBadge}