import React from "react";

const ModalDelete = (props) => {
  const {
    labelModal = "",
    isShowModal = false,
    closeModal = () => {},
    handleDelete = () => {},
  } = props;

  return (
    <div
      class={
        isShowModal ? "modal modal-blur fade show" : "modal modal-blur fade "
      }
      id="modal-delete"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      style={{
        display: isShowModal ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="modal-status bg-danger"></div>
          <div class="modal-body text-center py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon mb-2 text-danger icon-lg"
            >
              <path d="M12 9v4" />
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
              <path d="M12 16h.01" />
            </svg>
            <h3>Apakah anda yakin?</h3>
            <div class="text-secondary">Menghapus data {labelModal} </div>
          </div>
          <div class="modal-footer">
            <div class="w-100">
              <div class="row">
                <div class="col">
                  <a
                    class="btn btn-3 w-100"
                    data-bs-dismiss="modal"
                    onClick={closeModal}
                  >
                    {" "}
                    Cancel{" "}
                  </a>
                </div>
                <div
                  class="col"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                  <a class="btn btn-danger btn-4 w-100" data-bs-dismiss="modal">
                    {" "}
                    Hapus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
