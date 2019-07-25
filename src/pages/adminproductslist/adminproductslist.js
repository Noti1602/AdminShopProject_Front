import React, {Component} from 'react';
import axios from 'axios';
import ProductsList from '../../components/products-list';

class Adminproductslist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        axios.get('http://localhost:8000/products')
            .then(res => res.data)
            .then(products => {
                this.setState({
                    products
                })
            })
            .catch((err) => {
                console.log('Fetch error:', err)
            })
    }

    onEdit = (productId) => {
        this.props.history.push(`/products/edit/${productId}`)
    };
    onDelete = (productId) => {
        const self = this;

        axios({
                method: 'DELETE',
                url: `http://localhost:8000/products/products/${productId}`,
            }
        )
            .then(() => {
                console.log('deleted', self);
                self.setState({
                    products: self.state.products.filter(p => {
                        if (p._id !== productId) {
                            return true;
                        }
                    })
                });

                console.log(self.state);

            })
            .catch((err) => {
                console.log(err)
            });

    };

    render() {
        const {products} = this.state;
        return (
            <ProductsList products={products} onEdit={this.onEdit} onDelete={this.onDelete}/>
        );
    };
}

export default Adminproductslist;



