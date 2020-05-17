import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const Custom = () => {
  return <span style={{ color: "yellow" }}>Custom</span>;
};
function Tooltip() {
  return (
    <div>
      <Tippy content="basic tootip">
        <button>Hover</button>
      </Tippy>
      <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
        <button>Hover</button>
      </Tippy>
      <Tippy content={<Custom />}>
        <button>Hover</button>
      </Tippy>
    </div>
  );
}

export default Tooltip;
