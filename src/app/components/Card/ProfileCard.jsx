import React from 'react'

//components
import Card from './Card'

//ase

//styles
import styled from 'styled-components'

import SIZES from '../../constants/sizes'

const ProfileCardStyled = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProfileImage = styled.img`
  width: ${({ size }) => SIZES[size] * 50}px;
  height: ${({ size }) => SIZES[size] * 50}px;
  border-radius: 50%;
`

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileTitle = styled.span`
  font-size: ${({ size }) => SIZES[size] * 8}px;
`

const ProfileSubTitle = styled.span`
  font-size: ${({ size }) => SIZES[size] * 5}px;
`

const ProfileCard = ({ children, className = '', style, isLoading, ...rest }) => {
  return (
    <ProfileCardStyled
      className={`profile-card ${className}`}
      style={style}
      {...rest}
    >
      <ProfileImage
        className="profile-image"
        src="/images/author.jpg"
        alt="Profile Image"
        size={rest.size || 'medium'}
      />
      <ProfileContent>
        <ProfileTitle size={rest.size || 'medium'}>Shubham Tandale</ProfileTitle>
        <ProfileSubTitle size={rest.size || 'medium'}>Full Stack Developer</ProfileSubTitle>
      </ProfileContent>
    </ProfileCardStyled>
  )
}

export default ProfileCard