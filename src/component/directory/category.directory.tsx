import {CategoryItem} from "../categoryItem/category-item.component"
import "./categories.styles.scss"
// import { Outlet } from 'react-router-dom';
import { Studio } from "../studio/studio.component";


// export const CategoryDirectory = ({delight}: any) => {
//     return (
//         <div>
//         <header className="header-name">
//           MoonBeam Cakes
//         </header>
//         <div className="main-container">
//           {delight.map((category: any ) => (
//            <CategoryItem key = {category.id} category= {category} />
//           ))}  
//         </div>
//       </div>
//     )
// }

export const CategoryDirectory = ({delight}: any) => {
    return (
        <div>
            <header className="header-name">
                Moonbeam Cakes.
            </header>
            <div style={{fontStyle: "italic", fontWeight:"bold", fontSize:"15px", textAlign: "center"}}>
            <Studio />
            </div>
            <div className="main-container">
                {delight.map((category: any) => {
                   return <CategoryItem key={category.id} category = {category} />
            })}
            </div>
        </div>
    )
}