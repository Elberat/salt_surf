import React, { ReactElement } from 'react'
import './aboutUs.css'


export default function AboutUs(): ReactElement {


    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="about_content">
                        <div className="about_content_left">
                            <img src="https://images.squarespace-cdn.com/content/v1/56304449e4b064f49ce74449/1597895084455-VJMFCY53YDADYWZFG1DI/ke17ZwdGBToddI8pDm48kJJIojpfanPxaHxcbVagiG17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URLvJVfwa_JzU6d7M5wpun9-p7v6rQAIXq-hgtUkf_lAqbQn8vVQ_opmIaE21ql8RQ/DSCF4313.jpg?format=750w" alt="" />
                        </div>

                        <div className="about_content_right">
                            <div className="about_title">
                                <h3>ABOUT US</h3>
                            </div>
                            <div className="about_descr">
                                <div>
                                    The inspiration behind SALT SURF has always been rooted in an accessible form of fantasy, in real life escapism, in making the ordinary, extraordinary and in finding beauty in our daily surroundings.  Much of the inspiration coming from suburban life, making fantasy out of something we all have. Ultimately the goal has always been to create something that people can connect with and see themselves in.     
                                </div><br />
                                
                                <div>
                                    Owner Nabil Samadani is a native Californian, and child of Iranian immigrants. He started SALT SURF in New York City in 2011. Attempting to carve a niche in the market that is inclusive and accepting 
                                </div><br />
                                
                                <div>
                                    Originally, the brand was primarily making surfboards for the New York surf community. But as the brand has grown, the focus has shifted to mostly apparel and accessories.  Everything is made in the USA as often as possible, and made in small batches.  
                                </div><br />

                                <div>
                                    Since its early days, SALT SURF has grown in some ways, but still maintains its original vision of inclusion at the forefront of every turn it takes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
