import { Layout } from 'antd'
import { useEffect, useState } from 'react'
import API from '../controllers/ApiServices'
import MenuFavorites from './MenuFavorites'
import ListProducts from './ListProducts'

const { Header, Footer, Content } = Layout

const Main = () => {
  const [lisProducts, setListProducs] = useState([])

  const products = async () => {
    try {
      const result = await API.getAllProducts()
      setListProducs(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    products()
  }, [])

  return (
  <div>
      <Layout className='Layout'>
        <Header>
          <MenuFavorites />
        </Header>
        <Content style={{ padding: '60px 0 50px 50px' }}>
          <ListProducts
            lisProducts={lisProducts}
          />

        </Content>
        <Footer></Footer>
      </Layout>
  </div>
  )
}

export default Main
