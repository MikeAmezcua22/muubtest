import { useEffect, useState } from 'react'
import { HeartTwoTone, SmallDashOutlined } from '@ant-design/icons'
import {
  Card, Col, Row,
  Button, List, Alert
} from 'antd'
import ModalFavoriteExist from './ModalFavoriteExist'
import ListDetails from './ListDetails'

const styles = {
  imgs: {
    width: '300px',
    height: '350px',
    objectFit: 'cover',
    padding: '40px'
  },
  cardSize: {
    width: 300,
    height: 600
  },
  productPrice: {
    fontSize: '25px'
  },
  detailsTitle: {
    fontWeight: 'bold'
  }
}

const ListProducts = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [openDetails, setOpenDetails] = useState(false)
  const [detailInfoProduct, setDetailInfoProducts] = useState([])
  const [itemFavorites, setItemFavorites] = useState([])

  const {
    lisProducts
  } = props

  const onClick = (item) => {
    setItemFavorites(JSON.parse(localStorage.getItem('favorites')))
    const resultFilterFavorites = itemFavorites.filter(itemFav => itemFav.id === item.id)

    if (!resultFilterFavorites.length) {
      const getItemsForLocalStorage = JSON.parse(localStorage.getItem('favorites'))
      setItemFavorites([...getItemsForLocalStorage, item])
    }

    if (resultFilterFavorites.length) {
      setShowModal(true)
    }
  }

  const openDrawerDetails = (item) => {
    setOpenDetails(true)
    setDetailInfoProducts(item)
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(itemFavorites))
  }, [itemFavorites])

  return (
  <div>
      <List

      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4
      }}

      dataSource={lisProducts}

      pagination={{
        pageSize: 10
      }}

      renderItem={item => (
        <List.Item>
          <Card
            hoverable
            style={styles.cardSize}
            cover={
              <img
                style={styles.imgs}
                alt="example"
                src={item.image}
              />
            }
          >
            <p style={styles.productPrice}>${item.price}</p>
            <p>{item.title}</p>

            <Row>
              <Col span={12}>
                <Button
                  onClick={() => onClick(item)}
                  // onClick={() => setItemFavorites(itemFavorites.filter(itemFav => itemFav.id !== item.id))}
                  icon={<HeartTwoTone twoToneColor="#eb2f96"/>}
                  shape="circle" size='large'
                />
              </Col>
              <Col span={12}>
                <Button
                  icon={<SmallDashOutlined />}
                  shape="circle"
                  onClick={() => openDrawerDetails(item)}
                />
              </Col>
            </Row>
          </Card>
        </List.Item>
      )}
    />

    <ModalFavoriteExist
      showModal={showModal}
      setShowModal={(showModal) => setShowModal(showModal)}
    />

    <ListDetails
      openDetails={openDetails}
      setOpenDetails={(openDetails) => setOpenDetails(openDetails)}
      detailInfoProduct={detailInfoProduct}
    />

  </div>
  )
}

export default ListProducts
