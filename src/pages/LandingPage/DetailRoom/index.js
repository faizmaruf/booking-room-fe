import React, { useState, useEffect } from "react";

const DetailRoom = (props) => {
  const { room, baseUrlStorage, closeModal } = props;
  let mainImageRoom = baseUrlStorage + room?.images?.find((image) => image?.is_main)?.image_path;
  const [mainImage, setMainImage] = useState("");

  // update mainImage ketika room berubah
  useEffect(() => {
    if (room?.images?.length) {
      const mainImageRoom = baseUrlStorage + room.images.find((image) => image?.is_main)?.image_path;
      setMainImage(mainImageRoom);
    }
  }, [room]);

  const thumbnails = room?.images?.map((image) => baseUrlStorage + image.image_path);

  return (
    <div
      className="modal modal-blur fade "
      id="modal-detail-room"
      tabindex="-1"
      role="dialog"
      aria-hidden="false"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}>
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detail Aula</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div className="col-md-6 mb-4">
                <img src={mainImage} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage" />
                <div className="d-flex justify-content-start overflow-auto">
                  {thumbnails?.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => setMainImage(thumb)}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        cursor: "pointer",
                        marginRight: "8px",
                        border: mainImage === thumb ? "2px solid #0d6efd" : "1px solid #ddd",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="col-md-6">
                <h2 className="mb-3">{room?.name}</h2>
                <p className="text-muted mb-4">{room?.capacity} orang</p>

                <p className="mb-4">{room?.description}</p>
                <div className="mb-4">
                  <h5>Penanggung Jawab Aula:</h5>
                  <p>{room?.pic_name}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-link link-secondary btn-3" data-bs-dismiss="modal" onClick={closeModal}>
              {" "}
              Tutup{" "}
            </a>
            {/* {isEdit ? (
              <a href="#" class="btn bg-secondary-lt btn-5 ms-auto" data-bs-dismiss="modal" onClick={handleUpdate}>
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
                Edit Data
              </a>
            ) : (
              <a href="#" class="btn btn-primary btn-5 ms-auto" data-bs-dismiss="modal" onClick={handleAdd}>
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
                  class="icon icon-2">
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
                Tambah Data
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRoom;
