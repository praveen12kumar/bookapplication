import React from 'react'
import { useContext } from 'react';
import "./bookPage.scss";
import { DataContext } from '../../context/DataContext';
const Bookpage = ({book}) => {
  const {_id, title, image, author, price} = book;

  const {dataDispatch} = useContext(DataContext);
  const handleChangeCategory = (value, title)=>{
   const category =[
    title, value,
   ]

   dataDispatch({
    type:"changeCategory",
    payload: category
   })
    
    
  }




  return (
    <div className='book-main' key={_id}>
      <div className="book-image">
        <img src={image} alt={_id} />
      </div>
      <div className="book-details">
        <h2>{title}</h2>
        <h4>Author: {author}</h4>
        <h4>Price: {price}</h4>
        <div className="btn-section">
          <button value={"currently-Reading"} style={{backgroundColor: book.categoryName === "currently-Reading" ? "rgb(11, 67, 89)" : "red"}} onClick={(e)=>handleChangeCategory(e.target.value, title)} >currentlyReading</button>
          <button value={"want-to-read"} style={{backgroundColor: book.categoryName === "want-to-read" ? "rgb(11, 67, 89)" : "red" }} onClick={(e)=>handleChangeCategory(e.target.value, title)}>Want to Read</button>
          <button value={"read"} style={{backgroundColor: book.categoryName === "read" ? "rgb(11, 67, 89)" : "red"}} onClick={(e)=>handleChangeCategory(e.target.value, title)} >Read</button>
        </div>
      </div>
      
    </div>
  )
}

export default Bookpage

