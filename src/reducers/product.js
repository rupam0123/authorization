import { GET_PRODUCT_ITEM, SET_PRODUCT_LIMIT } from "../actions";

const initialState = {
	product: {
		products: [],
		filter: { page: 1, limit: 5 }
	}
}

export const getProduct = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCT_ITEM:
			return {
				...state,
				product: {
					...state.product,
					...action.payload
				}
			}

		case SET_PRODUCT_LIMIT:
			return {
				...state,
				product: {
					...state.product,
					filter: {
						...state.product.filter,
						...action.payload
					}
				}

			}
		default:
			return state
	}

}