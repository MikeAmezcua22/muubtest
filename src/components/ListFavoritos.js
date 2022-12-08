import {React, useEffect, useState} from 'react'
import {
  Card, List, Drawer
} from 'antd'

const styles = {
  imgs : {
    width: '300px',
    height: '350px',
    objectFit: 'cover',
    padding: '100px'
  },
  cardSize: {
    width: 300, 
    height: 500
  }
}

const ListFavoritos = (props) => {

const [localStFavorites, setLocalStFavorites] = useState([])

const { open, setOpen } = props

const onClose = () => {
  setOpen(false);
};

useEffect(() => {
 const favorites = localStorage.getItem('favorites')
 const parseFavorites = JSON.parse(favorites)
 setLocalStFavorites(parseFavorites)
},[open])

 return (
  <div>
    <Drawer
      open={open}
      onClose={onClose}
    >
      <List

        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
        }}

        dataSource={localStFavorites}

        pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
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
            </Card>
          </List.Item>
        )}
      />
    </Drawer>
  </div>
 )
}

export default ListFavoritos