/* eslint-disable react/prop-types */
import { Drawer, Image, Divider } from 'antd'

const styles = {
  detailsPrice: {
    fontSize: '30px'
  },
  detailsTitle: {
    fontWeight: 'bold'
  },
  detailsDescription: {
    color: '#808080'
  }
}

const ListDetails = (props) => {
  const { setOpenDetails, openDetails, detailInfoProduct } = props

  const onClose = () => {
    setOpenDetails(false)
  }

  return (
    <div>
      <Drawer
        open={openDetails}
        onClose={onClose}
      >
        <Image
          width={200}
          src={detailInfoProduct.image}

        />
        <Divider />
          <p style={styles.detailsPrice}>$ {detailInfoProduct.price}</p>
          <p style={styles.detailsTitle}>{detailInfoProduct.title}</p>
          <p style={styles.detailsDescription}>{detailInfoProduct.description}</p>
      </Drawer>
    </div>
  )
}

export default ListDetails
