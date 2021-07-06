import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlackLine from './components/blackLine/blackLine';
import LogIn from './components/auth/logIn/LogIn';
import SignUp from './components/auth/signUp/SignUp';
import AboutUs from './components/aboutUs/aboutUs';
import Lookbook from './components/lookbook/lookbook';
import Shop from './components/shop/shop';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'
import Size from './components/size/size';
import Customer from './components/customer/customer';
import AdminPanel from './components/admin/admin';
import AdminLookbook from './components/admin/adminLookbook';
import adminShop from './components/admin/adminShop';
import Home from './components/home/home'
import AdminShopCreate from './components/admin/adminShopCreate';
import ItemDetails from './components/itemDetails/ItemDetails';
import AdminUpdate from './components/admin/adminUpdate'



export default function Routes(): ReactElement {
    return (
        <div>
            <BrowserRouter>
                <Route>
                    <BlackLine />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={AboutUs}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route exact path="/login" component={LogIn}/>
                        <Route exact path="/lookbook" component={Lookbook}/>
                        <Route exact path="/shop" component={Shop}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/size" component={Size}/>
                        <Route exact path="/customer" component={Customer}/>
                        <Route exact path='/admin' component={AdminPanel} />
                        <Route exact path='/adminLookBook' component={AdminLookbook} />
                        <Route exact path='/adminShop' component={adminShop} />
                        <Route exact path='/adminShopCreate' component={AdminShopCreate} />
                        <Route exact path='/shop/:id' component = {ItemDetails} />
                        <Route exact path='/adminShopUpdate/:id' component = {AdminUpdate} />
                        
                    </Switch>
                    <Footer />
                </Route>
            </BrowserRouter>
        </div>
    )
}
