import React from 'react'
import { useContext} from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext'
import Bookpage from './components/Bookpage'

import "./search.scss";

const Search = () => {
    const { dataDispatch ,products, search} = useContext(DataContext)
    const navigate = useNavigate();
    
    console.log("Array",products);
    const handleSearch = (value) => {
       dataDispatch({
        type: 'search',
        payload: value,
       })
        
    }


  return (
    <div className="section-page">
        <div className="header">
            <button onClick={()=>navigate('/')} ><AiOutlineArrowLeft/> Home </button>
            <input type="text" onChange={(e)=>handleSearch(e.target.value)} />
        </div>
        <div className="search-book">
        {
            products.filter((book)=> book.title.includes(search)).map((book)=>(
                <Bookpage book={book} />
            ))
        }
        </div>
    </div>
  )
}

export default Search
