import React from "react";

const OverlayLoading = ({ isShow = false }) => {
  return (
    <div
      class={isShow ? "modal modal-blur fade show" : "modal modal-blur fade "}
      id="modal-delete"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      style={{
        display: isShow ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: "1098",
      }}
    >
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class=" w-100">
          <div class="text-center ">
            <div class="text-white mb-3 h1 ">Loading</div>
            <div class="progress progress-sm ">
              <div class="progress-bar progress-bar-indeterminate"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayLoading;
