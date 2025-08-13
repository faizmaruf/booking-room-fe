import React, { useRef, useState, useEffect } from "react";
import Select from "react-select";
import { FileUploader } from "react-drag-drop-files";
import { fileToBase64 } from "../../../../utils/helpers/fileToBase64";
import { BASE_URL_STORAGE } from "../../../../helpers/config";

const FormAccount = (props) => {
  const { workUnits, roles, isShowModal, isEdit, closeModal, formState, setFormState, handleAdd, handleUpdate } = props;
  const [showPassword, setShowPassword] = useState(false);
  const inputRefName = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRefName.current?.focus();
  }, []);

  const optionsRole = roles.map((item) => {
    return { value: item?.id, label: item?.name };
  });
  const optionsWorkUnit = workUnits.map((item) => {
    return { value: item?.id, label: item?.name };
  });
  console.log(formState);

  return (
    <div
      className="modal modal-blur fade "
      id="modal-form"
      tabindex="-1"
      role="dialog"
      aria-hidden="false"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}>
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Master Akun {!isEdit ? "Baru" : "Edit"}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <label class="form-label">Nama Lengkap</label>
                <div class="mb-3 input-icon">
                  <span class="input-icon-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    </svg>
                  </span>
                  <input
                    ref={inputRefName}
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="nama lengkap"
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
              <div className="col-lg-12">
                <label className="form-label">Unit Kerja</label>
                <div className="mb-3 input-icon">
                  <span
                    className="input-icon-addon"
                    style={{
                      zIndex: 9999,
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2 ms-1">
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                      <path d="M10 6h4" />
                      <path d="M10 10h4" />
                      <path d="M10 14h4" />
                      <path d="M10 18h4" />
                    </svg>
                  </span>
                  <Select
                    options={optionsWorkUnit || []}
                    name="roles"
                    className="form-select p-0"
                    menuPortalTarget={document.body}
                    styles={{
                      control: (base) => ({
                        ...base,
                        paddingLeft: "2rem", // beri ruang untuk ikon
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "none",
                        minHeight: "38px",
                        "&:hover": {
                          border: "none",
                          boxShadow: "none",
                        },
                      }),
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "#e3f2fd", // soft light blue
                        borderRadius: "20px",
                        padding: "2px 8px",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "#1976d2", // soft blue text
                        fontWeight: "500",
                      }),
                      multiValueRemove: (base) => ({
                        ...base,
                        color: "#1976d2",
                        ":hover": {
                          backgroundColor: "#bbdefb", // hover soft blue
                          color: "#0d47a1",
                        },
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#90a4ae", // muted blue-gray
                      }),
                      menuPortal: (base) => ({
                        ...base,
                        zIndex: 99999, // kasih zIndex tinggi biar selalu di atas
                      }),
                    }}
                    value={formState?.work_unit_id ? optionsWorkUnit.find((option) => option.value === formState?.work_unit_id) : null}
                    onChange={(selectedOptions) => {
                      setFormState({
                        ...formState,
                        work_unit_id: selectedOptions?.value || "",
                        work_unit_name: selectedOptions?.label || "",
                      });
                    }}
                    placeholder="-- Pilih Unit Kerja --"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <label class="form-label">NIP/Email</label>
                <div class="mb-3 input-icon">
                  <span class="input-icon-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-at">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="NIP atau Email"
                    value={formState?.email || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: e.target.value?.slice(0, 35),
                      }))
                    }
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <label class="form-label">Password</label>
                <div class="mb-3 input-icon  input-group ">
                  <span
                    class="input-icon-addon "
                    style={{
                      zIndex: 9,
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                      <path d="M15 9h.01" />
                    </svg>
                  </span>
                  <input
                    ref={inputRef}
                    type={showPassword ? "text" : "password"}
                    className="form-control "
                    name="password"
                    placeholder="password"
                    value={formState?.password || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    style={{
                      borderRadius: "6px 0 0 6px",
                    }}
                  />
                  <span class="input-group-text">
                    <div
                      class="link-secondary cursor-pointer"
                      title="Show password"
                      data-bs-toggle="tooltip"
                      onClick={() => {
                        const input = inputRef.current;
                        const length = input.value.length;
                        setShowPassword(!showPassword);
                        if (input) {
                          setTimeout(() => {
                            input.focus();
                            input.setSelectionRange(length, length);
                          }, 0);
                        }
                      }}>
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                          <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                          <path d="M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                      )}
                    </div>
                  </span>
                </div>
              </div>
              <div class="col-lg-12">
                <label class="form-label">Nomor HP</label>
                <div class="mb-3 input-icon">
                  <span class="input-icon-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    onWheel={(e) => e.target.blur()}
                    className="form-control"
                    name="phone"
                    placeholder="Nomor HP"
                    required
                    value={formState?.phone || ""}
                    onChange={(e) => {
                      const newValue = e.target.value.slice(0, 14);

                      // Hanya izinkan angka (regex: hanya digit)
                      if (/^\d*$/.test(newValue)) {
                        // setValue(newValue);

                        setFormState((prev) => ({
                          ...prev,
                          phone: newValue,
                        }));
                      }
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <label className="form-label">Role</label>
                <div className="mb-3 input-icon">
                  <span
                    className="input-icon-addon"
                    style={{
                      zIndex: 9999,
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                  </span>
                  <Select
                    options={optionsRole || []}
                    name="roles"
                    className="form-select p-0"
                    styles={{
                      control: (base) => ({
                        ...base,
                        paddingLeft: "2rem", // beri ruang untuk ikon
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "none",
                        minHeight: "38px",
                        "&:hover": {
                          border: "none",
                          boxShadow: "none",
                        },
                      }),
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "#e3f2fd", // soft light blue
                        borderRadius: "20px",
                        padding: "2px 8px",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "#1976d2", // soft blue text
                        fontWeight: "500",
                      }),
                      multiValueRemove: (base) => ({
                        ...base,
                        color: "#1976d2",
                        ":hover": {
                          backgroundColor: "#bbdefb", // hover soft blue
                          color: "#0d47a1",
                        },
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#90a4ae", // muted blue-gray
                      }),
                    }}
                    value={formState?.role_id ? optionsRole.find((option) => option.value === formState?.role_id) : null}
                    onChange={(selectedOptions) => {
                      setFormState({
                        ...formState,
                        role_id: selectedOptions?.value || "",
                        role_name: selectedOptions?.label || "",
                      });
                    }}
                    placeholder="-- Pilih Role --"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <label class="form-label">Foto Profil</label>
                <div class="mb-3 w-100 ">
                  <div className="card  d-flex justify-content-center align-content-center w-100">
                    {/* <span className="py-5 text-center text-muted">
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
                        class="icon icon-tabler icons-tabler-outline icon-tabler-upload"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 9l5 -5l5 5" />
                        <path d="M12 4l0 12" />
                      </svg>
                      <br /> Drop foto disini
                    </span> */}
                    <DragDropFile setFormState={setFormState} formState={formState} />
                  </div>
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
const DragDropFile = (props) => {
  const { setFormState, formState } = props;
  const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

  return (
    <FileUploader
      multiple={false}
      handleChange={async (file) => {
        if (file.length !== 0) {
          const base64 = await fileToBase64(file);

          setFormState({
            ...formState,
            image_path: base64,
            imageUrl: URL.createObjectURL(file),
            file_name: file?.name,
          });
        }
      }}
      name="file"
      types={fileTypes}
      dropMessageStyle={{ margin: "0  0.5rem" }}
      style={{ position: "relative" }}>
      <div className="d-flex align-items-center justify-content-center w-100 ">
        <label htmlFor="dropzone-file" className="d-flex flex-column align-items-center justify-content-center w-100  rounded cursor-pointer bg-light" style={{ height: "16rem" }}>
          <div className="d-flex flex-column align-items-center justify-content-center pt-3 pb-3">
            <svg className="mb-3 text-secondary" width="32" height="32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-muted small">
              <strong>Click Untuk upload</strong> atau drag and drop
            </p>
            <p className="text-muted small">SVG, PNG, JPG atau GIF (MAX. 3 Mb)</p>
          </div>
        </label>
      </div>

      {formState?.image_path || formState?.image || formState?.imageUrl ? (
        <div
          className="d-flex align-items-center justify-content-center w-100 position-absolute bottom-0 z-0 border border-primary rounded transition-opacity"
          style={{
            height: "16rem",
            opacity: "1",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.5")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}>
          <img src={formState?.imageUrl || BASE_URL_STORAGE + formState?.image_path} className="rounded h-100 w-100 p-2 object-fit-contain" alt="image" />
        </div>
      ) : (
        ""
      )}
    </FileUploader>
  );
};

export default FormAccount;
