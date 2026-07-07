import React from 'react'
import { getProducts } from '../data/Products'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

function Home() {
  const products = getProducts()

  return (
    <div className='page'>
        <div className="home-hero">
            <h1 className="home-title">Welcome to ShopHub</h1>
            <p className="home-subtitle">Your one-stop shop for all your needs</p>
        </div>
        <div className="container">
            <h2 className="page-title">Featured Products</h2>
            <div className="product-grid">
                {products.map((product)=>(
                   <ProductCard product={product}key={product.id}/>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Home
