import React from "react";
import Select from "react-select";

const FormVillage = (props) => {
  const { isShowModal, closeModal } = props;
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div
      class={
        isShowModal ? "modal modal-blur fade show" : "modal modal-blur fade "
      }
      id="modal-report"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      style={{
        display: isShowModal ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Master Kelurahan Baru</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Kecamatan</label>
                  <Select
                    options={!options ? [] : options}
                    name="dpjp"
                    className="form-select p-0"
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "none",
                        "&:hover": {
                          border: "none",
                          boxShadow: "none",
                        },
                      }),
                    }}
                    placeholder="-- Pilih Kecamatan --"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Kode Kelurahan</label>
                  <input
                    type="text"
                    class="form-control"
                    name="example-text-input"
                    placeholder="kode"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Nama Kelurahan</label>
                  <input
                    type="text"
                    class="form-control"
                    name="example-text-input"
                    placeholder="Nama"
                  />
                </div>
              </div>

              <div class="col-lg-12">
                <div>
                  <label class="form-label">Informasi Tambahan</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="#"
              class="btn btn-link link-secondary btn-3"
              data-bs-dismiss="modal"
            >
              {" "}
              Cancel{" "}
            </a>
            <a
              href="#"
              class="btn btn-primary btn-5 ms-auto"
              data-bs-dismiss="modal"
            >
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
                class="icon icon-2"
              >
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
              Tambah Data
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormVillage;
