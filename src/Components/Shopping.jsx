import { useContext } from 'react'
import { ProductContext } from '../Context'
import { data } from './data';

export function Shopping() {

    const { show, handleinfo, addtocart } = useContext(ProductContext)
    const products = data

    return (
        <div className="shop-container">
            <div className="shopingcart">
                {
                    products.map((data) => {
                        return (
                            <div className="card" key={data.id} >
                                <div className="product-image"><img src={data.images} alt="" /></div>
                                <div className="rating-info">
                                    <div className="procuct-des">
                                        <i className=" fa fa-circle-info" onClick={() => handleinfo(data.id)}>{show[data.id] && <div className="description">{data.description}</div>}</i></div>
                                    <div className="product-rating"><i className="fa fa-star" aria-hidden="true"></i>{data.rating}</div>
                                </div>
                                <div className="product-title">
                                    <div className="product-name">{data.title} -</div>
                                    <div className="product-price"><i className="fa fa-inr " aria-hidden="true"></i>{data.price}</div>
                                </div>
                                <div className="stock-discount">
                                    <div className="product-discount">Discount- {data.discountPercentage}%</div>
                                    <div className="product-stock">Stock: {data.stock}</div>
                                </div>
                                <div className="product-brand">{data.brand}</div>
                                <div className="product-category">{data.category}</div>
                                <div className="addbtn">
                                    <button onClick={() => addtocart(data)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
