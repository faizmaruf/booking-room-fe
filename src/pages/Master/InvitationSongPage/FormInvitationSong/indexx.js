import React, { useRef, useState, useEffect } from "react";
import MultiSelect from "react-select";
import { FileUploader } from "react-drag-drop-files";
import { fileToBase64 } from "../../../../utils/helpers/fileToBase64";
import { parseBlob } from "music-metadata-browser";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const FormInvitationSong = (props) => {
  const {
    isShowModal,
    isEdit,
    closeModal,
    formState,
    setFormState,
    handleAdd,
    handleUpdate,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const inputRefName = useRef(null);
  const inputRef = useRef(null);
  const audioRef = useRef();

  useEffect(() => {
    inputRefName.current?.focus();
  }, []);

  const options = [
    { id: "admin", name: "admin" },
    { id: "superadmin", name: "superadmin" },
    // { id: "3", name: "Vanilla" },
  ];
  // const optionss = ["dsajdsa", "idsjaidjsa"];

  const optionJadi = options.map((item) => {
    return { value: item?.name, label: item?.name };
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
      }}
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Master Lagu {!isEdit ? "Baru" : "Edit"}</h5>
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
                <label class="form-label">Lagu / Musik</label>
                <div class="mb-3 w-100 ">
                  <div className="card  d-flex justify-content-center align-content-center w-100">
                    <DragDropFile
                      setFormState={setFormState}
                      formState={formState}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                {/* Tampilkan audio player jika file tersedia */}
                {formState?.songUrl && (
                  <div className="container mt-5 mb-5 d-flex justify-content-center">
                    <div
                      className="card p-4 shadow-lg border-0 bg-white"
                      style={{ maxWidth: "600px", width: "100%" }}
                    >
                      <div className="text-center mb-3">
                        <i className="bi bi-music-note-beamed fs-1 text-primary"></i>
                        <h5 className="mt-2 fw-bold">Now Playing</h5>
                      </div>
                      <audio
                        ref={audioRef}
                        src={formState.songUrl}
                        controls
                        className="form-control"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div class="col-lg-12">
                <label class="form-label">Judul</label>
                <div class="mb-3 input-icon">
                  <span class="input-icon-addon">
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-music"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M9 17v-13h10v13" />
                      <path d="M9 8h10" />
                    </svg>
                  </span>
                  <input
                    ref={inputRefName}
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="judul lagu"
                    value={formState?.title || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <label class="form-label">Artis</label>
                <div class="mb-3 input-icon">
                  <span class="input-icon-addon">
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
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    </svg>
                  </span>
                  <input
                    ref={inputRefName}
                    type="text"
                    className="form-control"
                    name="artist"
                    placeholder="Artis"
                    value={formState?.artist || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        artist: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <label class="form-label">Album</label>
                <div class="mb-3 input-icon">
                  <span class="input-icon-addon">
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-disc"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M7 12a5 5 0 0 1 5 -5" />
                      <path d="M12 17a5 5 0 0 0 5 -5" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="album"
                    placeholder="album"
                    value={formState?.album || ""}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        album: e.target.value,
                      }))
                    }
                  />
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
const DragDropFile = ({ setFormState, formState }) => {
  const fileTypes = ["MP3"];
  const [isHovering, setIsHovering] = useState(false);
  function uint8ArrayToBase64(uint8Array) {
    let binary = "";
    for (let i = 0; i < uint8Array.length; i++) {
      binary += String.fromCharCode(uint8Array[i]);
    }
    return window.btoa(binary);
  }

  const handleFileChange = async (file) => {
    if (!file) return;

    const songUrl = URL.createObjectURL(file);

    try {
      const metadata = await parseBlob(file);
      const picture = metadata?.common?.picture?.[0];

      let imageBase64 = "/default-cover.png";
      if (picture) {
        const base64String = uint8ArrayToBase64(picture.data);
        imageBase64 = `data:${picture.format};base64,${base64String}`;
      }

      setFormState({
        ...formState,
        image: imageBase64,
        songUrl,
        name: file.name,
        title: metadata?.common?.title || file.name,
        artist: metadata?.common?.artist || "Unknown Artist",
      });
    } catch (error) {
      console.error("Gagal membaca metadata:", error);
      const base64 = await fileToBase64(file);
      setFormState({
        ...formState,
        image: base64,
        songUrl,
        name: file.name,
        title: file.name,
        artist: "Unknown",
      });
    }
  };

  return (
    <FileUploader
      multiple={false}
      handleChange={handleFileChange}
      name="file"
      types={fileTypes}
      dropMessageStyle={{ margin: "0 0.5rem" }}
      style={{ position: "relative" }}
    >
      <div
        className="d-flex align-items-center justify-content-center w-100 position-relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <label
          htmlFor="dropzone-file"
          className="d-flex flex-column align-items-center justify-content-center w-100 rounded cursor-pointer bg-light"
          style={{ height: "8rem" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center pt-3 pb-3">
            {!formState?.songUrl && (
              <>
                <p className="mb-2 text-muted small">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="me-2"
                  >
                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M9 17v-13h10v13" />
                    <path d="M9 8h10" />
                  </svg>
                  <strong>Click untuk upload</strong> atau drag and drop
                </p>
                <p className="text-muted small">MP3 (MAX. 3 Mb)</p>
              </>
            )}
          </div>
        </label>

        {isHovering && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center cursor-pointer"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              transition: "all 0.3s ease-in-out",
              zIndex: 10,
              borderRadius: "0.1rem",
              color: "#fff",
            }}
          >
            <svg
              width="32"
              height="32"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
              className="text-white"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
          </div>
        )}
      </div>

      {formState?.songUrl && (
        <div
          className="d-flex align-items-center justify-content-center w-100 position-relative border border-primary rounded"
          style={{ height: "8rem" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={formState.image}
            alt="song"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="rounded position-absolute"
          />
          <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M9 17v-13h10v13" />
              <path d="M9 8h10" />
            </svg>
            <p className="text-white text-center my-1 fw-bold">
              Now Playing: {formState.name}
            </p>
          </div>
        </div>
      )}
    </FileUploader>
  );
};

export default FormInvitationSong;
