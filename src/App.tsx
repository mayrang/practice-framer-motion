import { AnimatePresence, motion, useTransform } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  gap: 60px;
  position: relative;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  width: 45vw;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Button = styled(motion.button)`
  padding: 6px;
  border-radius: 2px;
  font-size: 14px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const Circle = styled(motion.div)`
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  height: 70px;
  width: 70px;
  border-radius: 35px;
  place-self: center;
`;

const boxVariants = {
  start: (index: 1 | 2 | 3 | 4) => {
    let originX = 0;
    let originY = 0;
    switch (index) {
      case 1:
        originX = 1;
        originY = 1;
        break;
      case 2:
        originX = 0;
        originY = 1;
        break;
      case 3:
        originX = 1;
        originY = 0;
        break;
      case 4:
        originX = 0;
        originY = 0;
        break;
    }
    console.log(originX, originY);
    return {
      originX,
      originY,
    };
  },
  hover: () => {
    return {
      scale: 1.15,
      transition: {
        type: "linear",
      },
    };
  },
};

const buttonVariants = {
  start: {
    color: "rgb(41, 128, 185)",
    scale: 1,
  },
  end: (isSwitch: boolean) => ({
    color: isSwitch ? "rgb(230, 126, 34)" : "rgb(41, 128, 185)",
    scale: isSwitch ? 1.2 : 1,
  }),
};

export default function App() {
  const [id, setId] = useState<string | null>(null);
  const [isSwitch, setIsSwitch] = useState(false);
  return (
    <Wrapper>
      <Grid>
        {Array(4)
          .fill(0)
          .map((_, i) => i + 1)
          .map((n) =>
            n === 2 || n === 3 ? (
              <Box
                variants={boxVariants}
                custom={n}
                initial="start"
                whileHover="hover"
                onClick={() => setId(n + "")}
                key={n}
                layoutId={n + ""}
              >
                {n === 2 ? (
                  !isSwitch ? (
                    <Circle transition={{ duration: 0.5 }} layoutId="circle" />
                  ) : null
                ) : isSwitch ? (
                  <Circle transition={{ duration: 0.5 }} layoutId="circle" />
                ) : null}
              </Box>
            ) : (
              <Box
                variants={boxVariants}
                custom={n}
                initial="start"
                whileHover="hover"
                onClick={() => setId(n + "")}
                key={n}
                layoutId={n + ""}
              />
            )
          )}
      </Grid>
      <Button
        onClick={() => setIsSwitch((prev) => !prev)}
        variants={buttonVariants}
        custom={isSwitch}
        initial="start"
        animate="end"
      >
        Switch
      </Button>
      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box style={{ height: 300, width: 400, backgroundColor: "rgba(255, 255, 255, 1)" }} layoutId={id} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
