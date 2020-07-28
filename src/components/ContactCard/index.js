import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Name ,Intro}  from './style'
import Avatar from 'components/Avatar'
import face4 from "assets/images/face-male-4.jpg"
function ContactCard({
    children,
    ...rest }) {
    return (
        <StyledContactCard{...rest}>
        <Avatar src={face4} status="online" />
        <Name>李浩</Name>
        <Intro>每一个不曾起舞的日子都是对生命的一种辜负</Intro>
        </StyledContactCard>
    )
}
ContactCard.propTypes = {
  children:PropTypes.any,
}

export default ContactCard