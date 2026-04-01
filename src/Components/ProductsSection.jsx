import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import sup1 from '../assets/Group-20708-1.png'
import sup2 from '../assets/sup-1.png';
import sup3 from '../assets/sup-2.png';
import sup4 from '../assets/sup-3.png';
import sup5 from '../assets/sup-4.png';
function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filterValue, setFilterValue] = useState('All');
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => {
        if (!response.ok) {
          throw Error('failed to fetch data')
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
  }, [])
  if (!products || products.length === 0) {
    return (<>
      Loading Products!!
    </>)
  }
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterValue === 'All' || product.category === filterValue;
    return matchesSearch && matchesCategory;
  })
  const productsCollection = filteredProducts.map(data => <ProductCard key={data.id} name={data.name} category={data.category} price={data.price} image={data.image} />)
  const handleSearch = (value) => {
    setSearch(value);
  }
  const handleFilter = (value) => {
    setFilterValue(value)
  }
  return (
    <>
      <section className="cta">
        <div className="ctadiv">
          <h1>Latest at <b>eGov</b></h1>
          <div className="d-flex flex-wrap justify-content-center w-100">
            <button className="btn btn-info rounded-pill text-white px-3 py-2 m-2">What's New</button>
            <button className="btn btn-light border rounded-pill px-3 py-2 m-2">Articles</button>
            <button className="btn btn-light border rounded-pill px-3 py-2 m-2">Whitepapers</button>
            <button className="btn btn-light border rounded-pill px-3 py-2 m-2">Case Studies</button>
            <button className="btn btn-light border rounded-pill px-3 py-2 m-2">Strategy Papers</button>
            <button className="btn btn-light border rounded-pill px-3 py-2 m-2">News & Media</button>
            <button className="btn btn-light border rounded-pill px-3 py-2 m-2">Videos</button>
            <button className="btn btn-light border rounded-pill px-3 py-2 m-2">Newsletter</button>
          </div>
          <div className="d-flex flex-wrap justify-content-end gap-2">
            <input
              type="text"
              className="border rounded p-2 mt-3 flex-grow-1 flex-md-grow-0"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by Name"
            />
            <select
              className="border rounded p-2 mt-3 flex-grow-1 flex-md-grow-0"
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value="All" defaultValue="All">All</option>
              {products.map((data) => (
                <option key={data.id} value={data.category}>
                  {data.category}
                </option>
              ))}
            </select>
          </div>


          <div className='d-flex flex-wrap productscollection'>
            {productsCollection.length === 0 ? (<span>No results found</span>) : productsCollection}
          </div>
            <button className="btn btn-info rounded-pill text-white productbt" >See All</button>
        </div>

        <div className="supporters">
          <h1>
            Our <b>Supporters</b>
          </h1>
          <div className="images d-flex flex-wrap justify-content-center gap-3 mt-3">
            <img src={sup1} alt="Supporter 1" className="img-fluid" />
            <img src={sup2} alt="Supporter 2" className="img-fluid" />
            <img src={sup3} alt="Supporter 3" className="img-fluid" />
            <img src={sup4} alt="Supporter 4" className="img-fluid" />
            <img src={sup5} alt="Supporter 5" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsSection