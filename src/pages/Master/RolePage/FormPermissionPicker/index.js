import React, { useRef, useState, useEffect } from "react";

const FormPermissionPicker = (props) => {
  const {
    isShowModal,
    isEdit,
    closeModal,
    formState,
    setFormState,
    handleAdd,
    handleUpdate,
    fetchPermissions,
    permissions,
    isLoadingPermission,
    handleCheckboxChange,
    handleCheckAll,
  } = props;
  useEffect(() => {
    fetchPermissions();
  }, []);
  const [items, setItems] = useState(permissions || []);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    if (permissions) {
      const filteredItems = permissions?.filter((item) => {
        const isTextMatch =
          item?.username?.toLowerCase()?.includes(filterText?.toLowerCase()) ||
          item?.name?.toLowerCase()?.includes(filterText?.toLowerCase());

        return isTextMatch;
      });
      setItems(filteredItems);
    }
  }, [permissions, filterText]);

  return (
    <div
      className="modal modal-blur fade "
      id="modal-form-picker"
      tabindex="-1"
      role="dialog"
      aria-hidden="false"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Hak Akses Untuk
              <span className="badge badge-lg bg-success-lt fw-bold">
                {formState?.name || ""}
              </span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div class="modal-body">
            {formState?.permissions?.length > 0 && (
              <div className="row px-1">
                <div class="alert alert-success alert-dismissible" role="alert">
                  <div class="alert-icon">
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-lock-access"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                      <path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                      <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
                    </svg>
                  </div>
                  {formState?.permissions?.length} hak akses / permission
                  dipilih
                </div>
              </div>
            )}

            <div class="row w-full my-2 mb-3">
              <div className="col-12 my-md-0 my-2 ">
                <div class="input-group input-group-flat w-auto">
                  <span class="input-group-text">
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
                      class="icon icon-1"
                    >
                      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                      <path d="M21 21l-6 -6" />
                    </svg>
                  </span>
                  <input
                    id="advanced-table-search"
                    type="text"
                    class="form-control"
                    autocomplete="off"
                    onChange={(e) => {
                      setFilterText(e.target.value);
                    }}
                    placeholder="Cari Permission..."
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="table-responsive">
                <table class="table table-selectable card-table table-vcenter text-nowrap datatable">
                  <thead>
                    <tr>
                      <th className="w-1">No</th>
                      <th>Nama Akses/Permission</th>
                      <th>
                        <input
                          class="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select all permissions"
                          onChange={handleCheckAll}
                        />
                      </th>
                    </tr>
                  </thead>

                  <tbody className="table-tbody">
                    {isLoadingPermission
                      ? [...Array(10)]?.map((_, index) => (
                          <tr
                            key={`loading-${index}`}
                            style={{
                              cursor: "loader",
                            }}
                          >
                            <td>
                              <input
                                class="form-check-input m-0 align-middle table-selectable-check"
                                type="checkbox"
                                aria-label="Select permission"
                              />
                            </td>
                            <td className="sort-name py-3">{index + 1}.</td>
                            {[...Array(2)].map((_, i) => (
                              <td key={i}>
                                <div className="placeholder placeholder-lg w-75"></div>
                              </td>
                            ))}
                            <td>
                              <div className="placeholder placeholder-lg w-75"></div>
                            </td>
                          </tr>
                        ))
                      : items?.map((item, index) => {
                          const isChecked = formState?.permissions?.find(
                            (permission) => permission?.id === item?.id
                          );

                          const handleRowClick = (e) => {
                            // Mencegah duplikasi klik jika klik langsung pada checkbox
                            if (e.target.type === "checkbox") return;

                            handleCheckboxChange(
                              {
                                target: { checked: !isChecked }, // toggle
                              },
                              item?.id,
                              item
                            );
                          };

                          return (
                            <tr
                              key={`loading-${index}`}
                              style={{ cursor: "pointer" }}
                              onClick={handleRowClick}
                            >
                              <td className="sort-name py-3">{index + 1}.</td>
                              <td className="fw-bold">{item?.name}</td>
                              <td>
                                {" "}
                                <input
                                  className="form-check-input m-0 align-middle table-selectable-check"
                                  type="checkbox"
                                  aria-label="Select permission"
                                  onChange={(e) =>
                                    handleCheckboxChange(e, item?.id, item)
                                  }
                                  checked={!!isChecked}
                                />
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
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
            {isEdit ? (
              <a
                href="#"
                class="btn bg-secondary-lt btn-5 ms-auto"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
                Edit Data
              </a>
            ) : (
              <a
                href="#"
                class="btn btn-primary btn-5 ms-auto"
                data-bs-dismiss="modal"
                onClick={handleAdd}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPermissionPicker;
