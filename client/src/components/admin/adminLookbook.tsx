import {Link} from 'react-router-dom'
import React, { ReactElement, useEffect } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import {useActions} from '../../hooks/useActions'
import {REACT_API} from '../../constants'
import { useState } from 'react'
import { ReactReduxContext } from 'react-redux'
interface Props {
    
}

export default function AdminLookbook({}: Props): ReactElement {
    const {gallery, error, loading} = useTypeSelector(state => state.gallery)
    const {fetchGallery, deleteGallery, createGallery} = useActions()
    const [file, setFile] = useState<any>(null)
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)
    
    useEffect(() => {
        console.log(gallery)
    }, [gallery])
    
    useEffect(() => {
        fetchGallery(page)
        console.log(page, 'page has changed')
    }, [page])


    function deleteGalleryById(id:number){
        deleteGallery(id)
        fetchGallery(50)
    }

    const selectFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }

    function handleCreateGallery(e:any){
        e.preventDefault()
        const formData = new FormData()
        formData.append('img', file[0])
        createGallery(formData)
        fetchGallery(50)
    }



    if (loading) {
        return <h3 className ="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="container">
            <Link  to='admin'>back</Link> <br/>
                <input onChange={(e)=>selectFile(e)} style={{marginTop: '15px'}} type="file" />
                <button  onClick={handleCreateGallery} type="submit" className="button">Загрузить</button>
            

            {gallery.map(item =>
                <div  style={{  border: '1px black solid', margin:'20px auto', padding: '10px'}} key={item.id}> 
                    <img  loading="lazy" style={{ width:'100%'}} src={REACT_API + item.img} alt="" />
                    <div className="lookbook_buttons" style={{display:'flex', cursor: 'pointer', margin: '20px'}}>
                        <div onClick={()=> deleteGalleryById(item.id)} className="button">Delete</div>
                    </div>
                </div>
            )}
        </div>
    )
}

