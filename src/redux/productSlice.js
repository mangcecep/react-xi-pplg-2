import { api } from "../utils"


const initProduct = {
    load: true,
    data: [],
    error: null,
    message: null
}

export const getProduct = () => (dispatch) => {
    dispatch({
        type: 'PRODUCT_INIT'
    })
    api.get("/product")
        .then((response) => {
            dispatch({
                type: 'PRODUCT_SUCCESS',
                payload: {
                    data: response?.data?.data
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: 'PRODUCT_FAIL',
                error: err?.response
            })
        })
}

export const productReducer = (state = initProduct, action) => {
    switch (action.type) {
        case 'PRODUCT_INIT':
            return initProduct
        case 'PRODUCT_SUCCESS':
            return {
                ...state,
                load: false,
                data: action?.payload?.data
            }
        case 'PRODUCT_FAIL':
            return {
                data: [],
                load: false,
                error: action?.payload?.error
            }
        default:
            return state
    }

}
// reducers: {
//     addToCartProduct: (state, payload) => {
//         const findProduct = state.find(p => p.id === payload.payload.id)
//         if (findProduct.stock === 0) {
//             alert("this product is empty!")
//             return
//         }
//         state?.map(s => {
//             if (s.id === findProduct.id) {
//                 s.stock -= 1
//             }
//         })
//     }
// }