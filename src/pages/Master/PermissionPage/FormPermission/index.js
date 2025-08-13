import React, { useRef, useState, useEffect } from "react";
import MultiSelect from "react-select";
import { FileUploader } from "react-drag-drop-files";
import { fileToBase64 } from "../../../../utils/helpers/fileToBase64";

const FormPermission = (props) => {
  const { isShowModal, isEdit, closeModal, formState, setFormState, handleAdd, handleUpdate, optionTypeAccess } = props;
  const [showPassword, setShowPassword] = useState(false);
  const inputRefName = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRefName.current?.focus();
  }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div
      className="modal modal-blur fade "
      id="modal-form"
      tabindex="-1"
      permission="dialog"
      aria-hidden="false"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}>
      <div class="modal-dialog modal-dialog-centered modal-lg" permission="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Master Permission {!isEdit ? "Baru" : "Edit"}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <label class="form-label">Nama Akses / Permission</label>
                <div class="mb-3 input-icon">
                  <span class="input-icon-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-table-plus">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                      <path d="M3 10h18" />
                      <path d="M10 3v18" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                    </svg>
                  </span>
                  <input
                    ref={inputRefName}
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="permission"
                    value={formState?.name || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-link link-secondary btn-3" data-bs-dismiss="modal">
              {" "}
              Cancel{" "}
            </a>
            {isEdit ? (
              <a href="#" class="btn bg-secondary-lt btn-5 ms-auto" data-bs-dismiss="modal" onClick={handleUpdate}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
                Edit Data
              </a>
            ) : (
              <a href="#" class="btn btn-primary btn-5 ms-auto" data-bs-dismiss="modal" onClick={handleAdd}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-2">
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
                Tambah Data
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPermission;
