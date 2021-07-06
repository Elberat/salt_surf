import React, { ReactElement, useState } from 'react'
import {GalleryAction, GalleryActionTypes} from "../types/types";
import {Dispatch} from "redux";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { $authHost, $host } from "./host";
import {initialState} from '../reducers/lookbookReducer'


export const fetchGallery = (page:number) => {
    
    return async (dispatch: Dispatch<GalleryAction>) => {
        try {
            dispatch({type: GalleryActionTypes.FETCH_GALLERY})
            const response = await $host.get(`api/gallery?_page=${page}&_limit=200`)
            console.log(initialState.gallery)
            setTimeout(() => {
                dispatch({type: GalleryActionTypes.FETCH_GALLERY_SUCCESS, payload: [...initialState.gallery,...response.data.rows]})
            }, 500)
        } catch (e) {
            console.log(e.message)
            dispatch({
                type: GalleryActionTypes.FETCH_GALLERY_ERROR,
                payload: 'Произошла ошибка при загрузке'
            })
        }
    }
}

export const deleteGallery = (id:number) =>{
    return async (dispatch: Dispatch<GalleryAction>) =>{
        try{
            const response = await $host.delete(`api/gallery/${id}` )
        }catch(e) {
            console.log(e)
        }
    }
}



export const createGallery = (item: {}) =>{
    return async (dispatch: Dispatch<GalleryAction>) =>{
        try{
            const response = await $host.post(`api/gallery/create`, item )
        }catch(e) {
            console.log(e)
        }
    }   
}
