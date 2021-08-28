import React from 'react'
import styled from 'styled-components'

const GridItemWrapper = styled.div<{ gridArea: string }>`
  position: relative;
  grid-area: ${({ gridArea }) => gridArea};
`

const GridItemImage = styled.div<{ bg: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: ${p => {
    console.log(Math.random(), p)
    return 'cover'
  }};
  background-position: 50% 50%;
  background-image: ${({ bg }) => `url(${bg})`};
`

type GridItemProps = {
  backgroundImage: string
  position: string
}

const GridItem = ({ backgroundImage, position }: GridItemProps) => {
  return (
    <GridItemWrapper gridArea={position}>
      <GridItemImage bg={backgroundImage} />
    </GridItemWrapper>
  )
}

export default GridItem
