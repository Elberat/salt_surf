import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer(): ReactElement {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <hr style={{marginTop:'60px'}}/>
                    <div className="footer_content">
                        <ul>
                            <li> <Link style={{color:'black', textDecoration: 'none'}} to='/customer'> CUSTOMER SERVICE POLICIES </Link> </li>
                            <li> <Link style={{color:'black', textDecoration: 'none'}} to='/size'> SIZE CHART </Link> </li>
                            <li> <Link style={{color:'black', textDecoration: 'none'}} to='contact'> CONTACT </Link> </li>
                            <li> 2015 SALT SURF LLC </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
