import React from 'react';
import anime from 'animejs';
import styled from 'styled-components';

interface Props {
  text: string,
  delay: number,
  cooltime: number,
}

const Text: React.FC<Props> = (props) => {
  return (
    <>
      {props.text.split('').map((text, id) => {
        return (
          <StyledSpan
            ref={ref => {
              const delay = props.delay + props.cooltime * id;

              anime({
                targets: ref,
                opacity: 1,
                delay
              })
            }}
          >
            {text}
           </StyledSpan>
        )
      })}
    </>
  )
};

const StyledSpan = styled.span`
  opacity: 0;
`;

export default Text;
