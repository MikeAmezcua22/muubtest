import { Modal } from 'antd'

const ModalFavoriteExist = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showModal, setShowModal } = props

  const handleCancel = () => {
    setShowModal(false)
  }

  return (
  <div>
    <Modal
      open={showModal}
      onCancel={handleCancel}
      onOk={handleCancel}
    >
      El producto ya se encuentra seleccionado
    </Modal>
  </div>
  )
}

export default ModalFavoriteExist
