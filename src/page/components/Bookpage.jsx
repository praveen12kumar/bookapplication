import React from 'react'
import "./bookPage.scss";
const Bookpage = ({book}) => {
  const {_id, title, image, author, price, categoryName} = book;
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
          <button style={{backgroundColor: book.categoryName === "currently-Reading" ? "rgb(11, 67, 89)" : "red"         }} >currentlyReading</button>
          <button style={{backgroundColor: book.categoryName === "want to read" ? "rgb(11, 67, 89)" : "red"         }} >Want to Read</button>
          <button style={{backgroundColor: book.categoryName === "read" ? "rgb(11, 67, 89)" : "red"         }}>Read</button>
        </div>
      </div>
      
    </div>
  )
}

export default Bookpage

