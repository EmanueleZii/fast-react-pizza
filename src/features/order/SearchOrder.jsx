/* eslint-disable */
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDeafult();
    if (!query) return;
    navigate(`/search/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
     <input placeholder='Search order #' value={query} 
      onChange={ e=>setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder;