import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const CustomTost = ({ closeToast }) => {
  return (
    <div>
      <h2>Something went wrong!!</h2>
      <button onClick={closeToast}>Close</button>
    </div>
  );
};
const notify = () => {
  toast("Basic Notification", { position: toast.POSITION.TOP_LEFT });
  toast.success("Basic Notification", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 8000,
  });
  toast.info("Basic Notification", { position: toast.POSITION.TOP_RIGHT });
  toast.warning(<CustomTost />, { position: toast.POSITION.BOTTOM_LEFT });
  toast.error("Basic Notification", {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: false,
  });
  toast("Basic Notification", { position: toast.POSITION.BOTTOM_RIGHT });
};
function Toast() {
  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default Toast;
