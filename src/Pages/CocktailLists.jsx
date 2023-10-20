import { useState } from "react";
import List from "../componenets/List";


function CocktailLists( {cocktailLists, setCocktailLists} ) {
  const [listNameValue, setListNameValue] = useState("")

  const mappedLists = cocktailLists? cocktailLists.map((list)=> <List key={list.id} list={list} cocktailLists={cocktailLists} setCocktailLists={setCocktailLists}/>) : <h3>Add A Cocktail List</h3>


  function handleAddList(e){
    e.preventDefault()
    if(listNameValue.trim() === ""){
      alert("Please name the cocktail list")
    } else{
      fetch("http://localhost:3000/cocktailList", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          listName: listNameValue.trim()
        })
      })
      .then(res=> res.json())
      .then(res => {
        setCocktailLists([...cocktailLists, res])
        console.log(cocktailLists)
      })
    }
  }


  return (
    <div>
      <h2 className="text-4xl font-bold">Cocktail Menues</h2>
      <div>
        <form className="newListForm" onSubmit={(e) => handleAddList(e)}>
          <input className="shadow-inner w-2/4 h-8" placeholder="Type list name here..." value={listNameValue} onChange={(e) => setListNameValue(e.target.value)} />
          <button className="shadow-xl" type="submit"> Create New Cocktail Menu </button>
        </form>
      </div>
      <div className="flex flex-col">
        {mappedLists}
      </div>
    </div>
  )
}


export default CocktailLists;