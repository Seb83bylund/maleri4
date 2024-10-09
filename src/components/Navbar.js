import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="flex justify-between items-center bg-blue-500 p-5 text-white">
            <h2 className="text-3xl">Måleri</h2>
            <ul className="flex gap-4">
                <li>
                    <Link to="/">
                        Hem
                    </Link>
                </li>
                <li>
                    <Link to="/tjanster">
                        Tjänster
                    </Link>
                </li>
                <li>
                    <Link to="/rotavdrag">
                        Rot-avdrag
                    </Link>
                </li>
                <li>
                    <Link to="/priser">
                        Priser
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;