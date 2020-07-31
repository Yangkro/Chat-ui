import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Name ,Intro}  from './style'
import Avatar from 'components/Avatar'
import face4 from "assets/images/face-male-4.jpg"
function ContactCard({
  contact,
    children,
    ...rest }) {
    return (
        <StyledContactCard{...rest}>
        <Avatar src={contact.avatar} status={contact.status} />
        <Name>{contact.name}</Name>
        <Intro>{contact.intro}</Intro>
        </StyledContactCard>
    )
}
ContactCard.propTypes = {
  children:PropTypes.any,
}

export default ContactCard