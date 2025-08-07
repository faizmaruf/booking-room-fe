import React, { useRef, useState, useEffect } from "react";
import MultiSelect from "react-select";
import { FileUploader } from "react-drag-drop-files";
import { fileToBase64 } from "../../../../utils/helpers/fileToBase64";
import { parseBlob } from "music-metadata-browser";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
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
              <ModernAudioPlayer formState={formState} />

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
              <div class="col-lg-12">
                <label class="form-label">Tahun</label>
                <div class="mb-1 input-icon">
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                      <path d="M16 3l0 4" />
                      <path d="M8 3l0 4" />
                      <path d="M4 11l16 0" />
                      <path d="M8 15h2v2h-2z" />
                    </svg>
                  </span>
                  <input
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    className="form-control"
                    name="year"
                    value={formState?.year || ""}
                    min={1900}
                    max={new Date().getFullYear()}
                    onChange={(e) => {
                      setFormState((prev) => ({
                        ...prev,
                        year: e.target.value?.slice(0, 4),
                      }));
                    }}
                    placeholder="Tahun"
                  />
                </div>
                {formState.year > new Date().getFullYear() && (
                  <small className="text-danger fst-italic">
                    Tahun tidak boleh lebih dari {new Date().getFullYear()}
                  </small>
                )}
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
const DragDropFile = (props) => {
  const { setFormState, formState } = props;
  console.log(formState);
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

      let imageBase64 = "";
      if (picture) {
        const base64String = uint8ArrayToBase64(picture.data);
        imageBase64 = `data:${picture.format};base64,${base64String}`;
      }

      setFormState({
        ...formState,
        image: imageBase64,
        songUrl,
        song: await fileToBase64(file),
        name: file.name,
        title: metadata?.common?.title || file.name,
        artist: metadata?.common?.artist || "",
        album: metadata?.common?.album || "",
        genre: metadata?.common?.genre || "",
        year: metadata?.common?.year || "",
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
      dropMessageStyle={{ margin: "0  0.5rem" }}
      style={{ position: "relative" }}
    >
      <div
        className="d-flex align-items-center justify-content-center w-100 position-relative "
        onFocus={() => setIsHovering(true)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <label
          htmlFor="dropzone-file"
          className="d-flex flex-column align-items-center justify-content-center w-100  rounded cursor-pointer bg-light"
          style={{ height: "8rem" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center pt-3 pb-3">
            {formState?.songUrl ? (
              <></>
            ) : (
              <>
                <p className="mb-2 text-muted small">
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
                    class="icon icon-tabler icons-tabler-outline icon-tabler-music me-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M9 17v-13h10v13" />
                    <path d="M9 8h10" />
                  </svg>
                  <strong>Click Untuk upload</strong> atau drag and drop
                </p>
                <p className="text-muted small">MP3 (MAX. 3 Mb)</p>
              </>
            )}
          </div>
        </label>
        {isHovering && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 text-white d-flex align-items-center justify-content-center cursor-pointer"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              transition: "all 0.3s ease-in-out",
              opacity: isHovering ? 1 : 0,
              zIndex: 10,
              borderRadius: "0.1rem",
              color: "#fff",
            }}
          >
            <p className="m-0 text-white fw-bold text-center d-block cursor-pointer">
              <svg
                class="mb-3 text-white"
                width="32"
                height="32"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                ></path>
              </svg>
            </p>
          </div>
        )}
      </div>

      {formState?.songUrl ? (
        <div
          className="d-flex align-items-center justify-content-center w-100 position-absolute bottom-0 z-0 border border-primary rounded transition-opacity position-relative"
          style={{
            height: "8rem",
            opacity: "1",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="d-flex flex-column align-items-center justify-content-center z-3">
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
              style={{
                color: formState?.image ? "#fff" : "#030303",
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M9 17v-13h10v13" />
              <path d="M9 8h10" />
            </svg>
            <div
              className="my-1 text-center fw-bold "
              style={{
                color: formState?.image ? "#fff" : "#030303",
              }}
            >
              <p>
                <strong>Now Playing:</strong> {formState.name}
              </p>
            </div>
          </div>

          {formState?.image ? (
            <img
              src={formState.image}
              alt="song"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded position-absolute bg-bla"
            />
          ) : (
            ""
          )}

          <div
            className="position-absolute top-0 start-0 w-100 h-100 text-white d-flex align-items-center justify-content-center cursor-pointer"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              transition: "all 0.3s ease-in-out",
              opacity: isHovering ? 1 : 0.4,
              zIndex: 10,
              borderRadius: "0.1rem",
              color: "#fff",
            }}
          >
            <p className="m-0 text-white fw-bold text-center d-block cursor-pointer">
              <svg
                class="mb-3 text-white"
                width="32"
                height="32"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                ></path>
              </svg>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </FileUploader>
  );
};
const ModernAudioPlayer = ({ formState }) => {
  const audioRef = useRef(null);

  return (
    formState?.songUrl && (
      <div
        className="d-flex justify-content-center align-items-center  mb-4"
        style={{ minHeight: "240px" }}
      >
        <div
          className="card shadow-lg border-0 bg-white p-4"
          style={{
            maxWidth: "700px",
            width: "100%",
            borderRadius: "0.8rem",
          }}
        >
          <div className="media d-flex align-items-start">
            {formState?.image ? (
              <img
                src={formState?.image}
                alt="Album Cover"
                className="me-3 rounded w-100"
                style={{
                  // width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "1rem",
                  // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            ) : (
              <div
                className="rounded w-100 d-flex justify-content-center align-items-center h-100 me-3"
                style={{ minHeight: "100px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" icon-tabler icons-tabler-outline icon-tabler-vinyl"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 3.937a9 9 0 1 0 5 8.063" />
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M20 4l-3.5 10l-2.5 2" />
                </svg>
              </div>
            )}
            <div className="media-body">
              <h5 className="mt-0 mb-1 fw-bold">
                {formState.title || "Judul Lagu"}
              </h5>
              <p style={{ fontSize: "0.95rem", color: "#6c757d" }}>
                {formState.artist || "Artis"}
              </p>
            </div>
          </div>

          {/* Audio Player */}
          <div className="mt-3">
            <AudioPlayer
              ref={audioRef}
              src={formState.songUrl}
              onPlay={() => console.log("Playing")}
              layout="horizontal"
              showSkipControls={false}
              showJumpControls={false}
              style={{
                borderRadius: "0.75rem",
                border: "none",
                boxShadow: "0 0px 0px rgba(0, 123, 255, 0.15)",
              }}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default FormInvitationSong;
