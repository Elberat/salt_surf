import React, { ReactElement, useEffect, useState } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import {useActions} from '../../hooks/useActions'
import {REACT_API} from '../../constants'
import './lookbook.css'

interface Props {
    
}

export default function Shop({}: Props): ReactElement {
    const {gallery, error, loading} = useTypeSelector(state => state.gallery)
    const {fetchGallery} = useActions();
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)

    useEffect(() => {
        console.log(gallery)
    }, [gallery])
    
    useEffect(() => {
        fetchGallery(page)
        console.log(page, 'page has changed')
    }, [page])

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        return function(){
            document.removeEventListener('scroll', scrollHandler)
        } 
    })
console.log(gallery.length)

    const scrollHandler = (e:any) => {
        if(gallery.length - 1 < limit && e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            setLimit(prev => prev + 1)
            setPage(prevState=> prevState + 1)
        }
    }


    // if (loading) {
    //     return <h3 className ="look-loading">Идет загрузка...</h3>
    // }
    if (error) {
        return <h3>{error}</h3>
    }
    return (

        <div>
            {gallery.length > 0 && gallery.map(item =>
                <div className="container" key={item.id}> <img loading="lazy" src={REACT_API + item.img} alt="" /></div>
            )}
            {loading ? <h3 className ="look-loading">Идет загрузка...</h3> : null}
        </div>
    );
}
