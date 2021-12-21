import {Link} from 'react-router-dom';

function Navbar()
{
    return <header>
        <h1><Link to='/'>ACM Cyber</Link></h1>
        <nav>
            <ul>
                <li><Link to='/challenges'>Challenges</Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;