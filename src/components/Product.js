import React from 'react' ;
import Shoes from './../shoes.json' ;
import {Link} from 'react-router-dom' ;
import './../App.css' ;
function Product(){
    console.log(Shoes) ;
    return(
        
        <div className="productBody">
            <h1 className="productHeader">Nike Shoes </h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyNames =>{
                    const shoe = Shoes[keyNames] ;
                    return (<div>
                        <Link key={keyNames} className="link" to={`/product/${keyNames}`}>
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img} height={250} alt="Product" />
                    </Link> </div>)
                })}
            </div>
        </div>
    );
}

export default Product ;