import React, { ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/download.png'
import './blackLine.css'
import {useActions} from '../../hooks/useActions'

import { useTypeSelector } from "../../hooks/useTypeSelector";

export default function BlackLine(): ReactElement {

    const { currentUser } = useTypeSelector((state) => state.user);
    console.log(currentUser)
    const {signOut} = useActions()

    useEffect(() => {
        
    }, [currentUser])

    return (
        <div>
            <div className="free">
                FREE US SHIPPING ON ORDERS OVER 125$
            </div>
            <div className="header">
                <div className="container">
                    <div className="header_content">
                        <div className="logo">
                            <Link to="/" >
                                <img style={{width: '120px'}} src={Logo} alt="SALT SURF" />
                            </Link>
                        </div>
                        
                        <div className="nav">
                            <ul>
                                <li> <Link style={{color: 'black', textDecoration: 'none'}} to="/about" > ABOUT </Link></li>
                                <li> <Link style={{color: 'black', textDecoration: 'none'}} to="/lookbook" > LOOKBOOK </Link></li>
                                <li> <Link style={{color: 'black', textDecoration: 'none'}} to="/shop" > SHOP </Link></li>
                                <li> <Link style={{color: 'black', textDecoration: 'none'}} to="/contact" > CONTACT </Link></li>
                                <li> <Link style={{color: 'black', textDecoration: 'none'}} to="/auth" > KART </Link> </li>
                                {currentUser ? <li onClick={signOut}>LOG OUT</li> : <li> <Link style={{color: 'black', textDecoration: 'none'}} to="/login" > LOGIN </Link> </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
