import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

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

const Box = styled(motion.div)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  width: 50vw;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
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

export default function App() {
  const [id, setId] = useState<string | null>(null);
  return (
    <Wrapper>
      <Grid>
        {Array(4)
          .fill(0)
          .map((_, i) => i + 1)
          .map((n) => (
            <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
          ))}
      </Grid>

      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box style={{ width: 400, height: 200 }} layoutId={id} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
