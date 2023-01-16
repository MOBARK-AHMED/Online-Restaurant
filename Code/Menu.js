import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { FaCartPlus } from 'react-icons/fa';

const Menu = ({items}) => {
  return (
    <main>
    <div className="section-center">
      {
        items.map( (item) => {
          const { id, title, category, price,  img,  desc } = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt={category} className="photo"/>
              <div className='item-info'>
                <div className='header'>
                  <h4>{title}</h4>
                  <h4 className='price'>$ {price}</h4>
                </div>
                <p className='item-text'>{desc}</p>
              </div>
              <div className='cart-container'>
                <button className='cart'><FaCartPlus></FaCartPlus><p>ADD TO CART</p></button>
                <div className='operation-container'>
                  <div className='operation'>
                    <button className='decrease'><FiMinusCircle></FiMinusCircle></button>
                    <p className='item'><span>0</span>item</p>
                    <button className='increase'><FiPlusCircle></FiPlusCircle></button>
                  </div>
                </div>
              </div>
            </article>
          );
        })
      }
    </div>
    </main>
  );
};

export default Menu;
