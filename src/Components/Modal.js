import React, { useState } from "react";
import Model from "react-modal";
function Modal() {
  const [openModal, setopenModal] = useState(false);
  return (
    <div>
      <button onClick={() => setopenModal(true)}>Open</button>
      <Model isOpen={openModal} onRequestClose={() => setopenModal(false)}>
        <h2>Title</h2>
        <p>Paragraph</p>
        <button onClick={() => setopenModal(false)}>Close</button>
      </Model>
    </div>
  );
}

export default Modal;
