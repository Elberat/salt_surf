import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router' 
import { useSelector } from 'react-redux'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import {useActions} from '../../hooks/useActions'
import {REACT_API} from '../../constants'
import './shop.css'

interface Props {
    
}

export default function Shop({}: Props): ReactElement {
    const {items, error, loading} = useTypeSelector(state => state.item)
    const {fetchItems} = useActions()
    const history = useHistory<any>()

    useEffect(() => {
        fetchItems()
    }, [])

    if (loading) {
        return <h3 className ="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    function handleClickItem(id:number){
        console.log(id)
        history.push('shop/' + id)

    }
    
    return (

        <div className="container">

            <div className="search_container">
                <input type="search" className="search" />
            </div>

            <div className="shop_items">
                {items.map(item =>
                    <div className='shop_item_card' key={item.id} onClick={()=>handleClickItem(item.id)} >
                        <div className="item_img">
                            <img style={{width:'100%', height:'100%'}} src={REACT_API + item.img} alt="" />
                        </div>
                        <div className="name_price">
                            
                            <div className="item_name">{item.name}</div>
                            <div className="item_name"> <strong>${item.price}.00</strong>  </div>

                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    );
}
