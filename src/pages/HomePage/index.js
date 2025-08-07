import React from "react";

const HomePage = () => {
  return (
    <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="col">
              <div class="page-pretitle">Overview</div>
              <h2 class="page-title">Right vertical layout</h2>
            </div>
            <div class="col-auto ms-auto d-print-none">
              <div class="btn-list">
                <span class="d-none d-sm-inline">
                  <a href="#" class="btn btn-1">
                    {" "}
                    New view{" "}
                  </a>
                </span>
                <a href="#" class="btn btn-primary btn-5 d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-2">
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  Create new report
                </a>
                <a href="#" class="btn btn-primary btn-6 d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-2">
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
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Sales</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-secondary" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Last 7 days
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h1 mb-3">75%</div>
                  <div class="d-flex mb-2">
                    <div>Conversion rate</div>
                    <div class="ms-auto">
                      <span class="text-green d-inline-flex align-items-center lh-1">
                        7%
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon ms-1 icon-2">
                          <path d="M3 17l6 -6l4 4l8 -8" />
                          <path d="M14 7l7 0l0 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="progress progress-sm">
                    <div class="progress-bar bg-primary" style={{ width: "75%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="75% Complete">
                      <span class="visually-hidden">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Revenue</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-secondary" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Last 7 days
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-0 me-2">$4,300</div>
                    <div class="me-auto">
                      <span class="text-green d-inline-flex align-items-center lh-1">
                        8%
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon ms-1 icon-2">
                          <path d="M3 17l6 -6l4 4l8 -8" />
                          <path d="M14 7l7 0l0 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div id="chart-revenue-bg" class="rounded-bottom chart-sm"></div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">New clients</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-secondary" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Last 7 days
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-3 me-2">6,782</div>
                    <div class="me-auto">
                      <span class="text-yellow d-inline-flex align-items-center lh-1">
                        0%
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon ms-1 icon-2">
                          <path d="M5 12l14 0" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div id="chart-new-clients" class="chart-sm"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Active users</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-secondary" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Last 7 days
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#">
                            Last 7 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 30 days
                          </a>
                          <a class="dropdown-item" href="#">
                            Last 3 months
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-3 me-2">2,986</div>
                    <div class="me-auto">
                      <span class="text-green d-inline-flex align-items-center lh-1">
                        4%
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon ms-1 icon-2">
                          <path d="M3 17l6 -6l4 4l8 -8" />
                          <path d="M14 7l7 0l0 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div id="chart-active-users" class="chart-sm"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Traffic summary</h3>
                  <div id="chart-mentions" class="chart-lg"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Locations</h3>
                  <div class="ratio ratio-21x9">
                    <div>
                      <div id="map-world" class="w-100 h-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card card-md sticky-top">
                <div class="card-stamp card-stamp-lg">
                  <div class="card-stamp-icon bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                      <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                      <path d="M10 10l.01 0" />
                      <path d="M14 10l.01 0" />
                      <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                    </svg>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-10">
                      <h3 class="h1">Tabler Icons</h3>
                      <div class="markdown text-secondary">
                        All icons come from the Tabler Icons set and are MIT-licensed. Visit
                        <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">
                          tabler.io/icons
                        </a>
                        , download any of the 5844 icons in SVG, PNG or&nbsp;React and use them in your favourite design tools.
                      </div>
                      <div class="mt-3">
                        <a href="https://tabler.io/icons" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                          </svg>
                          Download icons
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-transparent d-print-none">
        <div class="container-xl">
          <div class="row text-center align-items-center flex-row">
            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
              <ul class="list-inline list-inline-dots mb-0">
                <li class="list-inline-item">
                  Copyright &copy; 2025
                  <a href="." class="link-secondary">
                    Justforyou
                  </a>
                  . All rights reserved.
                </li>
                <li class="list-inline-item">
                  <a href="./changelog.html" class="link-secondary" rel="noopener">
                    {" "}
                    v1.2.0{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
