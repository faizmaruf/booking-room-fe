import React, { useRef, useState, useEffect } from "react";

const FormServicePicker = (props) => {
  const {
    isShowModal,
    isEdit,
    closeModal,
    formState,
    setFormState,
    handleAdd,
    handleUpdate,
    fetchInvitationServices,
    invitationServices,
    isLoadingService,
    handleCheckboxChange,
    handleCheckAll,
  } = props;
  useEffect(() => {
    fetchInvitationServices();
  }, []);

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
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Layanan Paket{" "}
              <span className="badge badge-lg bg-success-lt">
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
            <div class="row">
              <div class="table-responsive">
                <table class="table table-selectable card-table table-vcenter text-nowrap datatable">
                  <thead>
                    <tr>
                      <th class="w-1">
                        <input
                          class="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select all services"
                          onChange={handleCheckAll}
                        />
                      </th>
                      <th className="w-1">No</th>
                      <th>Nama Layanan</th>
                      <th>Detail</th>

                      <th></th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody className="table-tbody">
                    {isLoadingService
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
                                aria-label="Select service"
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
                      : invitationServices?.map((item, index) => {
                          const isChecked = formState?.services?.find(
                            (service) => service?.id === item?.id
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
                              <td>
                                <input
                                  className="form-check-input m-0 align-middle table-selectable-check"
                                  type="checkbox"
                                  aria-label="Select service"
                                  onChange={(e) =>
                                    handleCheckboxChange(e, item?.id, item)
                                  }
                                  checked={!!isChecked}
                                />
                              </td>
                              <td className="sort-name py-3">{index + 1}.</td>
                              <td>{item?.name}</td>
                              <td>{item?.detail}</td>
                              <td>
                                <div className="placeholder placeholder-lg w-75"></div>
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

export default FormServicePicker;
