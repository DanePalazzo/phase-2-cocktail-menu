import React from 'react'
import List from '../componenets/List';

function Home({cocktailLists, setCocktailLists}) {
  let FeaturedListRandom = Math.floor(Math.random() * cocktailLists.length)
  let FeaturedList = cocktailLists[FeaturedListRandom]

 const handleRender = ()=>{
    return (
        <List list={FeaturedList} cocktailLists={cocktailLists} setCocktailLists={setCocktailLists}/>
    );
}

const delayedRender = () => {
    setTimeout(() => {
        handleRender();
    }, 100); // 100 milliseconds delay
}

  return (
    <div>
      <h2 className="text-4xl font-bold">Home</h2>
      <div>
        <h3 className="text-2xl font-bold">Welcom to the Cocktail Menu Builder!</h3>
        <div className="p-3">
          <p>To get started, create a Cocktail Menu then go to search and add your desired drinks!</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
