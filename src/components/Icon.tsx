import React from 'react'
import styled from 'styled-components'

interface Props {
  svg: any,
  name: string,
  color: string,
  size: number,
}

const Icon: React.FC<Props> = (props) => {
  return (
    <>
      <svg className={`icon icon-${props.name}`} fill={props.color} width={props.size} height={props.size}>
        <use xlinkHref={`${props.svg}#icon-${props.name}`} />
      </svg>
    </>
  )
}

export default Icon

