import React, {useState} from 'react'

function CocktailDetails({cocktailInfo}) {
    const [showInstructions, setShowInstructions] = useState(false)

    let ingredientList = []

    const handleIngredientList = (cocktailI) => {
      cocktailI.strIngredient1? ingredientList.push(cocktailI.strMeasure1 ? cocktailI.strIngredient1 + ":  " +cocktailI.strMeasure1 : cocktailI.strIngredient1) : null
      cocktailI.strIngredient2? ingredientList.push(cocktailI.strMeasure2 ? cocktailI.strIngredient2 + ":  " +cocktailI.strMeasure2 : cocktailI.strIngredient2) : null
      cocktailI.strIngredient3? ingredientList.push(cocktailI.strMeasure3 ? cocktailI.strIngredient3 + ":  " +cocktailI.strMeasure3 : cocktailI.strIngredient3) : null
      cocktailI.strIngredient4? ingredientList.push(cocktailI.strMeasure4 ? cocktailI.strIngredient4 + ":  " +cocktailI.strMeasure4 : cocktailI.strIngredient4) : null
      cocktailI.strIngredient5? ingredientList.push(cocktailI.strMeasure5 ? cocktailI.strIngredient5 + ":  " +cocktailI.strMeasure5 : cocktailI.strIngredient5) : null
      cocktailI.strIngredient6? ingredientList.push(cocktailI.strMeasure6 ? cocktailI.strIngredient6 + ":  " +cocktailI.strMeasure6 : cocktailI.strIngredient6) : null
      cocktailI.strIngredient7? ingredientList.push(cocktailI.strMeasure7 ? cocktailI.strIngredient7 + ":  " +cocktailI.strMeasure7 : cocktailI.strIngredient7) : null
      cocktailI.strIngredient8? ingredientList.push(cocktailI.strMeasure8 ? cocktailI.strIngredient8 + ":  " +cocktailI.strMeasure8 : cocktailI.strIngredient8) : null
      cocktailI.strIngredient9? ingredientList.push(cocktailI.strMeasure9 ? cocktailI.strIngredient9 + ":  " +cocktailI.strMeasure9 : cocktailI.strIngredient9) : null
      cocktailI.strIngredient10 ? ingredientList.push(cocktailI.strMeasure10 ? cocktailI.strIngredient10 + ":  " +cocktailI.strMeasure10 : cocktailI.strIngredient10) : null
      cocktailI.strIngredient11 ? ingredientList.push(cocktailI.strMeasure11 ? cocktailI.strIngredient11 + ":  " +cocktailI.strMeasure11 : cocktailI.strIngredient11) : null
      cocktailI.strIngredient12 ? ingredientList.push(cocktailI.strMeasure12 ? cocktailI.strIngredient12 + ":  " +cocktailI.strMeasure12 : cocktailI.strIngredient12) : null
      cocktailI.strIngredient13 ? ingredientList.push(cocktailI.strMeasure13 ? cocktailI.strIngredient13 + ":  " +cocktailI.strMeasure13 : cocktailI.strIngredient13) : null
      cocktailI.strIngredient14 ? ingredientList.push(cocktailI.strMeasure14 ? cocktailI.strIngredient14 + ":  " +cocktailI.strMeasure14 : cocktailI.strIngredient14) : null
      cocktailI.strIngredient15 ? ingredientList.push(cocktailI.strMeasure15 ? cocktailI.strIngredient15 + ":  " +cocktailI.strMeasure15 : cocktailI.strIngredient15) : null
      return (ingredientList)
      }
  
    handleIngredientList(cocktailInfo)
  
    const mappedIngredients = ingredientList.map((ingredient, index) => <p key={index}>{ingredient}</p>)
    
    let instruction = cocktailInfo.strInstructions

    function handlshowInstructions(){
        setShowInstructions(!showInstructions)
      }

  return (
    <div className='p-3 bg-opacity-50 bg-black'>
        <ul>
            <div className='flex justify-center flex-row '>
                {showInstructions ? <button onClick={handlshowInstructions}>Hide Instructions</button> :  <button onClick={handlshowInstructions}>Show Instructions</button>}
            </div>
            <h4 className="text-m font-bold">Ingredients:</h4>
            {mappedIngredients}
            {showInstructions ? 
                <div className='max-w-fit p-5'>
                    <h4 className="text-m font-bold">Instructions:</h4>
                    <p className="flex flex-flow">{cocktailInfo.strInstructions}</p>
                </div> 
                : null}
        </ul>
    </div>
  )
}

export default CocktailDetails