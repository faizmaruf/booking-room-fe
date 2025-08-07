import React, { useState } from "react";
import FormVillage from "./FormVillage";

const VillagePage = () => {
  const initialState = {
    id: "",
    name: "",
  };
  const [isShowModal, setIsShowModal] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="col">
              <div class="page-pretitle">Master Wilayah</div>
              <h2 class="page-title">Kelurahan</h2>
            </div>
            <div class="col-auto ms-auto d-print-none">
              <div class="btn-list">
                <a
                  href="#"
                  class="btn btn-primary btn-5 d-none d-sm-inline-block"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                  onclick={openModal}
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
                  Tambah Kelurahan
                </a>
                <a
                  href="#"
                  class="btn btn-primary btn-6 d-sm-none btn-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                  aria-label="Create new report"
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
                  <div class="card-header">
                    <div class="row w-full">
                      <div class="col">
                        <h3 class="card-title mb-0">Kelurahan</h3>
                        <p class="text-secondary m-0">
                          Master wilayah Kelurahan di justforyou
                        </p>
                      </div>
                      <div class="col-md-auto col-sm-12">
                        <div class="ms-auto d-flex flex-wrap btn-list">
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
                            />
                            <span class="input-group-text">
                              <kbd>ctrl + K</kbd>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="advanced-table">
                    <div class="table-responsive">
                      <table class="table table-vcenter table-selectable">
                        <thead>
                          <tr>
                            <th class="w-1"></th>
                            <th>
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-name"
                              >
                                Name
                              </button>
                            </th>
                            <th>
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-city"
                              >
                                City
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
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-date"
                              >
                                Start date
                              </button>
                            </th>
                            <th>
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-tags"
                              >
                                Tags
                              </button>
                            </th>
                            <th>
                              <button
                                class="table-sort d-flex justify-content-between"
                                data-sort="sort-category"
                              >
                                Category
                              </button>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="table-tbody">
                          <tr>
                            <td>
                              <input
                                class="form-check-input m-0 align-middle table-selectable-check"
                                type="checkbox"
                                aria-label="Select invoice"
                                value="true"
                              />
                            </td>
                            <td class="sort-name">
                              <span class="avatar avatar-xs me-2"> </span>
                              Paweł Kuna
                            </td>
                            <td class="sort-city">Peimei, China</td>
                            <td class="sort-status">
                              <span class="badge bg-success-lt">Active</span>
                            </td>
                            <td class="sort-date">December 08, 2024</td>
                            <td class="sort-tags">
                              <div class="badges-list">
                                <span class="badge">Event</span>
                                <span class="badge">Tickets</span>
                              </div>
                            </td>
                            <td class="sort-category py-0">
                              <span class="on-unchecked"> Individual </span>
                              <div class="on-checked">
                                <div class="d-flex justify-content-end">
                                  <a
                                    href="#"
                                    class="btn btn-2 btn-icon"
                                    aria-label="Button"
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
                                      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                class="form-check-input m-0 align-middle table-selectable-check"
                                type="checkbox"
                                aria-label="Select invoice"
                                value="true"
                              />
                            </td>
                            <td class="sort-name">
                              <span class="avatar avatar-xs me-2"> </span>
                              Jeffie Lewzey
                            </td>
                            <td class="sort-city">Indaial, Brazil</td>
                            <td class="sort-status">
                              <span class="badge bg-danger-lt">Inactive</span>
                            </td>
                            <td class="sort-date">January 01, 2024</td>
                            <td class="sort-tags">
                              <div class="badges-list">
                                <span class="badge">QTA</span>
                                <span class="badge">Event</span>
                              </div>
                            </td>
                            <td class="sort-category py-0">
                              <span class="on-unchecked"> Agencies </span>
                              <div class="on-checked">
                                <div class="d-flex justify-content-end">
                                  <a
                                    href="#"
                                    class="btn btn-2 btn-icon"
                                    aria-label="Button"
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
                                      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="card-footer d-flex align-items-center">
                      <div class="dropdown">
                        <a
                          class="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span id="page-count" class="me-1">
                            20
                          </span>
                          <span>records</span>
                        </a>
                        <div class="dropdown-menu">
                          <a
                            class="dropdown-item"
                            onclick="setPageListItems(event)"
                            data-value="10"
                          >
                            10 records
                          </a>
                          <a
                            class="dropdown-item"
                            onclick="setPageListItems(event)"
                            data-value="20"
                          >
                            20 records
                          </a>
                          <a
                            class="dropdown-item"
                            onclick="setPageListItems(event)"
                            data-value="50"
                          >
                            50 records
                          </a>
                          <a
                            class="dropdown-item"
                            onclick="setPageListItems(event)"
                            data-value="100"
                          >
                            100 records
                          </a>
                        </div>
                      </div>
                      <ul class="pagination m-0 ms-auto">
                        <li class="page-item disabled">
                          <a
                            class="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
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
                              class="icon icon-1"
                            >
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                            prev
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            6
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            7
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            8
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            9
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            10
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            next
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
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </a>
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
      <FormVillage isShowModal={isShowModal} closeModal={closeModal} />
    </div>
  );
};

export default VillagePage;
