import {NavLink, Link, Outlet} from "react-router-dom"

function NavLayout(){
    return (
        <div className="flex flex-col h-screen">
            <header className="flex justify-center ">
                <nav className="flex justify-center space-x-10">
                    <NavLink to="/">Home</NavLink>
                    <Link to="cocktaillists">Cocktail Menus</Link>
                    <Link to="search">Search Cocktails</Link>
                </nav>
            </header>
            <main className="flex-grow ">
                <Outlet />
            </main>
        </div>
    )
}
export default NavLayout;
