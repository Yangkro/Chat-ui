import styled from 'styled-components'
import arrowRight from 'assets/icon/arrowRight.svg';
import Icon from 'components/Icon';
const StyledProfile = styled.div`
  /* 个人资料从上到下排列，并且居中显示 */
  display: grid;
  /* c垂直向上对齐 */
  align-content: flex-start;
  /* 水平居中对齐 */
  justify-content: center;
  /* grid子元素 水平居中对齐 */
  justify-items: center;
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  overflow-y: auto;
`
// 社交按钮的容器
const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`
// 用来布局联系信息
const ContactSection = styled.section`
  display: grid;
  /* 行间距 */
  row-gap: 18px;
`
// 相册部分的容器
const AlbumSection = styled.section`

`
// 相册标题
const AlbumTitle = styled.div`
/* 占据整个profile的宽度 */
  justify-self: stretch;
  display: flex;
  /* 水平方向上：左右分散对齐 */
  justify-content: space-between;
  /* 垂直居中对齐 */
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    &::after{
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`

// 相册
const Album = styled.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  /* 每行显示3列，平分空间 */
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

// 照片
const Photo = styled.img`
  width: 76px;
  height: 76px;
  /* 自动缩放占满容器 */
  object-fit: cover;
`

const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`
export default StyledProfile
export {SocialLinks,  ContactSection, AlbumSection, AlbumTitle, Album, Photo, CloseIcon}