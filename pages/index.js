import React from 'react'
import { client } from '../lib/client';
import { Cart, Footer, Navbar, Product } from '../components';


const Home = ({ products }) => (
  <>

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  </>
)


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home