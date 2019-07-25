import React, {Component} from 'react';
import axios from 'axios';

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: ''
        }
    }

    componentDidMount() {
        const productId = this.props.match.params.productId;
        axios.get(`http://localhost:8000/products/products/${productId}`)
            .then(res => res.data)
            .then(product => {
                this.refs.name.value = product.name;
                this.refs.description.value = product.description;
                this.refs.image.value = product.image;
                this.refs.price.value = product.price;
                this.refs.count.value = product.count;
                this._id = product._id;
            })
            .catch((err) => {
                console.log('Fetch error:', err)
            })
    }

    sendData = (e) => {
        e.preventDefault();
        const newProduct = {
            'productid': this._id,
            'name': this.refs.name,
            'description': this.refs.description,
            'image': this.refs.image,
            'price': this.refs.price,
            'count': this.refs.count
        };

        const productId = this.props.match.params.productId;
        debugger;
        axios({
            method: 'PUT',
            url: `http://localhost:8000/products/products/${productId}`,
            data: newProduct,
            headers: {'content-type': 'multipart/form-data'}
        })
            .then(() => {
                this.props.history.push('/')
            })
            .catch((err) => {
                this.setState({
                    errorMsg: err.message
                })
            })
    };

    render() {


        return (
            <>


                <h3 className="text2">Admin Productlistpage for editing a product:</h3>


                <h3 className="text2">If you want to edit information a product, please, fill in the next form and press
                    the button
                    Send</h3>

                <form name="userForm"
                      action={'http://localhost:8000/products/products/edit/' + this.props.match.params.productId}
                      method='POST'
                      encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input className="form-control" name="description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input type="file" className="upload-btn-wrapper" name="image"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input className="form-control" name="price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="count">Count:</label>
                        <input className="form-control" name="count"/>
                    </div>
                    <div className="form-group">
                        <input type='submit' className="btn btn-sm btn-primary" value='Send'
                           />

                    </div>
                </form>

            </>)
    };

}


export default EditProduct;
