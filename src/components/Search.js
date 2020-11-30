import React from 'react'
import { BsSearch } from "react-icons/bs";

function Search (props) {
  return (
    <form className = "wrapper">
      <input className = "search" placeholder="Search Games" value={props.searchValue} onChange={props.searchGames}/>
    </form>
  )
}

export default Search
