import React, { Component } from 'react';
import Adminproductslist from '../adminproductslist'
import AddProduct from '../add-product'
import {Link, Route,Switch} from 'react-router-dom';
import EditProduct from '../edit-product/edit-product';
import Home from '../home'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <>
                {/*<nav>*/}
                    {/*<ul>*/}
                        {/*<li><NavLink to='/' >IN Boutique</NavLink>*/}
                            {/*<NavLink to='/adminproductlist' >AdminProductlist</NavLink>*/}
                            {/*<NavLink to='/productlist' >Productlist</NavLink>*/}
                            {/*<NavLink to='/cart' ><img src ={cart} alt=""/></NavLink></li>*/}
                    {/*</ul>*/}
                {/*</nav>*/}
                <div>
                <ul>
                        <li><Link to="/">IN Boutique</Link>
                        <Link to="/adminproductslist">AdminProductsList</Link>
                        <Link to="/products/add">AddProduct</Link></li>
                </ul>
                </div>

                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/adminproductslist" exact component={Adminproductslist} />
                        <Route path="/products/add" exact component={AddProduct} />
                        <Route path="/products/edit/:productId" exact component={EditProduct} />
                        <Route component={Home} />
                    </Switch>;

                </div>
            </>
        );
    }
}

export default Main;
