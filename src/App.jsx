import './App.css'
import { useState , useEffect} from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import NavLayout from './componenets/NavLayout'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'
import CocktailLists from './Pages/CocktailLists'
import Home from './Pages/Home'



function App() {
  const [cocktailLists, setCocktailLists] = useState([])
  const [currentList, setCurrentList] = useState([])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavLayout />}>
        <Route path="/" element={<Home cocktailLists={cocktailLists} setCocktailLists={setCocktailLists}/>}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="cocktaillists" element={<CocktailLists cocktailLists={cocktailLists} setCocktailLists={setCocktailLists}/>}/>
        <Route path="search" element={<Search currentList={currentList} setCurrentList={setCurrentList} cocktailLists={cocktailLists} setCocktailLists={setCocktailLists}/>}/>
      </Route>
    )
  )

  useEffect(()=>{
    fetch("http://localhost:3000/CocktailLists")
    .then(res => res.json())
    .then(res => setCocktailLists(res))
  }, [])

  return (
    <div className='object-top'>
      <h1 className="text-6xl font-extrabold">COCKTAIL MENU BUILDER</h1>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
