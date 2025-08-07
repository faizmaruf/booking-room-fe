import React, { useEffect } from "react";
import Select from "react-select";

const FormDistrict = (props) => {
  const {
    isShowModal,
    isEdit,
    closeModal,
    formState,
    setFormState,
    fetchCities,
    cities,
    isLoading,
  } = props;

  const options = cities?.map((item) => {
    return {
      value: item?.id,
      label: item?.name,
    };
  });
  useEffect(() => {
    fetchCities(formState?.province_id);
  }, []);

  return (
    <div
      className="modal modal-blur fade "
      id="modal-form"
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
              Master Kecamatan {!isEdit ? "Baru" : "Edit"}
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
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Kabupaten</label>
                  <Select
                    options={!options ? [] : options}
                    name="cities"
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
                    value={options?.find(
                      (item) => item?.value === formState?.city_id
                    )}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        city_id: event?.value,
                        id: event?.value,
                      });
                    }}
                    placeholder="-- Pilih Kabupaten --"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Kode</label>
                  <input
                    type="text"
                    className="form-control"
                    name="example-text-input"
                    placeholder="kode kecamatan"
                    value={formState?.id || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        id: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    name="example-text-input"
                    placeholder="nama kecamatan"
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
              onClick={closeModal}
            >
              {" "}
              Cancel{" "}
            </a>
            {isEdit ? (
              <a
                href="#"
                class="btn bg-secondary-lt btn-5 ms-auto"
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

export default FormDistrict;
