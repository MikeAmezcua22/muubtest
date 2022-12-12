import { Modal } from 'antd'
import { localizedString } from '../config/init/internalization'

const ModalFavoriteExist = (props) => {
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
      {localizedString.thisProductIsAlreadySelected}
    </Modal>
  </div>
  )
}

export default ModalFavoriteExist
