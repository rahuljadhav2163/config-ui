import React from 'react'
import "./Home.css"
import Config from "./../../utils/config.json"
function Home() {
  return (
    <div>
      <h1 className='shop-name'>{Config.title}</h1>
      <h3 className='slogen'>{Config.slogen}</h3>

      <p className='shop-item'>Sweets :</p>
      <div className='containers'>

      {
        Config.item.map((itemData , index)=>{
            const {name , price , img} = itemData;
            return(
              
                 <div className='card'>
                    <img className='imgg' src={img}/>
                    <h1 className='name'>{name}</h1>
                    <h3 className='price'>{price}</h3>
                </div>
          
            )
        })
      }   
      </div>
    </div>
  )
}

export default Home

