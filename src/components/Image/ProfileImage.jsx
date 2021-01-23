import React from 'react'

//styles
import styled from 'styled-components'

import SIZES from '../../constants/sizes'

const ProfileImageStyled = styled.img`
  width: ${({ size }) => SIZES[size] * 40}px;
  height: ${({ size }) => SIZES[size] * 40}px;
  border-radius: 50%;
`

const ProfileImage = ({ className, style, size, ...rest }) => {
  return (
    <ProfileImageStyled
      className="profile-image"
      src="/images/author-profile.jpg"
      alt="Profile Image"
      size={size || 'medium'}
    />
  )
}

export default ProfileImage