import React, { useState, useEffect, useMemo, Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Shaders, Node, GLSL } from 'gl-react';
import { Surface } from 'gl-react-dom';
/* pages */
const About = React.lazy(() => import('./About'))
const Works = React.lazy(() => import('./Works'))
const History = React.lazy(() => import('./History'))
/* resources */
import '../assets/css/font.css'
import '../assets/css/index.css'
/* extend */
import '../lib/date.extend.ts'
/* scroll */
import { useInView } from 'react-intersection-observer';

let time = 0

// Main
const App = () => {
  const [ref, inView] = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  })

  const width = innerWidth
  const height = innerHeight

  const shaders = Shaders.create({
    liquidNoise: {
      // uniforms are variables from JS. We pipe blue uniform into blue output color
      frag: GLSL`
        // ES 2.0に移植したバージョン
        precision mediump float;
        uniform vec2 resolution;
        uniform float time;

        // 疑似乱数
        float rand(vec2 co){
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
        }

        // 遅延計算
        float getDelayTime(float base, float diff, int id) {
          return base + diff * float(id);
        }

        // 点を描画
        float drawDot(vec2 pos, vec2 co, float r) {
          float d = sqrt(pow(pos.x - co.x, 2.0) + pow(pos.y - co.y, 2.0));
          return d < r ? 1.0 : 0.0;
        }

        // 十字を描画
        float drawCross(vec2 pos, vec2 co, float size, float bold) {
          float dx = abs(pos.x - co.x);
          float dy = abs(pos.y - co.y);

          if ((dx < size && dy < bold) || (dx < bold && dy < size)) {
            return 1.0;
          } else {
            return 0.0;
          }
        }

        // 正方形を描画
        float drawSquare(vec2 pos, vec2 co, float size, bool isLine, float bold) {
          float dx = abs(pos.x - co.x);
          float dy = abs(pos.y - co.y);

          if (dx < size && dy < size) {
            if (isLine) {
              if (size - bold < dx || size - bold < dy) {
                return 1.0;
              } else {
                return 0.0;
              }
            } else {
              return 1.0;
            }
          } else {
            return 0.0;
          }
        }

        float drawSquareOut(vec2 pos, vec2 cor, float size, float bold, float theta) {
          cor.x = cor.x * cos(theta) - cor.y * sin(theta);
          cor.y = cor.x * sin(theta) + cor.y * cos(theta);
          float dx = abs(pos.x - cor.x);
          float dy = abs(pos.y - cor.y);

          float r = 0.0;
          if ((dx < size && dy < size) && (dx > size - bold || dy > size - bold)) {
            r = 0.8 * abs(dx - (size - bold / 2.0)) + abs(dy - (size - bold / 2.0));
          }

          return length(r);
        }

        bool isFitTime(float t, float u, float diff) {
          return abs(t - u) < diff;
        }

        bool bit(int n, int b) {
          return mod(floor(float(n) / exp2(floor(float(b)))), 2.0) != 0.0;
        }

        #define firstAnimeMax 20

        void main(void) {
          float vertex[20], size[20], bold[20], crossX[20], crossY[20];

          vertex[0] = 3.0;
          vertex[1] = 7.0;
          vertex[2] = 6.0;
          vertex[3] = 7.0;
          vertex[4] = 3.0;
          vertex[5] = 3.0;
          vertex[6] = 3.0;
          vertex[7] = 5.0;
          vertex[8] = 4.0;
          vertex[9] = 4.0;
          vertex[10] = 7.0;
          vertex[11] = 6.0;
          vertex[12] = 7.0;
          vertex[13] = 5.0;
          vertex[14] = 5.0;
          vertex[15] = 9.0;
          vertex[16] = 5.0;
          vertex[17] = 3.0;
          vertex[18] = 8.0;
          vertex[19] = 9.0;

          size[0] = 0.8517728284589056;
          size[1] = 0.437823408293741;
          size[2] = 0.2767909359551174;
          size[3] = 0.22989810413781597;
          size[4] = 0.5195013517701023;
          size[5] = 0.9413025031204734;
          size[6] = 1.1006632553158637;
          size[7] = 0.7219629074791296;
          size[8] = 0.3448107443309676;
          size[9] = 0.5821546464548707;
          size[10] = 0.7716910778327752;
          size[11] = 1.0419468130901572;
          size[12] = 0.7225763957386716;
          size[13] = 1.0330138177736934;
          size[14] = 0.6661509950164352;
          size[15] = 0.568596703949872;
          size[16] = 0.9853028107106818;
          size[17] = 1.136085667364842;
          size[18] = 0.8715578351696774;
          size[19] = 0.491735118269912;

          bold[0] = 0.36605860373401444;
          bold[1] = 0.21003121872298278;
          bold[2] = 0.148497159815699;
          bold[3] = 0.011828186127850962;
          bold[4] = 0.18280377581377355;
          bold[5] = 0.21262058035100256;
          bold[6] = 0.5630728010489193;
          bold[7] = 0.01681244800235683;
          bold[8] = 0.16064822407106757;
          bold[9] = 0.6406931589878424;
          bold[10] = 0.6860159856479536;
          bold[11] = 0.6371189891452668;
          bold[12] = 0.2832188237255471;
          bold[13] = 0.6446821192094964;
          bold[14] = 0.6558640317607947;
          bold[15] = 0.124457407672477;
          bold[16] = 0.2619644284911844;
          bold[17] = 0.150808068845231;
          bold[18] = 0.09314947003599028;
          bold[19] = 0.586744675628687;

          crossX[0] = -0.08610518714887139;
          crossX[1] = -0.6435422165007387;
          crossX[2] = -0.8649901672514777;
          crossX[3] = -0.9797820462883067;
          crossX[4] = -0.9013240044009305;
          crossX[5] = 0.540649841553869;
          crossX[6] = 0.5592064987908043;
          crossX[7] = 0.07871545171406025;
          crossX[8] = 0.9596001425062255;
          crossX[9] = -0.36637779896494216;
          crossX[10] = 0.9165140079517808;
          crossX[11] = -0.3799936966140196;
          crossX[12] = -0.6527110128676652;
          crossX[13] = -0.345671131338932;
          crossX[14] = 0.5399305174895224;
          crossX[15] = 0.4272623364149415;
          crossX[16] = 0.30453987917248604;
          crossX[17] = -0.894115181850625;
          crossX[18] = 0.7897113099592827;
          crossX[19] = -0.33761221513288353;

          crossY[0] = 0.48535766044698514;
          crossY[1] = 0.10288797292901997;
          crossY[2] = 0.5232517588399008;
          crossY[3] = 0.005454256548908187;
          crossY[4] = -0.854093953128571;
          crossY[5] = 0.19137431157662554;
          crossY[6] = 0.15619375666423396;
          crossY[7] = 0.7260114768765846;
          crossY[8] = 0.7371965807962368;
          crossY[9] = -0.08592785178249995;
          crossY[10] = -0.4048314323225144;
          crossY[11] = 0.4686373498497094;
          crossY[12] = 0.21007428802104489;
          crossY[13] = 0.2339634270662434;
          crossY[14] = -0.3620921757837916;
          crossY[15] = -0.26185260509534514;
          crossY[16] = 0.6348054098057472;
          crossY[17] = -0.4799540511656537;
          crossY[18] = 0.6480520378191748;
          crossY[19] = 0.03806044602562775;

          // OS 依存で中心がズレてしまうバグの対処 (要調査)
          ${
            navigator.userAgent.toLowerCase().includes('mac os') ?
            'vec2 p = (gl_FragCoord.xy * 2.0 - resolution * 2.0) / min(resolution.x, resolution.y);' :
            'vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);'
          }

          int type = 0;
          float t, u;
          t = 0.0;

          if (time >= 0.2) {
            for (int i = firstAnimeMax; i > 0; i--) {
              if (time < getDelayTime(0.0, 0.08, i)) {
                u = sin((atan(p.y, p.x) - time * 0.4) * vertex[i - 1]) * 0.01;
                t = bold[i - 1] * 0.1 / abs((size[i - 1] - 0.16) * 1.2 + u - length(p));

                for (float drawY = 0.0; drawY < 6.0; drawY++) {
                  for (float drawX = 0.0; drawX < 3.0; drawX++) {
                    t += drawCross(vec2(crossX[i] * 1.8 + drawX * 0.06, crossY[i] + drawY * 0.06), p, 0.02, 0.003);
                    t += drawSquare(vec2(-crossX[i], -crossY[i]), p, 0.05, true, 0.01);
                    t += drawSquare(vec2(-crossX[i], crossY[i]), p, 0.11, true, 0.01);

                    for (float y = 0.0; y < 4.0; y++) {
                      for (float x = 0.0; x < 6.0; x++) {
                        t += drawDot(vec2(crossX[i] * 2.2 + x * 0.08, crossY[i] * -1.4 + y * 0.08), p, 0.005);
                      }
                    }
                  }
                }

                t += rand(gl_FragCoord.xy) * 0.03;
                t *= time * 2.7;
              }
            }
          }

          if (time >= 1.8) {
              type = 1;

              if (time >= 3.76) {
                  if (time <= 5.6) {
                      u = sin((atan(p.x, p.y) + 4.0) * 8.0) * 0.01;
                      t = 0.05 / abs(0.5 + u - length(p));
                  }
              } else if (time >= 3.46) {
                  u = sin((atan(p.x, p.y) + 4.0) * 3.0) * 0.01;
                  t = 0.16 / abs(0.9 + u - length(p));
              } else {
                  u = sin((atan(p.x, p.y) + 4.0) * 16.0) * 0.01;
                  t = 0.02 / abs(0.2 + u - length(p));
              }

              float size[8];
              size[0] = 0.05;
              size[1] = 0.12;
              size[2] = 0.08;
              size[3] = 0.18;
              size[4] = 0.06;
              size[5] = 0.09;
              size[6] = 0.15;
              size[7] = 0.07;

              for (int i = 0; i < 8; i++) {
                  float timeA = abs(time - getDelayTime(3.2, 0.034, i));
                  float timeB = abs(time - getDelayTime(4.7, 0.034, i));

                  if (timeA < 0.07 || timeB < 0.07) {
                      t += drawSquare(vec2(crossX[i] * 1.4, -crossY[i] * 1.2), p, size[i], true, 0.01);
                      t += drawSquare(vec2(-crossX[i] * 2.4, crossY[i] * 1.2), p, size[i], true, 0.01);
                  }
              }

              if (time <= 6.8) {
                  float vertex = floor(7.0 * time);
                  if (mod(vertex, 2.0) == 1.0) vertex++;

                  u = abs(sin((atan(p.y, p.x) - length(p) + time * 1.8) * vertex) * 2.4) + 0.2;
                  t += 0.03 / abs(u - length(p));
              }

              for (float i = 0.0; i < 10.0; i++) {
                  t += drawSquareOut(vec2(0, 0), p, 0.1 + (i + 1.0) * 0.1, 0.05, mod(time + (i + 1.0) * 16.0, 360.0) * (0.8 * (i + 0.5) * 0.16)) * 0.5;
              }
          }

          if (time >= 5.1) {
            type = 2;

            if (time <= 7.3) {
              float color = drawSquare(vec2(0.0), p, 0.67, true, 0.2);
              bool isArea = false;

              if (color == 1.0) {
                isArea = true;
                type = 0;
                t = color;
              }

              if (time <= 6.2 && time >= 5.6) {
                color = drawSquare(vec2(0.0), p, 0.97, true, 0.2);
                if (!isArea && color == 1.0) {
                  type = 0;
                  t = color;
                }
              }
            }
          }

          vec4 color;
          if (type == 0) color = vec4(vec3(t), 1.0);
          if (type == 1) color = vec4(0.0, t * 0.6, t, 1.0);
          if (type == 2) color = vec4(0.05, 0.05 + t * 0.6, 0.05 + t, 1.0);
          gl_FragColor = color;
        }
      `
    }
  })

  const TopContents = useMemo(() => (
    <>
      {
        navigator.userAgent.toLowerCase().match(/iphone|android.+mobile/) === null ? (
          <div className={'center'} style={{ opacity: 0.2 }}>
            <Surface width={width} height={height}>
              <Node
                shader={shaders.liquidNoise}
                uniforms={{
                  resolution: [width, height],
                  time: [0.4, 0.8, 0.9, 1.2, 1.4][(Math.random() * 5) >> 0]
                }}
              />;
            </Surface>
          </div>
        ) : (
          <></>
        )
      }
      <About />
    </>
  ), [])

  return (
    <>
      <Suspense fallback={<Loading>(=^・^=)</Loading>}>
        <section>

          <div className={'custom-shape-divider-top-1626431516'}>
            <svg
              data-name={'Layer 1'}
              xmlns={'http://www.w3.org/2000/svg'}
              viewBox={'0 0 1200 120'}
              preserveAspectRatio={'none'}
            >
              <path
                d={'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'}
                opacity={0.25}
                className={'shape-fill'}
              />
              <path
                d={'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'}
                opacity={0.5}
                className={'shape-fill'}
              />
              <path
                d={'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'}
                className={'shape-fill'}
              />
            </svg>
          </div>

          {TopContents}

          <StyledDiv
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              animation: inView ? 'fade-in 1400ms' : 0,
              marginTop: '190px',
            }}
          >
            <History />
          </StyledDiv>

          <Works />

          <Credit className="credit">2020 &copy; jpnykw</Credit>

        </section>
      </Suspense>
    </>
  )
}

// styling
const Loading = styled.div`
  opacity: 0.2;
  font-size: 14px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`

const Credit = styled.div`
  width: 100%;
  margin-bottom: 20;
  text-align: center;
  margin-top: 200;
`

const StyledDiv = styled.div`
  opacity: 0;
`

ReactDOM.render(<App />, document.querySelector('#root'))

