import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' })

    const response = await axios.get('/api/products')

    dispatch({ type: 'PRODUCT_LIST_SUCCESS', data: response.data })
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      data:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DETAILS_REQUEST' })

    const response = await axios.get(`/api/products/${id}`)

    dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', data: response.data })
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DETAILS_FAIL',
      data:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
