import {Link, Redirect} from 'react-router-dom'
import React, { ReactElement } from 'react'
import {useActions} from '../../hooks/useActions'
import { useState } from 'react'


interface Props {
    
}

export default function AdminShopCreate({}: Props): ReactElement {

    const {createItem} = useActions()

    const [name, setName]= React.useState<string> ('')
    const [price, setPrice]= React.useState<number> ()
    const [descrOne, setDescrOne]= React.useState<any> ('')
    const [descrTwo, setDescrTwo]= React.useState<any> ('')
    const [file, setFile] = React.useState<any>(null)

    const selectFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }

    function handleCreateItem(e:any){
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('descrOne', descrOne)
        formData.append('descrTwo', descrTwo)
        formData.append('img', file[0])
        createItem(formData)

        setName('')
        setPrice(0)
        setDescrOne('')
        setDescrTwo('')
        setFile(null)
    }

    return (
        <div className="container">
            <Link to='/adminShop'>back</Link>
            <br/>
            <div className="create-inps">

                <p>name </p>
                <textarea className="inputs" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    /> 
                <br/>
                <p>price </p>
                <textarea className="inputs" 
                    value={price} 
                    onChange={e => setPrice(Number(e.target.value))} 
                    /> 
                <br/>
                <p>descrOne </p>
                <textarea className="inputs" 
                
                    value={descrOne} 
                    onChange={e => setDescrOne(e.target.value)} 
                    /> 
                <br/>
                <p>descrTwo </p>
                <textarea 
                    className="inputs" 
                    value={descrTwo} 
                    onChange={e => setDescrTwo(e.target.value)} 
                    /> 
                <br/>
                <p>img </p>
                <input 
                    onChange={(e)=>selectFile(e)} 
                    type="file" /> 
                <br/>
                    <button style={{cursor:'pointer'}} 
                        className='button btnsave' 
                        onClick={handleCreateItem}>  
                        <Link to='/adminShop' >post</Link> 
                    </button> 
            </div>
        </div>
    )
}
