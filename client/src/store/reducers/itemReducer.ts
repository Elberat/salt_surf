import {ItemAction, ItemActionTypes, ItemState} from "../types/types";

    const initialState: ItemState = {
    items: [],
    loading: false,
    error: null
}

export const itemReducer = (state = initialState, action: ItemAction): ItemState => {
    switch (action.type) {
        case ItemActionTypes.FETCH_ITEMS:
            return { loading: true, error: null, items: []}
        case ItemActionTypes.FETCH_ITEMS_SUCCESS:
            return {loading: false, error: null, items: action.payload}
        case ItemActionTypes.FETCH_ITEMS_ERROR:
            return {loading: false, error: action.payload, items: []}
        default:
            return state
    }
}
