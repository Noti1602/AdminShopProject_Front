import React from 'react';

const ProductsList = ({products,onEdit,onDelete}) => {
    console.log('products:', products);
    return (<div class="wrapper">
        {
            (products && products.length) ? (
                products.map((product) => (
                    <div className='product-listing'>
                        <h3 key={product._id}>{product.name}</h3>
                        <img
                            alt=""
                            width={200}
                            height={250}
                            title={product.name}
                            src={`http://localhost:8000${product.image}`}/>
                        <div>{product.description}</div>
                        <div>Price per item: ${product.price}</div>
                        <div>Total count: {product.count}</div>
                   <div>
                       <button onClick={()=>onEdit(product._id)}>
                       Edit
                   </button>
                       <button onClick={()=>onDelete(product._id)}>
                           Delete
                       </button>
                   </div>

                   </div>

                ))
            ) : 'empty'
        }
    </div>);
};


export default ProductsList;