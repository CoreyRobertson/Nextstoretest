import React from 'react'
import Link from 'next/link'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <div>
            <p>
                <Link href='/'>
                    CR MUSIC STORE
                </Link>
            </p>
            <button type='button' onClick={() => setShowCart(true)}>
                <HiOutlineShoppingCart />
                <span>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>

    )
}

export default Navbar