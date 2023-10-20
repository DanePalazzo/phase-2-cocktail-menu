import { useNavigate, Link } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate()
    return(
        <div>
            <p>404 NOT FOUND</p>
            <Link to={"/"}>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default NotFound;