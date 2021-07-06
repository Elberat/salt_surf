import React, { ReactElement } from 'react'
import './customers.css'

interface Props {
    
}

export default function Customer({}: Props): ReactElement {
    return (
        <div>
            <div className="customers">
                <div className="container">
                    <div className="customer_title">
                        <h3>CUSTOMER SERVICE POLICIES</h3>
                    </div>
                    <hr />
                    
                    <div className="send">
                        <strong>Send all exchanges and returns to: </strong> <br />
                        SALT SURF- RETURNS <br />
                        10871 Portal Drive <br />
                        Los Alamitos, CA 90720 <br />
                    </div>

                    <div className="cus_list">
                        <div className="cus_title">
                            <strong>Returns</strong> 
                        </div>
                        <div className="cus_descr">
                            If you are not satisfied with your order, you can return the item within 30 days of purchase for a full refund. Send an email to customerservice@saltsurf.com notifying us of the return and we will issue a refund as soon as the item is received. Include a note with the item that states reason for return. Returned items must be unworn with tags still attached. An email conformation will be sent to you as soon as refund is approved.  All sale items are final.
                        </div>

                        <div className="cus_title">
                            <strong>Exchanges</strong> 
                        </div>
                        <div className="cus_descr">
                            If you have ordered the incorrect size, you can return the item for the correct size if product is in stock. Send an email to customerservice@saltsurf.com notifying us of the return and we will send out the correct size as soon as the item is received. Include a note with the item that explains what size is desired. Exchange items must be unworn with tags still attached. A confirmation will be emailed to you as soon as the correct size is sent out.
                        </div>

                        <div className="cus_title">
                            <strong>Out of Stock </strong> 
                        </div>
                        <div className="cus_descr">
                            We do not accept back orders for out of stock items. Products that are restocked will be announced via our Instagram @SALTSURF or e-newsletter
                        </div>

                        <div className="cus_title">
                            <strong>Shipping </strong> 
                        </div>
                        <div className="cus_descr">
                            All orders are shipped within 2-3 business days. A shipment conformation and tracking number will be emailed to you as soon as the order leaves our warehouse.
                            <br />
                            We can ship apparel to all international locations. Please allow 7-10 business days (or more depending on customs). All international orders are subject to the respective country’s tariffs and taxes of which the buyer is responsible.
                        </div>

                        <div className="cus_title">
                            <strong>Warranty </strong> 
                        </div>
                        <div className="cus_descr">
                            If the item is found to be damaged or defective under normal use and proper care, SALT SURF will repair or replace the product once the item is sent back to us and inspected. If the item is found to be damaged or defective we will either send an identical item or issue a full refund.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
