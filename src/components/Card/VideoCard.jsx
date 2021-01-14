import React from 'react'

//styles
import styled from 'styled-components'
const VideoCardStyled = styled.div`
  
`

const VideoCard = () => {
  return (
    <VideoCardStyled>
      <video width="320" height="240" controls>
        <source src="https://onedrive.live.com/embed?cid=5072862CE7D73399&resid=5072862CE7D73399%215829&authkey=AI2ZxQyabFWfCLY" type="video" />
      </video>
      <video width="320" height="240" controls>
        <source src="https://onedrive.live.com/download?cid=5072862CE7D73399&resid=5072862CE7D73399%215829&authkey=AI2ZxQyabFWfCLY" type="video" />
      </video>
      {/* <video width="320" height="240" controls>
        <source src="https://www.youtube.com/embed/VivHua2gehw" type="video" />
      </video> */}
      {/* <iframe width="320" height="240" src="https://www.youtube.com/embed/VivHua2gehw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {/* <iframe src="https://onedrive.live.com/embed?cid=5072862CE7D73399&resid=5072862CE7D73399%215829&authkey=AI2ZxQyabFWfCLY" width="320" height="240" frameborder="0" scrolling="no" allowfullscreen></iframe> */}
    </VideoCardStyled>
  )
}

export default VideoCard