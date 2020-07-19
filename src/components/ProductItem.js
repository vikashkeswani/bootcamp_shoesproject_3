import React from 'react' ;
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json' ;
import './../App.css' ;
function ProductItem(){
    let { id } = useParams() ;
    const shoe = Shoes[id] ;

    if(!shoe)
        return <h2>Product Not Found</h2> ;

    return(
        <div>
            <div className="linkItem">
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img} height={500} alt="Product" />
                    </div>
        </div>
    );
}

export default ProductItem ;