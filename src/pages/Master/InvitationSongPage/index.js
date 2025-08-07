import React, { useState, useEffect, useRef } from "react";
import {
  fetchInvitationSongs,
  getInvitationSongById,
  addInvitationSong,
  updateInvitationSong,
  deleteInvitationSong,
} from "../../../actions/invitationSongAction";
import { connect } from "react-redux";
import ModalDelete from "../../../components/Modals/ModalDelete";
import FormInvitationSong from "./FormInvitationSong";
import UserAvatar from "../../../components/UserAvatar";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const BASE_URL_STORAGE = "http://localhost/justforyou-be/storage/app/public/";

const InvitationSongPage = (props) => {
  const {
    invitationSong,
    invitationSongs,
    isLoading,
    fetchInvitationSongs,
    getInvitationSongById,
    addInvitationSong,
    updateInvitationSong,
    deleteInvitationSong,
    total_data,
  } = props;
  const [perPage, setPerPage] = useState(100);
  const [isPreviewSong, setPreviewSong] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handlePerPageChange = (value) => {
    setPerPage(value);
    setCurrentPage(1);
  };

  const initialState = {
    id: "",
    name: "",
    title: "",
    artist: "",
    album: "",
    password: "",
    songUrl: "",
  };

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [items, setItems] = useState(invitationSongs || []);
  const [formState, setFormState] = useState(initialState);

  const totalPages = Math.ceil(total_data / perPage) || 1;
  const paginatedItems = items;
  const openModal = () => {
    setFormState(initialState);
    setIsShowModal(true);
  };
  const closeModal = () => {
    setFormState(initialState);
    setIsShowModal(false);
    setIsEdit(false);
  };
  const openModalDelete = () => {
    setFormState(initialState);
    setIsShowModalDelete(true);
  };
  const closeModalDelete = () => {
    setFormState(initialState);
    setIsShowModalDelete(false);
  };
  const handleDelete = () => {
    deleteInvitationSong(formState?.id);
  };
  const handleAdd = () => {
    addInvitationSong(formState);
  };
  const handleUpdate = () => {
    updateInvitationSong(formState?.id, formState);
  };
  useEffect(() => {
    fetchInvitationSongs(perPage, currentPage);
  }, [perPage, currentPage]);
  useEffect(() => {
    if (invitationSongs) {
      const filteredItems = invitationSongs?.filter((item) => {
        const isTextMatch =
          item?.artist?.toLowerCase()?.includes(filterText?.toLowerCase()) ||
          item?.name?.toLowerCase()?.includes(filterText?.toLowerCase());

        return isTextMatch;
      });

      setItems(
        filteredItems?.map((item) => {
          return {
            id: item?.id,
            name: item?.name,
            title: item?.title,
            artist: item?.artist,
            album: item?.album,
            song_url: BASE_URL_STORAGE + item?.song_url,
            imageUrl: item?.image_url,
          };
        })
      );
    }
  }, [invitationSongs, filterText]);
  console.log(BASE_URL_STORAGE + formState?.imageUrl);

  return (
    <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="col">
              <div class="page-pretitle">Master Lagu</div>
              <h2 class="page-title">Master Lagu</h2>
            </div>
            <div class="col-auto ms-auto d-print-none">
              <div class="btn-list">
                <a
                  href="#"
                  class="btn btn-primary btn-5 d-none d-sm-inline-block"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-form"
                  onClick={openModal}
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
                  Tambah Master Lagu
                </a>
                <a
                  href="#"
                  class="btn btn-primary btn-6 d-sm-none btn-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-form"
                  onClick={openModal}
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            <div class="col-12">
              <div class="card">
                <div class="card-table">
                  <div class="card-header ">
                    <div class="row w-full">
                      <div class="col-md-9 col-12">
                        <h3 class="card-title mb-0">Master Lagu</h3>
                        <p class="text-secondary m-0">
                          Master Master Lagu di justforyou
                        </p>
                      </div>
                      <div className="col-md-3 col-12 my-md-0 my-2">
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
                            placeholder="Cari..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="advanced-table">
                    <div class="table-responsive">
                      <table class="table table-vcenter table-selectable">
                        <thead>
                          <tr>
                            <th>
                              <button
                                class="table-sort d-flex justify-content-between w-1"
                                data-sort="sort-name"
                              >
                                No
                              </button>
                            </th>
                            <th className="w-50">
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-city"
                              >
                                Judul
                              </button>
                            </th>
                            <th>
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-name"
                              >
                                Artis
                              </button>
                            </th>
                            <th>
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-name"
                              >
                                Album
                              </button>
                            </th>

                            <th>
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-status"
                              >
                                Status
                              </button>
                            </th>

                            <th>
                              {/* <button class="table d-flex justify-content-between">
                                Aksi
                              </button> */}
                            </th>
                            <th>
                              {/* <button class="table d-flex justify-content-between">
                                Aksi
                              </button> */}
                            </th>
                          </tr>
                        </thead>

                        <tbody className="table-tbody">
                          {isLoading
                            ? [...Array(10)]?.map((_, index) => (
                                <tr
                                  key={`loading-${index}`}
                                  style={{
                                    cursor: "loader",
                                  }}
                                >
                                  <td className="sort-name py-3">
                                    {(currentPage - 1) * perPage + index + 1}.
                                  </td>
                                  {[...Array(4)].map((_, i) => (
                                    <td key={i}>
                                      <div className="placeholder placeholder-lg w-75"></div>
                                    </td>
                                  ))}
                                  <td>
                                    <div className="placeholder placeholder-lg w-100"></div>
                                  </td>
                                  <td>
                                    <div className="placeholder placeholder-lg w-75"></div>
                                  </td>
                                </tr>
                              ))
                            : paginatedItems?.map((invitationSong, index) => (
                                <tr
                                  key={invitationSong?.id}
                                  onClick={() => {
                                    setPreviewSong(true);
                                    setFormState({
                                      id: invitationSong?.id,
                                      title: invitationSong?.title,
                                      name: invitationSong?.name,
                                      artist: invitationSong?.artist,
                                      album: invitationSong?.album,
                                      songUrl: invitationSong?.song_url,
                                      imageUrl: invitationSong?.imageUrl,
                                    });
                                  }}
                                >
                                  <td className="sort-name">
                                    {(currentPage - 1) * perPage + index + 1}.
                                  </td>
                                  <td className="sort-city">
                                    <UserAvatar
                                      fullName={invitationSong?.name}
                                      imageUrl={invitationSong?.imageUrl}
                                      size="xs"
                                      className="me-2"
                                    />
                                    {/* <AudioPlayer
                                      // ref={audioRef}
                                      src={invitationSong?.song_url}
                                      onPlay={() => console.log("Playing")}
                                      layout="horizontal"
                                      showSkipControls={false}
                                      showJumpControls={false}
                                      style={{
                                        borderRadius: "0.75rem",
                                        border: "none",
                                        boxShadow:
                                          "0 0px 0px rgba(0, 123, 255, 0.15)",
                                      }}
                                    /> */}
                                    {invitationSong?.name}
                                  </td>
                                  <td className="sort-name">
                                    {invitationSong?.artist}
                                  </td>
                                  <td className="sort-city">
                                    {invitationSong?.album}
                                  </td>
                                  <td className="sort-status">
                                    <span className="badge bg-success-lt">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <div class="btn-list flex-nowrap justify-content-center">
                                      <a
                                        href="#"
                                        class="btn btn-1 bg-secondary-lt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal-form"
                                        aria-label="Create new report"
                                        onClick={() => {
                                          setIsEdit(true);
                                          setFormState({
                                            id: invitationSong?.id,
                                            title: invitationSong?.title,
                                            name: invitationSong?.name,
                                            artist: invitationSong?.artist,
                                            album: invitationSong?.album,
                                            songUrl: invitationSong?.song_url,
                                          });
                                          setIsShowModal(true);
                                        }}
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
                                          <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                          />
                                          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                          <path d="M16 5l3 3" />
                                        </svg>{" "}
                                        Edit{" "}
                                      </a>
                                      <a
                                        href="#"
                                        class="btn btn-1 bg-danger-lt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal-delete"
                                        aria-label="Create new report"
                                        onClick={() => {
                                          setFormState({
                                            id: invitationSong?.id,
                                            title: invitationSong?.title,
                                            name: invitationSong?.name,
                                            artist: invitationSong?.artist,
                                            album: invitationSong?.album,
                                            songUrl: invitationSong?.song_url,
                                          });
                                        }}
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
                                          class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                        >
                                          <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                          />
                                          <path d="M4 7l16 0" />
                                          <path d="M10 11l0 6" />
                                          <path d="M14 11l0 6" />
                                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>{" "}
                                        Hapus
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer d-flex align-items-center">
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span id="page-count" className="me-1">
                            {perPage}
                          </span>
                          <span>records</span>
                        </button>
                        <div className="dropdown-menu">
                          {[50, 100, 250]?.map((value) => (
                            <button
                              key={value}
                              className="dropdown-item"
                              onClick={() => handlePerPageChange(value)}
                            >
                              {value} records
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex ">
                        <p class="ms-2 my-auto text-secondary">
                          {paginatedItems?.length} dari{" "}
                          <span>{total_data}</span> <span>data</span>
                        </p>
                      </div>

                      <ul className="pagination m-0 ms-auto">
                        <li
                          className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() =>
                              setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                          >
                            <svg
                              width="24"
                              height="24"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                            prev
                          </button>
                        </li>

                        {[...Array(totalPages)]?.map((_, idx) => {
                          const page = idx + 1;
                          return (
                            <li
                              key={page}
                              className={`page-item ${
                                currentPage === page ? "active" : ""
                              }`}
                            >
                              <button
                                className="page-link"
                                onClick={() => setCurrentPage(page)}
                              >
                                {page}
                              </button>
                            </li>
                          );
                        })}

                        <li
                          className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() =>
                              setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                              )
                            }
                          >
                            next
                            <svg
                              width="24"
                              height="24"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormInvitationSong
        isShowModal={isShowModal}
        isEdit={isEdit}
        closeModal={closeModal}
        formState={formState}
        setFormState={setFormState}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
      />
      <ModalDelete
        labelModal={formState?.name}
        isShowModal={isShowModalDelete}
        closeModal={closeModalDelete}
        handleDelete={handleDelete}
      />
      <div
        className="position-fixed start-0 end-0 bg-white border-top shadow-sm py-2 px-3 d-flex align-items-center justify-content-between"
        style={{
          zIndex: 9999999,
          bottom: 0,
          transition: "all 0.6s ease-in-out",
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <img
            // src={BASE_URL_STORAGE + formState?.image}
            src={formState?.image}
            alt="Album Art"
            className="rounded"
            width="48"
            height="48"
          />
          <div>
            <div className="fw-bold text-body">
              {formState?.title || formState?.name}
            </div>
            <div className="text-muted small">{formState?.artist}</div>
          </div>
        </div>

        <div className="flex-grow-1 mx-3">
          <AudioPlayer
            src={formState?.songUrl}
            autoPlay={false}
            showSkipControls={true}
            showJumpControls={false}
            customAdditionalControls={[]}
            customVolumeControls={["VOLUME"]}
            layout="horizontal-reverse"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  invitationSong: state?.invitationSongs?.data?.data,
  invitationSongs: state?.invitationSongs?.datas?.data || [],
  total_data: state?.invitationSongs?.datas?.total,
  isLoading: state?.invitationSongs?.loading,
});

export default connect(mapStateToProps, {
  fetchInvitationSongs,
  getInvitationSongById,
  addInvitationSong,
  updateInvitationSong,
  deleteInvitationSong,
})(InvitationSongPage);
