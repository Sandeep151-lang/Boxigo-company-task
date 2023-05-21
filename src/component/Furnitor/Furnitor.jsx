import React from 'react'

const Furnitor = ({list}) => {
  return (
    <>
    <div className='categories'>
      {list?.category.map((category)=>(
        <>
         <div>
          <p className='category-head'>{category?.displayName}</p>
          {
            category?.items?.map((items)=>(
              <>
               <p className='category-sub-list'>{items?.displayName}</p>
              </>
            ))
          }
        
        </div>
        </>
      ))}
     
    </div>
    </>
  )
}

export default Furnitor