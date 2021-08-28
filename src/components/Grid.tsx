import React, { ReactNode } from 'react'
import styled from 'styled-components'
import GridItem from './GridItem'

const GridWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  display: grid;
  grid-template-columns: repeat(50, 2%);
  grid-template-rows: repeat(50, 2%);
`
type GridItemImage = {
  backgroundImage: string
  position: string
  id: string
}
type GridProps = {
  items: Array<GridItemImage>
}
const Grid = ({ items }: GridProps) => {
  return (
    <>
      <GridWrapper className={`Grid`}>
        {items.map(({ backgroundImage, position, id }) => (
          <GridItem
            backgroundImage={backgroundImage}
            position={position}
            key={id}
          />
        ))}
      </GridWrapper>
    </>
  )
}

export default Grid
