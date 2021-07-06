import React, { ReactElement } from 'react'
import './admin.css'
import {Link} from 'react-router-dom'
export default function AdminPanel(): ReactElement {
    return (
        <div className="container">
            <div className="buttons">
                <div className="button button_lookBook">
                    <Link style={{textDecoration: 'none'}} to='/adminLookBook'>
                        LookBook
                    </Link>
                </div>
        <br />
                <div className="button button_shop">
                    <Link style={{textDecoration: 'none'}} to='/adminShop'>
                        Shop
                    </Link>
                </div>
            </div>
        </div>
    )
}
