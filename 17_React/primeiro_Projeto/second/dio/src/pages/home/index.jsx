import { Link } from "react-router-dom";
const Home = () => {
    return(<>
        <h1>Estou na página de Home</h1>
        <Link to="/Login">Fazer Login</Link >
        </>)
}

export {Home};