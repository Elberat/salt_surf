
export interface ItemState {
    items: any[];
    loading: boolean;
    error: null | string;
}

export enum ItemActionTypes {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
}

interface FetchItemsAction {
    type: ItemActionTypes.FETCH_ITEMS;
}

interface FetchItemsSuccessAction {
    type: ItemActionTypes.FETCH_ITEMS_SUCCESS;
    payload: any[]
}
interface FetchItemsErrorAction {
    type: ItemActionTypes.FETCH_ITEMS_ERROR;
    payload: string;
}
export type ItemAction = FetchItemsAction | FetchItemsErrorAction | FetchItemsSuccessAction

export interface OneItemState {
    item: any;
    loading: boolean;
    error: null | string;
}

export enum OneItemActionTypes{
    FETCH_ONE_ITEM = 'FETCH_ONE_ITEM',
    FETCH_ONE_ITEM_SUCCESS = 'FETCH_ONE_ITEM_SUCCESS',
    FETCH_ONE_ITEM_ERROR = 'FETCH_ONE_ITEM_ERROR',
}

interface FetchOneItemAction{
    type: OneItemActionTypes.FETCH_ONE_ITEM
}

interface FetchOneItemsSuccessAction {
    type: OneItemActionTypes.FETCH_ONE_ITEM_SUCCESS;
    payload: any
}

interface FetchOneItemsErrorAction {
    type: OneItemActionTypes.FETCH_ONE_ITEM_ERROR;
    payload: string;
}

export type OneItemAction = FetchOneItemAction | FetchOneItemsSuccessAction | FetchOneItemsErrorAction

export interface GalleryState {
    gallery: any[];
    loading: boolean;
    error: null | string;
}

export enum GalleryActionTypes {
    FETCH_GALLERY = 'FETCH_GALLERY',
    FETCH_GALLERY_SUCCESS = 'FETCH_GALLERY_SUCCESS',
    FETCH_GALLERY_ERROR = 'FETCH_GALLERY_ERROR',
}

interface FetchGalleryAction {
    type: GalleryActionTypes.FETCH_GALLERY;
}
interface FetchGallerySuccessAction {
    type: GalleryActionTypes.FETCH_GALLERY_SUCCESS;
    payload: any[]
}
interface FetchGalleryErrorAction {
    type: GalleryActionTypes.FETCH_GALLERY_ERROR;
    payload: string;
}

export type GalleryAction = FetchGalleryAction | FetchGallerySuccessAction | FetchGalleryErrorAction

