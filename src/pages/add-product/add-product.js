import React from 'react';

const AddProduct = () => {
    return (
        <form name="userForm"
              action={'http://localhost:8000/products/products/'}
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
                <input className="form-control" name="price" type="value"/>
            </div>
            <div className="form-group">
                <label htmlFor="count">Count:</label>
                <input className="form-control" name="count" type="value"/>
            </div>
            <div className="form-group">
                <input type='submit' className="btn btn-sm btn-primary" value='Send'
                   />

            </div>
        </form>);


};
export default AddProduct;

