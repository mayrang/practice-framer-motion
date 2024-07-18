import React, { useRef } from "react";

import "./App.css";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const Circle = styled(motion.div)`
//   background-color: white;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

//   height: 70px;
//   width: 70px;
//   border-radius: 35px;
//   place-self: center;
// `;

// const boxVarients = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       delayChildren: 0.5,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const circleVarients = {
//   start: {
//     opacity: 0,
//   },
//   end: {
//     opacity: 1,
//   },
// };

const boxVarients = {
  hover: {
    scale: 1,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "100px",
  },
  start: {
    scale: 1,
  },
};

// type spring
// damping 저항력(반동력)
// mass 질량(높으면 좀 무겁게 움직임)
// stiffness 경직성
// bounce 팅기는 정도 위에게 있으면 이거 덮여짐

// varients object를 분리하고 initial하고 animate에 property 넣기
// 부모의 property가 자식의 property에 자동으로 넣어짐
//  delayChildren: 자식의 delay
// staggerChildren: 자식의 delay를 순서대로 적용

// whileHover: hover하는 동안
// whileTap: 클릭하고 있는 동안
// backgroundColor 애니메이션을 넣을때는 rgba같은 숫자 포맷을 넣어야 애니메이션 적용됨
// drag 의 x y 값을 넣으면 그 방향으로만 드래깅 가능
// dragConstraints 드래깅 제약 top, bottom, left, right 값 밖으로 벗어나면
// 다시 돌아옴
// 제한하고 싶은 영역의 html ref를 넣어줘도 됨
// dragSnapToOrigin 드래그가 끝나면 원래 자리로 돌아오게 하는 옵션
// dragElastic 0~1 당기는 힘의 개념 1로 갈수로 제약 place로의 당기는 힘이 줄어들음

// motionValue 렌더링 사이클에 영향을 끼치는게 아님(state로 관리되는게 아님)
// 추적하려면seMotionValueEvent
// get set도 있음
// useTransform : 첫번째 인자 변하는 값 두번째 인자 array 첫번째 인자가 각각 어느값일때 인지 넣기, 세번째 출력 array
// 두번째 인자의 array값들일때 어떤 출력을 할지
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragConstraints={biggerBoxRef}
          variants={boxVarients}
          whileHover="hover"
          initial="start"
          whileTap="click"
        ></Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
