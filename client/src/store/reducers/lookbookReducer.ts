import {GalleryAction, GalleryActionTypes, GalleryState} from "../types/types";

export const initialState: GalleryState = {
    gallery: [],
    loading: false,
    error: null,
}

export const lookbookReducer = (state = initialState, action: GalleryAction): GalleryState => {
    switch (action.type) {
        case GalleryActionTypes.FETCH_GALLERY:
            return { loading: true, error: null, gallery: []}
        case GalleryActionTypes.FETCH_GALLERY_SUCCESS:
            return { loading: false, error: null, gallery:[...state.gallery, ...action.payload]}
        case GalleryActionTypes.FETCH_GALLERY_ERROR:
            return  {loading: false, error: action.payload, gallery: []}
        default:
            return state
    }
}
