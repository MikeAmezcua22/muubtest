import { useState } from 'react'
import { Menu } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import ListFavoritos from './ListFavorites'

const MenuFavorites = () => {
  const [current, setCurrent] = useState('')
  const [showDrawerProduct, setShowDrawerProduct] = useState(false)

  const items = [
    {
      label: 'Favoritos',
      key: 'favoritos',
      icon: <HeartTwoTone />
    }
  ]

  const onClick = (e) => {
    setShowDrawerProduct(true)
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
