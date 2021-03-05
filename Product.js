import React from "react"

function Product(props){
    return (

        <div>
            <p>id: {props.id}</p>
            <p>object: {props.object}</p>
            <p>price: {props.price}</p>
        </div>
    )

}
export default Product