import React from 'react';
import { CategoryDirectory } from '../../component/directory/category.directory';
// import { CategoryDirectory } from '../../component/directory/category.directory';




const LandingPage = () => {
  const delight = [
    {
      "id": 1,
      "title": "Wedding Cakes",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "Anniversary Cakes",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "Birthday Cakes",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "Custom Cakes",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "pastries(Small chops)",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    },
    {
      "id": 6,
      "title": "Suprise Packages",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  return (
    <>
    
   <CategoryDirectory delight = {delight}/>
   </>
  );
}

export default LandingPage;
