import { PanInfo, useDragControls } from "framer-motion";
import React, { useState } from "react";
import { Wrapper, Panel, PanelHeader, Line, PanelContent } from "./styles";
import "./styles.css";

export default function App() {
  const [panelTop, setPanelTop] = useState(window.innerHeight / 2);

  const onDragEnd = (_e: any, info: PanInfo) => {
    //const shouldClose = info.velocity.y >= 0;
    const shouldClose = info.offset.y >= 500 || info.velocity.y >= 50;
    if (shouldClose) {
      setPanelTop(window.innerHeight - 100);
    } else {
      setPanelTop(0);
    }
  };
  const dragControls = useDragControls();

  function startDrag(event: React.MouseEvent<Element, MouseEvent>) {
    dragControls.start(event, { snapToCursor: false });
  }

  return (
    <Wrapper>
      <Panel
        panelTop={panelTop}
        drag="y"
        dragListener={false}
        dragControls={dragControls}
        onDragEnd={onDragEnd}
        dragConstraints={{ top: 0, bottom: 0 }}
      >
        <PanelHeader onClick={startDrag}>
          <Line />
        </PanelHeader>
        <PanelContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </PanelContent>
      </Panel>
    </Wrapper>
  );
}
