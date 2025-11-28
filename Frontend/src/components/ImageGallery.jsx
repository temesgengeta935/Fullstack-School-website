import React from "react";
import styles from "./ImageGallery.module.css";
import { X } from "lucide-react";

const ImageGallery = ({ images = [] }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalImageSrc, setModalImageSrc] = React.useState(null);

  const modalRef = React.useRef(null);

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc(null);
  };

  // Close modal on outside click
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") closeModal();
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <div className={styles.galleryWrapper}>
      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} ref={modalRef}>
            <img
              src={modalImageSrc}
              alt="Preview"
              className={styles.modalImg}
            />

            {/* close button */}
            <button className={styles.closeBtn} onClick={closeModal}>
              <X size={28} color="black" />
            </button>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      {images.length > 0 ? (
        <div className={styles.galleryGrid}>
          {images.map((imgSrc, index) => (
            <div key={index} className={styles.imageCard}>
              <img
                src={imgSrc}
                alt={`Event image ${index + 1}`}
                className={styles.gridImg}
                onClick={() => openModal(imgSrc)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noImages}>No images available.</p>
      )}
    </div>
  );
};

export default ImageGallery;
