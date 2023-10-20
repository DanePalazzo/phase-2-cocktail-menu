import { useState, useEffect } from "react";
import Cocktail from "./Cocktail";

function List({list, cocktailLists, setCocktailLists}) {
    const [cocktails, setCocktails] = useState(list.cocktails)

      const mappedCocktails = cocktails? cocktails.map((cocktail)=> <Cocktail key={cocktail.id} cocktailLists={cocktailLists} setCocktailLists={setCocktailLists} cocktail={cocktail} cocktails={cocktails} setCocktails={setCocktails}/>) : <h4>This list is empty, add a cocktail to the list!</h4>
      const indexOfList = cocktailLists.findIndex((fList) => fList.id === list.id)
      const updatedCocktailLists = cocktailLists.filter((fList) => fList.id !== list.id)

      // console.log(list)
      // console.log(list.id)
      // console.log(cocktailLists)
      // console.log(updatedCocktailLists)


      function handleDeleteList(){
        if(confirm("Are you sure you want to delete this list?") === true){
          cocktails.map((cocktail) => {
            fetch(`http://localhost:3000/cocktails/${cocktail.id}`, {
              method: "DELETE"
            })
            .then(res => res.json())
          });

          fetch(`http://localhost:3000/cocktailList/${list.id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(() => {
            const updatedCocktailLists = cocktailLists.filter((fList) => fList.id !== list.id)
            setCocktailLists(updatedCocktailLists);
          })
        }else{
          console.log("Canceled")
        }
      }
      
  return (
    <div className="p-3">
      <div className="bg-contain bg-black bg-opacity-20 ">
        <div className="flex flex-row space-x-3 justify-center p-4">
            <h3 className="flex justify-center text-xl font-bold">{list.listName}</h3>
            <button className="text-s min-h-0 min-w-min" onClick={handleDeleteList}> Delete List</button>
          </div>
          <div className="flex flex-col space-x-3">
              {mappedCocktails}
          </div>
      </div>
    </div>
  )
}


export default List;