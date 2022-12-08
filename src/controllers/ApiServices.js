import axios from 'axios'

const BASE_URL = "https://fakestoreapi.com"

const APIRoutes = {
    Products: `${BASE_URL}/products`
}

const API = {
    getAllProducts: async() => {
        return await axios.get(APIRoutes.Products)
    }
}

export default API