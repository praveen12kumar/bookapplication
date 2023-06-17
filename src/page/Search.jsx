import React from 'react'
import { useContext, useState } from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext'
import Bookpage from './components/Bookpage'

import "./search.scss";

const Search = () => {
    let { dataDispatch ,products} = useContext(DataContext)
    const navigate = useNavigate();
    let [search, setSearch] = useState("");
    
    const handleSearch = (value) => {
        setSearch(value)
        const newProducts = products.filter((item)=> item.title === search);
        
            products = newProducts;
        
    }


  return (
    <div className="section-page">
        <div className="header">
            <button onClick={()=>navigate('/')} ><AiOutlineArrowLeft/> Home </button>
            <input type="text" onChange={(e)=>handleSearch(e.target.value)} />
        </div>
        <div className="search-book">
        {
            products.map((book)=>(
                <Bookpage book={book} />
            ))
        }
        </div>
    </div>
  )
}

export default Search
