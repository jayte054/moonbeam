import "./cart-item.scss"

export const CartItem = ({cartItem}: any) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${price}`} />
            <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} * {price}</span>
            </div>
            
        </div>

    )
}

// export const CartItem = (props: any) => {
//     const {name, imageUrl, price, quantity} = props.cartItem

//     return (
//         <div className="cart-item-container">
//             <img src={imageUrl} alt={`${name}`}/>
//             <div className = "item-details">
//             <span className="name">{name}</span>
//             <span className="price">{quantity} * {price}</span>
//             </div>
            
//         </div>
//     )
// }

