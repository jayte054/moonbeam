import "./category-item.styles.scss"

//  export const CategoryItem = ({category}:any)  => {
//     const {imageUrl, title} = category
//     return (
//         <div className="sub-main-container">
//             <div className="background-image" style={{
//                 backgroundImage: `url(${imageUrl})`
//             }}/>
//             <div className="main-body-container">
//                 <h2>{title}</h2>
//                 <p>Shop Now</p>
//             </div>
//         </div>
//     )
// }

export const CategoryItem = ({category}: any) => {
    const {imageUrl, title} = category
    return (
        <div className = "sub-main-container">
            <div className= "background-image" style = {{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="main-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}
