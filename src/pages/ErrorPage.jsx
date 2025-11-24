import { Link } from "react-router-dom"

const ErrorPage = () => {

    
    return(
        <>
        <h1> Error 404. Sidan hittades inte.</h1>
        <Link to={'/'}><button>Gå tillbaka till startsidan</button></Link>
        </>
    )
}
export default ErrorPage