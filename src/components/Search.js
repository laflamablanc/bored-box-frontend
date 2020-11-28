import React from 'react'

function Search (props) {
  return (
    <form>
      <input placeholder="Search Games" value={props.searchValue} onChange={props.searchGames}/>
    </form>
  )
}

export default Search
