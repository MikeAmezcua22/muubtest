import { useState } from 'react'
import { Menu } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import ListFavoritos from './ListFavorites'

const MenuFavorites = () => {
  const [current, setCurrent] = useState('')
  const [showDrawerProduct, setShowDrawerProduct] = useState(false)
  const [listFavoriteData, setListFavoriteData] = useState([])

  const items = [
    {
      label: 'Favoritos',
      key: 'favoritos',
      icon: <HeartTwoTone />
    }
  ]

  const onClick = (e) => {
    setShowDrawerProduct(true)

    const reviewLocalStorage = localStorage.getItem('favorites')
    console.log(reviewLocalStorage)
    // setListFavoriteData(reviewLocalStorage)
    // console.log(!reviewLocalStorage)
    // if (!reviewLocalStorage) {
    //   localStorage.setItem('favorites', [])
    // }
  }

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        theme="dark"
      />

      <ListFavoritos
        showDrawerProduct={showDrawerProduct}
        setShowDrawerProduct={(showDrawerProduct) => setShowDrawerProduct(showDrawerProduct)}
      />
    </div>
  )
}

export default MenuFavorites
