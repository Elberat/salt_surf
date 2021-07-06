import React, { ReactElement, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import {useActions} from '../../hooks/useActions'
import {REACT_API} from '../../constants'
import './admin.css'

interface Props {
    
}

export default function Shop({}: Props): ReactElement {
    const {items, error, loading} = useTypeSelector(state => state.item)
    const {fetchItems, deleteItem} = useActions()
    const history = useHistory()

    useEffect(() => {
        fetchItems()
    }, [])

    async function deleteItemById(id:number){
        await deleteItem(id)
        fetchItems()
    }

    function handleUpdateCLick (id:number){
        history.push('adminShopUpdate/'+ id)
    }

    if (loading) {
        return <h3 className ="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="container">
        <Link to='/admin'>back</Link><br/>
        <Link to='/adminShopCreate'>
            <div 
                style={{width:'150px', cursor: 'pointer'}} 
                className="create_item button">CREATE ITEM
            </div>
        </Link>
            <div className="shop_items">
                {items.map(item =>
                    <div className='shop_item_card' key={item.id}> 
                        <div className="item_img">
                            <img 
                                loading="lazy"
                                style={{width:'90%', height:'90%'}} 
                                src={REACT_API + item.img} 
                                alt="" />
                        </div>
                        <div className="item_name">
                            {item.name}
                        </div>
                        <div className="item_price">
                            <strong>${item.price}</strong>
                        </div>
                        <div style={{display: 'flex',paddingTop:'5px'}} className="admin_buttons">
                            <div 
                                onClick={()=>deleteItemById(item.id)} 
                                className="deleteItem button"> 
                                Delete 
                            </div>
                            <div style={{cursor: 'pointer'}}
                                onClick={()=>handleUpdateCLick(item.id)}
                                className='button updateButton'> edit
                            </div>
                            
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    );
}

