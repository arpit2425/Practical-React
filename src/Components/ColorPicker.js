import React, { useState } from "react";
import { ChromePicker } from "react-color";
function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(true);
  return (
    <div>
      <button onClick={() => setShowColorPicker((picker) => !picker)}>
        {showColorPicker ? "Close" : "open"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}

      <h2>Updated Color is {color}</h2>
    </div>
  );
}

export default ColorPicker;
