import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/"><h1>To do list</h1></Link>
            <div class="navbar-block">
                <Link to="/"><p>List</p></Link>
                <Link to="/create"><p>Create</p></Link>
            </div>
        </nav>
    );
 }
export default NavBar;
