import React, {useState} from 'react'
import Result from '../componenets/Result'

 function Search({cocktailLists, currentList, setCurrentList, setCocktailLists}) {
  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searchFilter, setSearchFilter] = useState("name")
  const [alchoholicFilter, setalchoholicFilter] = useState("all")
  const [searchToggle, setSearchToggle] = useState(true)

  function handleNameSearch(e){
    e.preventDefault()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(res => res.json())
    .then(res => {
      setSearchResults(res.drinks)
    });
  }
  
  function handleIngredientSearch(e){
    e.preventDefault()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`)
    .then(res => res.json())
    .then(res => setSearchResults(res.drinks));
  }

  function handleSearchToggle(){
    setSearchToggle(!searchToggle)
  }

 const mappedResults = searchResults? searchResults.map((result)=> {return(<Result key={result.idDrink} result={result} searchResults={searchResults} cocktailLists={cocktailLists} setCocktailLists={setCocktailLists} currentList={currentList} setCurrentList={setCurrentList}/>)}): <p>No drinks found with the {searchFilter} {searchValue} </p>

  return (
    <div>
      <div>
        <h2>Search</h2>
        <form className="cocktail-search" onSubmit={(e) => handleNameSearch(e)}>
          <input placeholder="Type cocktail name here..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button type="submit">Search Cocktails</button>
        </form>
      </div>
      <div>
        {mappedResults}
      </div>
    </div>
  )
}

export default Search;