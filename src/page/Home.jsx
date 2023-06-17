import React from 'react'
import {useEffect , useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookpage from './components/Bookpage';
import { DataContext } from '../context/DataContext';
import "./home.scss";


const Home = () => {
    const [data, setData] = useState([]);

    const {products} = useContext(DataContext);
    const navigate = useNavigate();


  useEffect(()=>{
    setData(products);
  },[])

  console.log(data);
  return (
    <div className='homepage'>
        <div className="search-section">
            <button onClick={()=>navigate('/search')} >Search</button>
        </div>
        <div className="main">
            <div className="currently-reading">
                <h1>Currently Reading</h1>
                
                <div className="book-section">
                {
                      data.filter((book)=> book.categoryName === "currently-Reading").map((book)=>(
                        <Bookpage book={book}/>
                      ))
                }
                </div>
            </div>
            <div className="want-to-read">
                <h1>Want to Read</h1>
                <div className="book-section">
                {
                      data.filter((book)=> book.categoryName === "want to read").map((book)=>(
                        <Bookpage book={book}/>
                      ))
                }
                </div>
            </div>
            <div className="read">
                <h1>Read</h1>
                <div className="book-section">
                {
                      data.filter((book)=> book.categoryName === "read").map((book)=>(
                        <Bookpage book={book}/>
                      ))
                }
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
