import React, { ReactElement } from 'react'
import './contact.css'

interface Props {
    
}

export default function Contact({}: Props): ReactElement {
    return (
        <div>
            <div className="contacts">
                <div className="container">
                    <hr />
                    <div className="first_contact flex">
                        <div className="first_contacts_title mt10">
                            <strong>CONTACT</strong>
                        </div>
                        <div className="first_contacts_descr mt10">
                            SALT SURF would love to help answer any <br/> questions you may have. Send us an email<br/> and we'll get back to you as quickly as we <br/> can.  Follow us on social media (especially <br/> Instagram) for the most up to date <br/> happenings.  
                            <br />
                            Press and marketing inquiries alike can best <br/> be answered via info@saltsurf.com
                        </div>
                        <div className="first_contact_general mt10">
                            <strong>General</strong> - info@saltsurf.com 
                            <br />
                            <strong>Instagram</strong> - @saltsurf
                        </div>
                    </div>

                    <hr />
                    <div className="second_contact flex">
                        <div className="second_contacts_title mt10">
                            <strong>RETURNS + EXCHANGES</strong>
                        </div>
                        <div className="second_contacts_descr mt10">
                        Send all exchanges and returns to the below address,<br/> with a brief note stating the reason for your return and<br/> the action you wish to take: <br/>
                        SALT SURF- RETURNS <br />
                        16651 Gothard St  <br />
                        Suite H <br/>
                        Huntington Beach, CA 92647
                        </div>
                        <div className="second_contact_general mt10">
                            <strong>Customer Service</strong> - <br/> customerservice@saltsurf.com 
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
