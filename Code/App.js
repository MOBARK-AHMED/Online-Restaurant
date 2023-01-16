import React, { useState } from 'react';
import menu from './data'; 
import Navbar from './Navbar'
import Slider from './Slider';
import Menu from './Menu';
import Categories from './Categories';
import Review from './Review';
import FQA from './FQA';
import Footer from './Footer';
import Login from './Login';

function App() {
  const allCategories = ["All", ...new Set(menu.map( (item) => item.category))];
  const [ categories, setCategories ] = useState(allCategories);
  const [ menuItems, setMenuItems ] = useState(menu);

  const filterItems = (e) => {
    const newItems = menu.filter( (item) => e === item.category)
    setMenuItems(newItems);
    if(e === "All"){
      setMenuItems(menu);
    }
  }
  return (
    <main>
      <Navbar></Navbar>
      <Login></Login>
      <Slider></Slider>
      <div className='menu section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories items={menuItems} filterItems={filterItems} categories={categories}></Categories>
        <Menu items={menuItems} ></Menu>
      </div>
      <Review></Review>
      <FQA></FQA>
      <Footer></Footer>
    </main>
  )
}

export default App
