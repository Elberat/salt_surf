import React, { ReactElement, useState } from 'react'
import {useActions} from '../../hooks/useActions'
import {REACT_API} from '../../constants'
import { useParams } from 'react-router'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useEffect } from 'react'
import './admin.css'
import {Link} from 'react-router-dom'


export default function AdminUpdate(): ReactElement {
    const {item, error, loading} = useTypeSelector(state => state.oneItem)
    const {getOneItem, updateItem} = useActions()
    const params:any = useParams()
    const [newName, setNewName]= React.useState<string> ('')
    const [newPrice, setNewPrice]= React.useState<number> ()
    const [newDescrOne, setNewDescrOne]= React.useState<any> ('')
    const [newDescrTwo, setNewDescrTwo]= React.useState<any> ('')
    const [newFile, setNewFile] = React.useState<any>(null)

    useEffect(() => {
        getOneItem(params.id)
    }, [])

    const selectFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewFile(e.target.files)
    }

    function handleUpdateItem(e:any){
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', newName)
        formData.append('price', `${newPrice}`)
        formData.append('descrOne', newDescrOne)
        formData.append('descrTwo', newDescrTwo)
        formData.append('img', newFile[0])
        updateItem(item.id, formData)
    }

    if (loading) {
        return <h3 className ="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="container">
            <div className="edit_container">
                    <img src={REACT_API + item.img} alt="" />
                <div className="edit-inps">
                    name
                    <textarea className="textarea-edit" placeholder={item.name} onChange={e => setNewName(e.target.value)} />
                    descrOne
                    <textarea className="textarea-edit" placeholder={item.descrOne} onChange={e => setNewDescrOne(e.target.value)} />
                    descrTwo
                    <textarea className="textarea-edit" placeholder={item.descrTwo} onChange={e => setNewDescrTwo(e.target.value)} />
                    price
                    <textarea className="textarea-edit" placeholder={item.price} onChange={e => setNewPrice(Number(e.target.value))} />
                    image
                    <input type="file" onChange={(e)=>selectFile(e)}  />
                    <button style={{cursor:'pointer'}} 
                        className='button btnsave' 
                        onClick={handleUpdateItem}>  
                        <Link to='/admin' >post</Link> 
                    </button> 
                </div>
                    
                    
            </div>
        </div>
    )
}
