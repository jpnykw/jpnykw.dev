import React from 'react'
// import styled from 'styled-components'
import anime from 'animejs'

interface Props {
  text: string
  delay: number
  cooltime: number
  fontSize?: number
}

const Text: React.FC<Props> = (props) => {
  const fontSize = props.fontSize === undefined ? 30 : props.fontSize

  return (
    <>
      {props.text.split('').map((text, id) => (
        <span
          key={id}

          ref={(ref) => {
            const delay = props.delay + props.cooltime * id

            anime({
              targets: ref,
              opacity: text === ' ' ? 0 : 1,
              delay,
            })
          }}

          style={{
            fontSize: `${fontSize}px`,
            opacity: 0,
          }}
        >
          {text === ' ' ? '-' : text}
        </span>
      )
      )}
    </>
  );
}


export default Text

