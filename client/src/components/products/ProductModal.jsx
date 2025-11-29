import Modal from "react-modal";

const ProductModal = ({ product, closeModal }) => {
  return (
    <Modal isOpen={!!product} onRequestClose={closeModal}>
      <span className="close-icon" onClick={closeModal}>
        &times;
      </span>

      <div className="product-info">
        <img src={product?.url} alt={product?.name} />
        <p>
          <strong>{product?.name}</strong>
        </p>
        <p>{product?.description}</p>
      </div>
    </Modal>
  );
};

export default ProductModal;
