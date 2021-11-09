import React from "react";

function Search({setPokeList, masterList}) {
  
  function handleChange(e) {
    const searchList = masterList.filter((poke)  => {
      return poke.name.includes(e.target.value)
    })
    setPokeList(searchList);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
