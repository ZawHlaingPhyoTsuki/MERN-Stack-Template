import React from 'react'
import Breadcrumb1 from '../../components/Header/Breadcrumb1';
import NaviBtn from '../../components/NaviBtn';
import WishListRow from '../../components/WishList/WishListRow';

const Wishlist = () => {
  return (
    <div className=''>
      <Breadcrumb1 />
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h1>Wishlist ({4})</h1>
          <NaviBtn>Move All To Cart</NaviBtn>
        </div>
        <WishListRow />
      </div>
    </div>
  );
}

export default Wishlist
