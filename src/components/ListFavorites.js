import { useEffect, useState } from 'react'
import {
  Card, List, Drawer, Row,
  Col, Button
} from 'antd'

import { MinusOutlined } from '@ant-design/icons'

const styles = {
  imgs: {
    width: '300px',
    height: '350px',
    objectFit: 'cover',
    padding: '100px'
  },
  cardSize: {
    width: 300,
    height: 600
  }
}

const ListFavorites = ({ showDrawerProduct, setShowDrawerProduct }) => {
  const [itemFavorites, setItemFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

  const onClose = () => {
    setShowDrawerProduct(false)
    window.location.reload(false)
  }

  const onClickUpdate = (item) => {
    const filterItem = itemFavorites.filter(fav => fav.id !== item.id)
    setItemFavorites(filterItem)
  }

  useEffect(() => {
    setItemFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
  }, [showDrawerProduct])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(itemFavorites) || [])
  }, [itemFavorites])

  return (
  <div>
    <Drawer
      open={showDrawerProduct}
      onClose={onClose}
    >
      <List

        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4
        }}

        dataSource={itemFavorites}

        pagination={{
          pageSize: 10
        }}

        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              style={styles.cardSize }
              cover={
                <img
                  style={styles.imgs}
                  alt="example"
                  src={item.image}
                />
              }
            >
              <p>Price: {item.price}</p>
              <p>Title: {item.title}</p>
            <Row>
              <Col span={12}>
                <Button
                  onClick={() => onClickUpdate(item)}
                  icon={< MinusOutlined twoToneColor="#eb2f96"/>}
                  shape="circle" size='large'
                />
              </Col>
            </Row>
            </Card>
          </List.Item>
        )}
      />
    </Drawer>
  </div>
  )
}

export default ListFavorites
