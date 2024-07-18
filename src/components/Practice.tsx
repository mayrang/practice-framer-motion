import React, { useRef, useState } from "react";

import "./App.css";
import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  gap: 10px;
  position: relative;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
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
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke-width: 2;
    fill: white;
    stroke: white;
  }
`;

const Circle = styled(motion.div)`
  background-color: #4e2fda;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  height: 70px;
  width: 70px;
  border-radius: 35px;
  place-self: center;
`;

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

// const boxVarients = {
//   hover: {
//     scale: 1,
//     rotateZ: 90,
//   },
//   click: {
//     scale: 1,
//     borderRadius: "100px",
//   },
//   start: {
//     scale: 1,
//   },
// };
// const svgVarients = {
//   start: {
//     pathLength: 0,
//     fillOpacity: 0,
//   },
//   end: {
//     pathLength: 1,
//     fillOpacity: 1,
//   },
// };

const boxVarients = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
  }),
};

{
  /* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */
}
{
  /* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

<motion.path
  variants={svgVarients}
  initial="start"
  animate="end"
  transition={{ default: { duration: 5 }, fillOpacity: { duration: 2, delay: 3 } }}
  d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
/>
</Svg> */
}

//const biggerBoxRef = useRef<HTMLDivElement>(null);
// const x = useMotionValue(0);
// const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
// const background = useTransform(
//   x,
//   [-800, 0, 800],
//   [
//     "linear-gradient(135deg,rgb(0, 171, 238),rgb(16, 0, 238))",
//     "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
//     "linear-gradient(135deg,rgb(20, 238, 0),rgb(214, 238, 0))",
//   ]
// );
// const { scrollYProgress } = useScroll();
// const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
// useMotionValueEvent(x, "change", (lastValue) => {
//   console.log(x.get(), lastValue);
// });

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

// useScroll 스크롤의 motionValue를 넘겨줌 scrollY 픽셀단위 scrollYProgress 0~1

// property 마다 transition을 다르게 주고 싶으면 transition property에 default(모든 요소에 적용)나 요소를 넣기

// AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있음. React에는 다음과 같은 수명 주기 메서드가 없기 때문에 종료 애니메이션을 활성화
// exit 컴포넌트가 트리에서 제거될 때 실행되는 애니메이션
// AnimatePresence 항상 visible이여야함(조건에 따라 컴포넌트 트리에서 사라지거나 하면 안됨)

// slider
// box를 absolute로 줘야하는 이유
// 1. 레이아웃의 재계산
// position: relative나 기본 position 속성을 사용하면, 새 아이템이 추가되거나 기존 아이템이 제거될 때 페이지의 전체 레이아웃이 변합니다.
// 새로운 아이템이 삽입되면 다른 아이템들이 자동으로 밀리거나 이동하게 되어 레이아웃이 다시 계산됩니다.
// 이로 인해 애니메이션이 원하는 대로 부드럽게 진행되지 않고, 중간에 튀는 것처럼 보일 수 있습니다.
// 2. 애니메이션 충돌
// 애니메이션 도중 다른 요소들이 영향을 받으면 예상치 못한 위치 변화가 발생합니다.
// AnimatePresence는 요소가 DOM에서 제거될 때 애니메이션을 제공하기 위해 사용되지만, 이 때 다른 요소들의 위치가 바뀌면 애니메이션이 부드럽게 실행되지 않습니다.
// 왜 position: absolute가 필요한가?
// position: absolute를 사용하면 해당 요소는 독립적으로 위치하게 되어, 주변 요소들에 영향을 주지 않습니다.
// 각 아이템이 개별적인 레이어에 위치하게 되므로, 애니메이션 중 다른 요소들의 위치 변화가 발생하지 않습니다.
// 따라서 애니메이션이 부드럽고 자연스럽게 진행됩니다.

// 리액트는 key를 기준으로 key가 바뀌면 이전 element가 사라졌다고 판단함 그러므로 key가 바뀌면 리렌더링을 함 <- 이걸 배열을 안쓰고 슬라이더에 활용가능

// custom : varients에 값을 전달 가능
// motd="wait" 하나의 exit가 끝나야 다음 애니메이션 시작

// layout css layout이 바뀔때 자동으로 애니메이션을 넣어주는 props

// Syncing layout animations
// 모션 컴포넌트의 layout prop은 레이아웃이 변할 때마다, 자동으로 애니메이션을 적용합니다.
// https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations

// Animate between components
// AnimateSharedLayout은 동일한 layoutId prop을 가진 모션 컴포넌트들 간에 애니메이션을 적용할 수 있습니다. layoutId가 있는 새 컴포넌트가 추가되고 다른 컴포넌트가 제거되면 이전 컴포넌트에서 새 컴포넌트로 레이아웃 애니메이션을 수행합니다. 새 컴포넌트는 이전 컴포넌트의 애니메이션 값도 초기 상태로 상속합니다. 따라서 시각적으로 하나의 연속 컴포넌트로 처리됩니다.
// ex) isSelected && < motion.div layoutId="underline" />
// https://www.framer.com/docs/animate-shared-layout/#animate-between-components
// 출처 : sugar님 comment
function Practice() {
  const [clicked, setClicked] = useState(false);

  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const onClick = () => {
    setClicked((prev) => !prev);
  };
  const onNext = async () => {
    await setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const onPrev = async () => {
    await setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  return (
    <Wrapper>
      <Box>{!clicked && <Circle layoutId="circle" />}</Box>
      <Box>{clicked && <Circle layoutId="circle" />}</Box>
      <button onClick={onClick}>click</button>
    </Wrapper>
  );
}

export default Practice;
