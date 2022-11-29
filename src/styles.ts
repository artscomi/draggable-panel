import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { violet } from "./variables";

export const Wrapper = styled.div({
  background:
    "url(https://picsum.photos/id/1/1920/1080) no-repeat center center",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
  overflow: "auto"
});

export const PanelHeader = styled(motion.div)({
  width: "100%",
  height: 100,
  background: "white",
  borderRadius: "16px 16px 0px 0px",
  userSelect: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const Line = styled.div({
  background: violet,
  width: 80,
  height: 6,
  overflow: "visible",
  borderRadius: 3
});

export const Panel = styled(motion.div)<{ panelTop: number }>(
  ({ panelTop }) => ({
    top: panelTop,
    background: "white",
    position: "relative",
    width: "100%",
    minHeight: "100%",
    bottom: 0,
    transition: "top .5s ease",
    borderRadius: "16px 16px 0px 0px",
    display: "flex",
    flexDirection: "column"
  })
);

export const PanelContent = styled.div({
  padding: "0 40px 40px 40px",
  fontSize: 20,
  lineHeight: 1.5,
  height: "100%",
  userSelect: "none",
  flex: 1,
  overflow: "auto"
});
