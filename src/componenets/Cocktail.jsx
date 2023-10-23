import { useEffect, useState } from "react"
import CocktailDetails from "./CocktailDetails"

function Cocktail({cocktail, cocktails, setCocktails, cocktailLists, setCocktailLists}) {
    const [cocktailInfo, setCocktailInfo] = useState({})
    const [currentIndex, setCurrentIndex] = useState("")
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
      const mappedLists = cocktailLists.map((list) => list.id)
      const updateIndex = mappedLists.findIndex((listID) => listID === cocktail.cocktailListId)
      setCurrentIndex(updateIndex)
    }, [cocktailLists, cocktail.cocktailListId])

    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`)
        .then(res => res.json())
        .then(res => setCocktailInfo(res.drinks[0]))
      }, [])

  function handleDelete(){
    fetch(`http://localhost:3000/cocktails/${cocktail.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {
      const updatedCocktails = cocktails.filter((c)=> c.id !== cocktail.id )
      let updatedCocktailLists = [...cocktailLists]
      updatedCocktailLists[currentIndex].cocktails = updatedCocktails
      setCocktails(updatedCocktails)
      setCocktailLists(updatedCocktailLists)
    })
  }

  function handlshowDetails(){
    setShowDetails(!showDetails)
  }

  // console.log(cocktailInfo)


  return (
    <div className="flex grid-rows-1 justify-center flex-auto">
        <div className="flex justify-center flex-col">
          <div className="flex justify-center flex-row space-x-1.5">
            <h4 className="flex-row hover:font-bold" onClick={handlshowDetails}>{cocktailInfo.strDrink}</h4>
            <button className="text-xs text-justify min-h-0 min-w-min" onClick={(e)=>handleDelete(e)}>🗑️</button>
          </div>
          <div>
            {showDetails ? <CocktailDetails cocktailInfo={cocktailInfo}/> : null}
          </div>
        </div>
    </div>
  )
}

export default Cocktail