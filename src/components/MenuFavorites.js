import { useState } from 'react'
import { Menu } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import ListFavoritos from './ListFavorites'

const MenuFavorites = () => {
  const [current, setCurrent] = useState('')
  const [open, setOpen] = useState(false)

  const items = [
    {
      label: 'Favoritos',
      key: 'favoritos',
      icon: <HeartTwoTone />
    }
  ]

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
    setOpen(true)
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
        open={open}
        setOpen={(open) => setOpen(open)}
      />
    </div>
  )
}

export default MenuFavorites
