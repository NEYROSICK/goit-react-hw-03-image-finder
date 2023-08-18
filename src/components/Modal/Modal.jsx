import PropTypes from 'prop-types';
import { Backdrop, ModalField } from './modal.styled';

const Modal = ({ imageURL, descr, handleClick, isModalVisible }) => {
  return (
    <Backdrop onClick={handleClick} isModalVisible={isModalVisible}>
      <ModalField>
        <img src={imageURL} alt={descr} />
      </ModalField>
    </Backdrop>
  );
};

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default Modal;
