import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.png";
import { fetchRooms } from "../../actions/roomAction";
import { connect } from "react-redux";
import { BASE_URL_STORAGE } from "../../helpers/config";
import DetailRoom from "./DetailRoom";
// Komponen utama
const LandingPage = (props) => {
  const { fetchRooms, rooms } = props;
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("standard");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking diterima! 
Tipe Kamar: ${roomType} 
Check-in: ${checkInDate} 
Check-out: ${checkOutDate} 
Tamu: ${guests}`);
  };
  const ellipsisByWords = (text, maxWords = 15) => {
    if (typeof text !== "string") return "";

    const words = text.trim().split(/\s+/); // Pisah berdasarkan spasi
    return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : text;
  };
  const closeModal = () => {
    setSelectedRoom(null);
  };

  useEffect(() => {
    fetchRooms();
  }, []);
  useEffect(() => {
    const target = document.body;

    const observer = new MutationObserver(() => {
      if (target.classList.contains("modal-open")) {
      } else {
        closeModal();
      }
    });

    observer.observe(target, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  console.log(rooms);

  return (
    <div className="w-100 h-100">
      <header className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href=".">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "4em",
                backgroundColor: "transparent",
                filter: "none",
                mixBlendMode: "normal",
              }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#rooms">
                  Kamar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Tentang
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary ms-3" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section dengan Carousel */}
      <div className="page-wrapper">
        <div className="page-header d-print-none p-0">
          <div id="hotelCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="d-block w-100 hero-image"
                  style={{
                    height: "500px",
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}></div>
                <div className="carousel-caption d-none d-md-block text-start" style={{ bottom: "30%", left: "10%" }}>
                  <h1 className="display-4 fw-bold">Temukan Kenyamanan Terbaik</h1>
                  <p className="lead">Pengalaman menginap yang tak terlupakan dengan fasilitas terbaik</p>
                  <a href="#rooms" className="btn btn-primary btn-lg mt-3">
                    Lihat Kamar Tersedia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="container-xl mt-n5">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <form onSubmit={handleBooking}>
                <div className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label">Check-in</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Check-out</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Jumlah Tamu</label>
                    <select className="form-select" value={guests} onChange={(e) => setGuests(e.target.value)}>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} {num > 1 ? "Orang" : "Orang"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Tipe Kamar</label>
                    <select className="form-select" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                      <option value="standard">Standard</option>
                      <option value="deluxe">Deluxe</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>
                  <div className="col-md-2 d-flex align-items-end">
                    <button type="submit" className="btn btn-primary w-100">
                      Cari Kamar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="page-body">
          <div className="container-xl">
            {/* Welcome Section */}
            <div className="row row-cards mt-5">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title text-center">Selamat Datang di LuxStay Hotels</h3>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6">
                        <div className="card card-lg">
                          <div className="card-body text-center">
                            <img
                              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                              alt="Hotel LuxStay"
                              className="img-fluid rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="card card-lg">
                          <div className="card-body">
                            <h3 className="card-title">Pengalaman Menginap Terbaik</h3>
                            <p className="card-text">
                              LuxStay Hotels menawarkan pengalaman menginap yang tak terlupakan dengan kenyamanan dan
                              pelayanan terbaik. Setiap kamar dirancang khusus untuk memastikan Anda merasa seperti di
                              rumah sendiri dengan fasilitas modern dan pemandangan yang menakjubkan.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fas fa-wifi text-primary me-2"></i> WiFi Gratis
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool text-primary me-2"></i> Kolam Renang
                              </li>
                              <li>
                                <i className="fas fa-utensils text-primary me-2"></i> Restoran Terbaik
                              </li>
                              <li>
                                <i className="fas fa-spa text-primary me-2"></i> Spa & Wellness
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

            {/* Room Listing Section */}
            <h2 id="rooms" className="text-center my-5">
              Aula Tersedia
            </h2>
            <div className="row">
              {/* Room Card 1 */}
              {rooms?.map((room) => (
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={BASE_URL_STORAGE + room?.images?.find((image) => image?.is_main)?.image_path}
                      className="card-img-top"
                      alt="Standard Room"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{room?.name}</h5>
                      <p className="card-text flex-grow-1">{ellipsisByWords(room?.description)}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 text-primary mb-0">{room?.capacity} orang</span>
                        <span className="text-muted">kapasitas</span>
                      </div>
                      <a
                        onClick={() => setSelectedRoom(room)}
                        href="#"
                        // class="btn btn-primary btn-6 d-sm-none btn-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-detail-room"
                        className="btn btn-primary mt-3">
                        Detail
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Facilities Section */}
            <h2 className="text-center my-5">Fasilitas Kami</h2>
            <div className="row row-cards">
              <div className="col-sm-6 col-lg-3">
                <div className="card card-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-swimming-pool fa-3x text-primary mb-3"></i>
                    <h3>Kolam Renang</h3>
                    <p className="text-muted">Kolam renang outdoor dengan pemandangan indah</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card card-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-utensils fa-3x text-primary mb-3"></i>
                    <h3>Restoran</h3>
                    <p className="text-muted">
                      Menu lezat dari chef profesional untuk sarapan, makan siang, dan makan malam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card card-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-spa fa-3x text-primary mb-3"></i>
                    <h3>Spa & Wellness</h3>
                    <p className="text-muted">Layanan spa untuk relaksasi dan perawatan tubuh</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card card-sm">
                  <div className="card-body text-center">
                    <i className="fas fa-dumbbell fa-3x text-primary mb-3"></i>
                    <h3>Fitness Center</h3>
                    <p className="text-muted">Fasilitas gym lengkap dengan pelatih profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer footer-transparent d-print-none bg-dark text-light">
          <div className="container-xl">
            <div className="row py-5">
              <div className="col-lg-4 mb-4">
                <h4>LuxStay Hotels</h4>
                <p>Menyediakan pengalaman menginap terbaik dengan pelayanan profesional dan fasilitas lengkap.</p>
                <div className="social-links">
                  <a href="#facebook" className="text-light me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#twitter" className="text-light me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#instagram" className="text-light me-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-4">
                <h5>Tautan Cepat</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home" className="text-light">
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a href="#rooms" className="text-light">
                      Kamar
                    </a>
                  </li>
                  <li>
                    <a href="#facilities" className="text-light">
                      Fasilitas
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="text-light">
                      Galeri
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <h5>Kontak Kami</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-map-marker-alt me-2"></i> Jl. Contoh No. 123, Jakarta
                  </li>
                  <li>
                    <i className="fas fa-phone me-2"></i> +62 21 1234 5678
                  </li>
                  <li>
                    <i className="fas fa-envelope me-2"></i> info@luxstayhotels.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <h5>Berlangganan Newsletter</h5>
                <form>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Email Anda" />
                    <button className="btn btn-primary" type="button">
                      OK
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row text-center align-items-center flex-row-reverse border-top pt-4">
              <div className="col-lg-auto ms-lg-auto"></div>
              <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item">
                    Copyright &copy; 2025{" "}
                    <a href="." className="text-light">
                      LuxStay Hotels
                    </a>
                    . All rights reserved.
                  </li>
                  <li className="list-inline-item">
                    <a href="./changelog.html" className="text-light" rel="noopener">
                      v1.2.0
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <DetailRoom room={selectedRoom} baseUrlStorage={BASE_URL_STORAGE} closeModal={closeModal} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  rooms: state?.rooms?.datas?.data || [],
  isLoading: state?.rooms?.loading,
});
export default connect(mapStateToProps, {
  fetchRooms,
})(LandingPage);
