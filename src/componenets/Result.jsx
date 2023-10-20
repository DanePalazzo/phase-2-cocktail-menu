import { useState, useEffect } from "react";

function Result({result, searchResults, cocktailLists, setCocktailLists, currentList, setCurrentList}) {
  const [currentIndex, setCurrentIndex] = useState("")
  // const [existingCocktail, setExistingCocktail] = useState(false)

  const mappedLists = cocktailLists.map((list, index)=>{return(<option className="" key={index} value={index}> {list.listName} </option>)})

  function handleAdd() {
    let newCocktail = {
      idDrink: parseInt(result.idDrink),
      cocktailListId: parseInt(currentList.id),
    };

    if (currentIndex === "") {
      
      alert("Please select a Cocktail List");
    } else if (cocktailLists[currentIndex].cocktails.some((cocktail) => parseInt(cocktail.idDrink) === parseInt(result.idDrink)) === true) {
        const confirmed = window.confirm("This cocktail already exists in the selected list. Do you want to add it anyway?");
        if (confirmed) {
          addCocktail(newCocktail);
        }else{
          onsole.locg("cancled")
        }
    } else {
      addCocktail(newCocktail);
    }
  }

  function addCocktail(newCocktail) {
    fetch("http://localhost:3000/cocktails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCocktail),
    })
      .then((res) => res.json())
      .then((res) => {
        let updatedCocktailLists = [...cocktailLists];
        updatedCocktailLists[currentIndex].cocktails = [...updatedCocktailLists[currentIndex].cocktails, res]
        setCocktailLists(updatedCocktailLists);
      })
      .then(alert(`Added to ${currentList.listName}`));
  }
  
  let ingredientList = []

  const handleIngredientList = (result) => {
    result.strIngredient1? ingredientList.push(result.strIngredient1) : null
    result.strIngredient2? ingredientList.push(result.strIngredient2) : null
    result.strIngredient3? ingredientList.push(result.strIngredient3) : null
    result.strIngredient4? ingredientList.push(result.strIngredient4) : null
    result.strIngredient5? ingredientList.push(result.strIngredient5) : null
    result.strIngredient6? ingredientList.push(result.strIngredient6) : null
    result.strIngredient7? ingredientList.push(result.strIngredient7) : null
    result.strIngredient8? ingredientList.push(result.strIngredient8) : null
    result.strIngredient9? ingredientList.push(result.strIngredient9) : null
    result.strIngredient10 ? ingredientList.push(result.strIngredient10) : null
    return (ingredientList)
    }

  handleIngredientList(result)

  console.log(ingredientList)

  const mappedIngredients = ingredientList.map((ingredient, index) => <p key={index}>{ingredient}</p>)

  return (
    <div className="m-5">
      <div className="flex auto-rows-auto justify-center gap-20">
        <h4 className="text-xl font-bold justify-self-start">{result.strDrink}</h4>
        <div className="flex auto-rows-auto gap-5">
          <img className="w-52" src={result.strDrinkThumb}></img>
          <ul>
            <h4 className="text-xl font-bold">Ingredients:</h4>
            {mappedIngredients}
          </ul>
        </div>
      </div>
        <div>
          <button onClick={handleAdd}>Add Drink To</button>
          <select onChange={(e) => {setCurrentIndex(e.target.value); setCurrentList(cocktailLists[`${e.target.value}`])}}>
            <option value={[]}>Select A Cocktail Menu</option>
            {mappedLists}
          </select>
        </div>
    </div>
  )
}

export default Result;