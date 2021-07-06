import {ItemAction, ItemActionTypes, OneItemAction, OneItemActionTypes} from "../types/types";
import {Dispatch} from "redux";
import { $authHost, $host } from "./host";



export const fetchItems = () => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_ITEMS})
            const response = await $host.get('api/item')
            setTimeout(() => {
                dispatch({type: ItemActionTypes.FETCH_ITEMS_SUCCESS, payload: response.data.rows})
            }, 500)
        } catch (e) {
            dispatch({
                type: ItemActionTypes.FETCH_ITEMS_ERROR,
                payload: 'Произошла ошибка при загрузке'
            })
        }
    }
}

export const deleteItem = (id:number) =>{
    return async (dispatch: Dispatch<ItemAction>) =>{
        try{
            const response = await $host.delete(`api/item/${id}` )
        }catch(e) {
            console.log(e)
        }
    }
}

export const createItem = (item :{}) => {
    return async (dispatch: Dispatch<ItemAction>) =>{
        try{
            const response = await $host.post(`api/item/create`, item )
        }catch(e) {
            console.log(e)
        }
    }
}

export const getOneItem = (id:number) => {
    return async (dispatch: Dispatch<OneItemAction>) => {
        try{
            dispatch({type: OneItemActionTypes.FETCH_ONE_ITEM})
            const response = await $host.get(`api/item/${id}`)
            setTimeout(() => {
                dispatch({type: OneItemActionTypes.FETCH_ONE_ITEM_SUCCESS, payload: response.data})
            }, 500)
        }catch(e){
            dispatch({
                type: OneItemActionTypes.FETCH_ONE_ITEM_ERROR,
                payload: 'Произошла ошибка при загрузке'
            })
        }
    }
}

export const updateItem = (id:number, newItem:any) => {
    return async (dispatch: Dispatch<ItemAction>) =>{
        try{
            const response = await $host.patch(`api/item/update/${id}`, newItem )
        }catch(e) {
            console.log(e)
        }
    }
}

