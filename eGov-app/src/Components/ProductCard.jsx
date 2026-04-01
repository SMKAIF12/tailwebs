import React from 'react'

function ProductCard({ image, name, category, price}) {
  
  return (
    <>
      <div className="cta-cards d-flex m-2">
        <div className="card1 text-center">
          <img src={image} alt="" /> <br />
          <div className="contents">
            <h6>{name}</h6> <br />
            <span>Category: {category}</span> <br />
            <span>Price: Rs. {price}</span> <br />
            <button className='btn btn-info rounded-pill text-white'>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard