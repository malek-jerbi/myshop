export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.data }
    case 'PRODUCT_LIST_FAIL':
      return { loading: false, error: action.data }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_REQUEST':
      return { loading: true, ...state }
    case 'PRODUCT_DETAILS_SUCCESS':
      return { loading: false, product: action.data }
    case 'PRODUCT_DETAILS_FAIL':
      return { loading: false, error: action.data }
    default:
      return state
  }
}
